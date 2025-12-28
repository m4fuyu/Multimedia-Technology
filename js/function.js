/*
//--------------------------------------------关卡初始化---------------------------------
*/

// 初始化游戏关卡
function initLevel(){
    //捕获用户上下左右移动
    document.addEventListener('keydown', doKeyDown);
    canvas.addEventListener('click', doClick);

    curMap = copyArray(levels[iCurlevel]);
    curLevel = levels[iCurlevel];
    
    // 初始化朝向
    currentFacing = "down"; 
    curMan = down; // 默认图片

    // 初始化题目状态
    questionQueue = [];
    answeredQuestions = [];
    userTyping = "";
    moveTimes = 0;
    
    // 填满题目队列 (保持5-10个题目)
    fillQuestionQueue();
    // reflashScreen(); // 绘制地图和侧边栏
    
    // 初始化通关提示动画
    if (typeof hintSprite !== 'undefined') {
        hintSprite.setLevel(iCurlevel);
    }

    // 注意：drawSidebar 会在 DrawMap 结束时调用，或者我们需要手动调用它
    // 建议在 DrawMap 底部统一调用 drawSidebar
    if (typeof window.gameLoopStarted === 'undefined') {
        window.gameLoopStarted = true;
        reflashScreen();
    }
}
// 填充题目队列
function fillQuestionQueue() {
    while(questionQueue.length < 8) { 
        // 从题目库中随机获取题目
        let randomIndex = Math.floor(Math.random() * englishSingleChoiceQuestions.length);
        let question = englishSingleChoiceQuestions[randomIndex];
        // 避免重复题目
        if (!questionQueue.find(q => q.id === question.id)) {
            questionQueue.push(question);
        }
    }
}

/*
//--------------------------------------------canvas绘制相关---------------------------------
*/

 // 刷新屏幕显示 (兼游戏主循环)
function reflashScreen(){
    // 1. 清除背景 (防止文字重叠)
    ctx.fillStyle = "#dcc1ab";
    ctx.fillRect(0, 0, W, H);

    // 绘制标题
    ctx.fillStyle = "#000000";
    ctx.font='64px sans-serif';
    ctx.textAlign='center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText("银山推箱子", W/2, H/2 -320);

    InitMap();
    DrawMap(curMap);
    drawSidebar();
    showMoveInfo();
    
    // 更新并绘制通关提示动画

    hintSprite.update();
    hintSprite.draw();


    drawButton(buttonNext);
    drawButton(buttonPre);
    drawButton(buttonReset);

    // 更新并绘制浮动文本
    updateAndDrawFloatingTexts();
    requestAnimationFrame(reflashScreen);
}

// 绘制地板（草坪）
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
}

// 绘制左侧侧边栏 (题目显示 + 输入框)
function drawSidebar() {
    // 1. 清除侧边栏区域 (左侧 300px 宽)
    ctx.fillStyle = "#5e89c9ff";
    ctx.fillRect(0, 0, 300, H);

    let centerX = 150; // 侧边栏中心X
    let startY = 80;   // 起始Y位置
    
    // 2. 绘制标题
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("英语语法题", centerX, startY);
    
    // 3. 绘制当前题目区域 (y: 50-200，高度约150px)
    let questionY = startY + 40;
    let currentQuestion = questionQueue[0];
    if (currentQuestion) {
        // 绘制题目（支持换行，最大高度约100px）
        drawWrappedText(currentQuestion.question, 280, 10, questionY, 20, 16, "#FFFFFF");
        
        // 绘制提示（在题目下方，根据题目行数动态调整）
        let hintY = questionY + 90; // 预留90px给题目
        ctx.font = "13px Arial";
        ctx.fillStyle = "#FFD700";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        // 提示文本也支持换行
        let hintText = currentQuestion.hint;
        if (ctx.measureText(hintText).width > 280) {
            // 提示太长则换行
            drawWrappedText(hintText, 280, 10, hintY, 18, 13, "#FFD700");
            hintY += 30;
        } else {
            ctx.fillText(hintText, 10, hintY);
            hintY += 20;
        }
        
        // 绘制知识点分类
        ctx.font = "12px Arial";
        ctx.fillStyle = "#90EE90";
        ctx.fillText("知识点: " + currentQuestion.category, 10, hintY);
    }
    
    // 4. 绘制输入区域
    let inputY = 600;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(centerX - 120, inputY, 240, 45);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(centerX - 120, inputY, 240, 45);
    
    // 绘制输入提示
    ctx.font = "14px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText("输入答案单词:", centerX, inputY - 20);
    
    // 绘制用户输入的内容
    ctx.font = "bold 20px Courier New";
    ctx.fillStyle = "#000000";
    ctx.textBaseline = "middle";
    // 处理长文本（如果有空格，如"more interesting"）
    let displayText = userTyping.length > 15 ? userTyping.substring(0, 15) + "..." : userTyping;
    ctx.fillText(displayText, centerX, inputY + 22);
    
    // 5. 绘制操作提示 (y: 330-380)
    ctx.font = "14px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("输入单词答案移动", centerX, inputY + 70);
    ctx.fillText("输入up/down/left/right转向", centerX, inputY + 95);
    ctx.fillText("当前朝向: " + currentFacing.toUpperCase(), centerX, inputY + 120);
    
    // 6. 绘制已完成题目历史（可选，y: 400-600）
    if (answeredQuestions.length > 0) {
        ctx.font = "bold 14px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("已完成: " + answeredQuestions.length + "题", centerX, 400);
    }
}

