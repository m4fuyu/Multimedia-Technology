// 初始化游戏关卡
function initLevel(){
    curMap = copyArray(levels[iCurlevel]);
    curLevel = levels[iCurlevel];
    
    // 初始化朝向
    currentFacing = "down"; 
    curMan = down; // 默认图片

    // 初始化打字状态
    wordQueue = [];   
    userTyping = "";
    moveTimes = 0;
    
    // 填满单词队列 (保持10个)
    fillWordQueue();
    reflashScreen(); // 绘制地图和侧边栏
    
    // 注意：drawSidebar 会在 DrawMap 结束时调用，或者我们需要手动调用它
    // 建议在 DrawMap 底部统一调用 drawSidebar
    if (typeof window.gameLoopStarted === 'undefined') {
        window.gameLoopStarted = true;
        setTimeout(() => gameLoop(), 500);
    }
}

// 刷新屏幕显示
function reflashScreen(){
    InitMap();
    DrawMap(curMap);
    drawSidebar();
    showMoveInfo();
    drawButton(buttonNext);
    drawButton(buttonPre);
    drawButton(buttonReset);
    wordSprite.scale();
}

// 填充单词队列
function fillWordQueue() {
    while(wordQueue.length < 10) { 
        // 传入当前关卡索引以获取对应难度单词
        wordQueue.push(getRandomWord(iCurlevel));
    }
}
// 绘制地板
function InitMap(){
    for (var i=0;i<16 ;i++ ){
        for (var j=0;j<16 ;j++ ){
            ctx.drawImage(block, offsetX + w*j, offsetY + h*i, w, h);
        }
    }
}

//绘制地图
function DrawMap(level){
	for (var i=0;i<level.length ;i++ )
	{
		for (var j=0;j<level[i].length ;j++ )
		{
			var pic = block;
			switch (level[i][j])
			{
			case 1: pic = wall; break;
			case 2: pic = ball; break;
			case 3: pic = box; break;
			case 4: 
                pic = curMan; 
                perPosition.x = i;
                perPosition.y = j;
                break;
			case 5: pic = box; break;
			}
            ctx.drawImage(pic, offsetX + w*j-(pic.width-w)/2, offsetY + h*i-(pic.height-h), pic.width, pic.height);
		}
	}
// 【新增】每次重绘地图时，更新左侧的打字UI    
    
}

// 【新增】绘制左侧侧边栏 (单词队列 + 输入框)
function drawSidebar() {
    // 1. 清除侧边栏区域 (左侧 350px 宽)
    ctx.fillStyle = "#5e89c9ff"; // 使用背景色覆盖
    ctx.fillRect(0, 0, 300, H);

    // 2. 设置样式
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let centerX = 150; // 侧边栏中心X
    let bottomY = 600; // 单词柱底端Y位置

    // 3. 绘制单词队列 (从下往上画)
    // wordQueue[0] 是最下面的目标单词
    for(let i = 0; i < wordQueue.length; i++) {
        let word = wordQueue[i];
        let yPos = bottomY - (i * 50); // 每个单词间隔50px
        
        // 目标单词 (index 0) 高亮显示
    if(i === 0) {
        // 使用精灵动画的字体大小
        wordSprite.scale();
        ctx.font = `bold ${Math.round(wordSprite.currentFontSize)}px Courier New`;
        ctx.fillStyle = "#A52A2A";

    } else {
        ctx.font = "24px Courier New";
        ctx.fillStyle = "rgba(0,0,0,0.5)";
    }
    ctx.fillText(word, centerX, yPos);
    }

    // 4. 绘制输入框
    let inputY = bottomY + 60;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(centerX - 100, inputY - 20, 200, 40); // 白底
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(centerX - 100, inputY - 20, 200, 40); // 黑框

    // 5. 绘制用户当前的输入
    ctx.font = "bold 28px Courier New";
    ctx.fillStyle = "#000000";
    ctx.fillText(userTyping, centerX, inputY);

    // 6. 绘制操作提示
    ctx.font = "16px sans-serif";
    ctx.fillStyle = "#333";
    ctx.fillText("输入单词移动 / 英文指令转向", centerX, inputY + 50);
    ctx.fillText("当前朝向: " + currentFacing.toUpperCase(), centerX, inputY + 80);
}

// 【核心修改】键盘监听逻辑
function doKeyDown(event){
    let key = event.key; // 获取按键字符
    let keyCode = event.keyCode;

    // 1. 处理功能键
    if (keyCode === 8) { // Backspace
        userTyping = userTyping.slice(0, -1);
        event.preventDefault(); // 防止浏览器后退
    } 
    else if (keyCode === 13) { // Enter
        userTyping = "";
    }
    else if (key.length === 1 && /[a-zA-Z]/.test(key)) {
        // 2. 处理字母输入
        if (userTyping.length < 10) {
            userTyping += key.toLowerCase();
        }
    } else {
        // 忽略其他按键 (如 Ctrl, Shift 等)
        return;
    }

    // 3. 实时检查逻辑
    checkInputLogic();
    
    // 4. 重绘界面更新输入框显示
    reflashScreen();
}

function doClick(event) {
    // 1. 获取点击在 Canvas 上的相对坐标
    // getBoundingClientRect() 返回 Canvas 相对于视口的位置
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // 2. 检查点击是否在按钮范围内
    if (isButtonClicked(clickX, clickY, buttonNext)) {
        // 3. 触发事件
        handleButtonNextClick();
    }else if (isButtonClicked(clickX, clickY, buttonPre)) {
        handleButtonPreClick();
    }else if (isButtonClicked(clickX, clickY, buttonReset)) {
        initLevel();
    }
}

//检查输入内容执行指令
function checkInputLogic() {
    // A. 检查转向指令 (up, down, left, right)
    const directions = ["up", "down", "left", "right"];
    if (directions.includes(userTyping)) {
        turnTo(userTyping); // 仅转向
        userTyping = ""; // 清空输入
        return;
    }

    // B. 检查是否匹配目标单词
    let targetWord = wordQueue[0];
    if (userTyping === targetWord) {
        // 单词匹配成功 -> 向当前方向移动一格
        moveForward();
        
        // 逻辑更新
        userTyping = "";
        wordQueue.shift(); // 移除已完成单词
        fillWordQueue();   // 补充新单词
        // 重置强调动画
        wordSprite.reset();
    }
}

//仅转向 (不移动坐标)
function turnTo(dir) {
    currentFacing = dir;
    switch(dir) {
        case "up": curMan = up; break;
        case "down": curMan = down; break;
        case "left": curMan = left; break;
        case "right": curMan = right; break;
    }
    // 转向后立即刷新画面显示新朝向
}

// 【新增】向前移动 (基于当前朝向)
function moveForward() {
    let p1, p2;
    // 根据当前朝向计算目标坐标
    switch (currentFacing)
    {
    case "up":
        p1 = new Point(perPosition.x-1, perPosition.y);
        p2 = new Point(perPosition.x-2, perPosition.y);
        console.log(p1, p2);
        break;
    case "down":
        p1 = new Point(perPosition.x+1, perPosition.y);
        p2 = new Point(perPosition.x+2, perPosition.y);
        console.log(p1, p2);
        break;
    case "left":
        p1 = new Point(perPosition.x, perPosition.y-1);
        p2 = new Point(perPosition.x, perPosition.y-2);
        console.log(p1, p2);
        break;
    case "right":
        p1 = new Point(perPosition.x, perPosition.y+1);
        p2 = new Point(perPosition.x, perPosition.y+2);
        console.log(p1, p2);
        break;
    }

    // 尝试移动
    if (Trygo(p1, p2))
    {
        moveTimes++;
        showMoveInfo();
        
        // 检查是否过关
        if (checkFinish())
        {
            // 稍微延迟一下弹出，让画面先更新
            setTimeout(() => {
                alert("恭喜过关！！");
                NextLevel(1);
            }, 100);
        }
    }
}

function imgPreload(srcs,callback){
    var count = 0,imgNum = 0,images = {};

    for(src in srcs){
        imgNum++;
    }
    for(src in srcs ){
        images[src] = new Image();
        images[src].onload = function(){
            //判断是否所有的图片都预加载完成
            if (++count >= imgNum)
            {
                callback(images);
            }
        }
        images[src].src = srcs[src];
    }
}



//复制移动后的地图
function copyArray(arr){
    var b=[];//每次移动更新地图数据都先清空再添加新的地图
    for (var i=0;i<arr.length ;i++ )
    {
        b[i] = arr[i].concat();//链接两个数组
    }
    return b;
}

function Point(x,y){
    this.x = x;
    this.y = y;
}