// 绘制自动换行的文本
function drawWrappedText(text, maxWidth, x, y, lineHeight, fontSize, color) {
    ctx.font = fontSize + "px Arial";
    ctx.fillStyle = color || "#000000";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    
    // 处理题目中的填空符号，确保正确分割
    // 将连续的下划线视为一个单词单位
    let words = text.split(/(\s+)/).filter(w => w.trim().length > 0);
    let line = '';
    let currentY = y;
    let maxLines = 5; // 最大行数（减少以避免超出区域）
    let linesDrawn = 0;
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i].trim();
        if (!word) continue; // 跳过空字符串
        
        let testLine = line + (line ? ' ' : '') + word;
        let metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && line.length > 0) {
            // 当前行已满，绘制并换行
            ctx.fillText(line, x, currentY);
            line = word;
            currentY += lineHeight;
            linesDrawn++;
            
            // 检查是否超出最大行数
            if (linesDrawn >= maxLines) {
                // 超出区域，截断并显示省略号
                let truncated = line;
                while (ctx.measureText(truncated + '...').width > maxWidth && truncated.length > 0) {
                    truncated = truncated.substring(0, truncated.length - 1);
                }
                ctx.fillText(truncated + '...', x, currentY);
                return; // 不再绘制
            }
        } else {
            line = testLine;
        }
    }
    
    // 绘制最后一行
    if (line.length > 0 && linesDrawn < maxLines) {
        ctx.fillText(line, x, currentY);
    }
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

//绘制左侧栏的提示
function showMoveInfo(){
    ctx.fillStyle = "#ababdcff";
    ctx.fillRect(1280-300, 0, W, H);
    ctx.fillStyle = "#000000";
    ctx.font='36px sans-serif';
    ctx.fillText("第" + (iCurlevel+1) +"关", 1280-150, 100);
    ctx.fillText("移动次数: "+ moveTimes, 1280-150, 160);
    ctx.fillStyle = "#000000";
    ctx.font = "20px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("通关提示", 1130, 210);
}

/*
//--------------------------------------------精灵动画绘制---------------------------------
*/

//绘制上浮文字的精灵动画
function updateAndDrawFloatingTexts(){
    for(let i = 0; i < floatingTexts.length; i++){
        let ft = floatingTexts[i];

        ft.y -= 1; // 向上移动
        ft.alpha -= 0.02; // 逐渐变透明

        ft.life -= 0.02; // 生命值减少

        if(ft.life>0){
            ctx.save(); // 保存当前画布状态
            ctx.globalAlpha = ft.life; // 设置透明度
            ctx.font = "bold 24px Arial";
            ctx.fillStyle = ft.color;
            ctx.textAlign = "center";
            ctx.fillText(ft.text, ft.x, ft.y);
            ctx.restore(); // 恢复画布状态
        }else{
             // 3. 如果生命值耗尽，从数组中移除
            floatingTexts.splice(i, 1);
            i--; // 修正索引
        }
    }
}