//下一关
function NextLevel(i){
    //iCurlevel当前的地图关数
    iCurlevel = iCurlevel + i;
    if (iCurlevel<0)
    {
        iCurlevel = 0;
        return;
    }
    var len = levels.length;
    if (iCurlevel > len-1)
    {
        iCurlevel = len-1;
    }
    moveTimes = 0;//游戏关卡移动步数清零
    initLevel();//初始当前等级关卡
}


//判断是否推成功
function checkFinish(){
    for (var i=0;i<curMap.length ;i++ )
    {
        for (var j=0;j<curMap[i].length ;j++ )
        {
            //当前移动过的地图和初始地图进行比较，若果初始地图上的陷进参数在移动之后不是箱子的话就指代没推成功
            if (curLevel[i][j] == 2 && curMap[i][j] != 3 || curLevel[i][j] == 5 && curMap[i][j] != 3)
            {
                return false;
            }
        }
    }
    return true;
}


//判断小人是否能够移动
function Trygo(p1,p2){
    if(p1.x<0) return false;//若果超出地图的上边，不通过
    if(p1.y<0) return false;//若果超出地图的左边，不通过
    if(p1.x>curMap.length) return false;//若果超出地图的下边，不通过
    if(p1.y>curMap[0].length) return false;//若果超出地图的右边，不通过
    if(curMap[p1.x][p1.y]==1) return false;//若果前面是墙，不通过
    if (curMap[p1.x][p1.y]==3 || curMap[p1.x][p1.y]==5)
    {//若果小人前面是箱子那就还需要判断箱子前面有没有障碍物(箱子/墙)
        if (curMap[p2.x][p2.y]==1 || curMap[p2.x][p2.y]==3)
        {
            return false;
        }
        //若果判断不成功小人前面的箱子前进一步
        curMap[p2.x][p2.y] = 3;//更改地图对应坐标点的值
        //console.log(curMap[p2.x][p2.y]);
    }
    //若果都没判断成功小人前进一步
    curMap[p1.x][p1.y] = 4;//更改地图对应坐标点的值
    //若果小人前进了一步，小人原来的位置如何显示
    var v = curLevel[perPosition.x][perPosition.y];
    if (v!=2)//若果刚开始小人位置不是陷进的话
    {
        if (v==5)//箱子与目标点
        {
            v=2;//若果小人本身就在陷进里面的话移开之后还是显示陷进
        }else{
            v=0;//小人移开之后之前小人的位置改为地板
        }
    }
    //重置小人位置的地图参数
    curMap[perPosition.x][perPosition.y] = v;
    //若果判断小人前进了一步，更新坐标值
    perPosition = p1;
    //若果小动了 返回true 指代能够移动小人
    return true;
}
//判断是否推成功


//draw hit info
function showMoveInfo(){
    ctx.fillStyle = "#ababdcff";
    ctx.fillRect(1280-300, 0, W, H);
    ctx.fillStyle = "#000000";
    ctx.font='36px sans-serif';
    ctx.fillText("第" + (iCurlevel+1) +"关", 1280-150, 100);
    ctx.fillText("移动次数: "+ moveTimes, 1280-150, 160);
}

// 绘制按钮
function drawButton(button){
    // 绘制矩形
    ctx.fillStyle = button.color;
    ctx.fillRect(button.x, button.y, button.width, button.height);

    // 绘制按钮文本
    ctx.fillStyle = '#ffffff'; // 白色文本
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 计算文本中心位置
    const textX = button.x + button.width / 2;
    const textY = button.y + button.height / 2;
    
    ctx.fillText(button.text, textX, textY);
}

// 检查点击坐标是否在按钮区域内
function isButtonClicked(clickX, clickY,button) {
    return (
        clickX >= button.x &&
        clickX <= button.x + button.width &&
        clickY >= button.y &&
        clickY <= button.y + button.height
    );
}

function handleButtonNextClick(){
    if (iCurlevel >= levels.length - 1) {
        alert("已经是最后一关了！");
        return;
    }
    NextLevel(1);
}
function handleButtonPreClick(){
    if (iCurlevel <= 0) {
        alert("已经是第一关了！");
        return;
    }
    NextLevel(-1);
}

// 获取随机单词
function getRandomWord(levelIndex) {
    let list = curlevelword;
    // 如果该关卡有配置特定单词，则使用特定单词
    if(curlevelword[levelIndex]) {
        list = curlevelword[levelIndex];
    }
    let randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}

// 游戏主循环
function gameLoop() {
    wordSprite.scale();
    drawSidebar(); // 只重绘侧边栏，避免闪烁
    requestAnimationFrame(gameLoop);
}