/*
--------------------------------------------推箱子游戏核心逻辑---------------------------------
*/

//角色转向
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

//向前移动 (基于当前朝向)
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
        playSound('move'); // 播放移动音效
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
        
        // 检查箱子新位置(p2)是否是目标点(2或5)
        if (curLevel[p2.x][p2.y] == 2 || curLevel[p2.x][p2.y] == 5)
        {
            playSound('coin_recived');//播放音效
        }
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
/*
--------------------------------------------事件监听---------------------------------
*/

//键盘监听逻辑
function doKeyDown(event){
    let key = event.key; // 获取按键字符
    let keyCode = event.keyCode;
    playSound('typing'); // 播放打字音效

    // 1. 处理功能键
    if (keyCode === 8) { // Backspace
        userTyping = userTyping.slice(0, -1);
        event.preventDefault(); // 防止浏览器后退
    } 
    else if (keyCode === 13) { // Enter
        userTyping = "";
    }
    else if (key.length === 1 && (/[a-zA-Z\s]/.test(key))) {
        // 2. 处理字母和空格输入（允许输入空格，如"more interesting"）
        if (userTyping.length < 30) { // 增加长度限制以支持更长的答案
            // 转换为小写，但保留空格
            if (key === ' ') {
                userTyping += ' ';
            } else {
                userTyping += key.toLowerCase();
            }
        }
    } else {
        // 忽略其他按键 (如 Ctrl, Shift 等)
        return;
    }

    // 3. 实时检查逻辑
    checkInputLogic();
    
    // 4. 重绘界面更新输入框显示
    // reflashScreen(); // 由主循环处理
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

    // B. 检查是否匹配当前题目的正确答案
    let currentQuestion = questionQueue[0];
    if (!currentQuestion) return;
    
    // 标准化答案比较（去除空格、转小写、去除标点）
    let normalizedInput = normalizeInput(userTyping);
    let normalizedAnswer = normalizeInput(currentQuestion.correctAnswer);
    
    if (normalizedInput === normalizedAnswer) {
        // 答案正确 -> 向当前方向移动一格
        moveForward();
        
        // 逻辑更新
        answeredQuestions.push(currentQuestion); // 记录已完成题目
        userTyping = "";
        questionQueue.shift(); // 移除已完成题目
        fillQuestionQueue();   // 补充新题目

    }
}

// 标准化输入（去除首尾空格、转小写、去除标点符号，但保留空格）
function normalizeInput(input) {
    if (!input) return "";
    // 去除首尾空格，转小写，去除标点符号但保留空格
    // 然后统一空格为单个空格
    return input.trim().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ');
}

// 鼠标点击监听逻辑
function doClick(event) {
    // 1. 获取点击在 Canvas 上的相对坐标
    // getBoundingClientRect() 返回 Canvas 相对于视口的位置
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // 2. 检查点击是否在按钮范围内
    if (isButtonClicked(clickX, clickY, buttonNext)) {
        // 3. 触发事件
        handleButtonNextClick(clickX,clickY);
    }else if (isButtonClicked(clickX, clickY, buttonPre)) {
        handleButtonPreClick(clickX,clickY);
    }else if (isButtonClicked(clickX, clickY, buttonReset)) {
        playSound('button_click');
        initLevel();
        floatingTexts.push(new FloatingText(clickX, clickY, "已重置"));
    }
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
//按钮点击事件
function handleButtonNextClick(clickX, clickY){
    playSound('button_click');
    if (iCurlevel >= levels.length - 1) {
        floatingTexts.push(new FloatingText(clickX, clickY, "已经是最后一关了"));
        return;
    }
    NextLevel(1);
}
function handleButtonPreClick(clickX, clickY){
    playSound('button_click');
    if (iCurlevel <= 0) {
        floatingTexts.push(new FloatingText(clickX, clickY, "已经是第一关了"));
        return;
    }
    NextLevel(-1);
}










