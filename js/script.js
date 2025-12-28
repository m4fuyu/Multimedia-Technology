/*
--------------------------------------------定义变量---------------------------------
*/

// 找到canvas元素
let canvas = document.getElementById("gameCanvas");
let msg = document.getElementById("msg");
let ctx = canvas.getContext("2d");

//获取canvas宽度和高度
let W = canvas.width;
let H = canvas.height;
let offsetX = 360; // 水平居中偏移量 (1280-560)/2 = 360
let offsetY = 150; // 垂直偏移量（标题下方）

let w = 35,h = 35; // 单位方块大小
let curMap;//当前的地图
let curLevel;//当前等级的地图
let curMan;//初始化小人（小人朝下）
let iCurlevel = 0;//关卡数
let moveTimes = 0;//移动了多少次
let perPosition = new Point(5,5);//小人的位置

let questionQueue = [];   // 题目队列（替代wordQueue）
let currentQuestionIndex = 0; // 当前题目索引
let answeredQuestions = []; // 已完成的题目历史
let userTyping = "";  // 用户输入
let currentFacing = "down"; // 朝向


// 天空滚动相关变量
let skyOffset = 0;
let SKY_VELOCITY = 30; 
let lastTime = 0;
let fps = 60;

const buttonNext = {
    x: 1280-100,
    y: 800-50,
    width: 100,
    height: 50,
    text: '下一关',
    color: '#007bff' // 蓝色
};

const buttonPre = {
    x: 1280-300,
    y: 800-50,
    width: 100,
    height: 50,
    text: '上一关',
    color: '#007bff' // 蓝色
};

const buttonReset = {
    x: 1280-200,
    y: 800-50,
    width: 100,
    height: 50,
    text: '重置关卡',
    color: '#007bff' // 蓝色
};


/*
--------------------------------------------音效相关---------------------------------
*/
// 音效对象
let sounds = {
    move: new Audio("sound/move.mp3"),// 移动音效
    coin_recived: new Audio("sound/coin_recieved.mp3"),// 进洞音效
    button_click: new Audio("sound/button_click.mp3"),// 按钮音效
    typing: new Audio("sound/typing.mp3")// 输入音效
};
// 设置音量
sounds.move.volume = 1;         // 移动音效调小
sounds.coin_recived.volume = 0.2; // 进洞音效适中
sounds.button_click.volume = 0.5; // 按钮音效适中
// 播放音效的辅助函数
function playSound(name) {
    if (sounds[name]) {
        sounds[name].currentTime = 0; // 重置播放进度，支持快速连续播放
        sounds[name].play().catch(e => console.log("Audio play failed:", e));
    }
}


// 存储所有活跃的浮动文字
let floatingTexts = [];
// 浮动文字精灵对象构造函数
function FloatingText(x, y, text) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.life = 2.0; // 生命值/透明度 (2.0 -> 0.0)
    this.speed = 2;  // 向上飘的速度
    this.color = "#00D1CE"; // 文字颜色
}


/*
--------------------------------------------精灵对象---------------------------------
*/

// 提示动画精灵对象
// 全局资源表：由 imgPreload 完成后赋值
let assets = null;
let hintSprite = {
    x: 990, // 右侧栏起始980，宽度300。居中：980 + (300-280)/2 = 990
    y: 220, // 避开上方的文字信息
    width: 280,
    height: 0, 
    frameWidth: 945,
    currentFrame: 0,
    totalFrames: 0,
    tickCount: 0,
    ticksPerFrame: 64, 
    image: null,

    setLevel: function(levelIndex) {
        // 不再使用 loadedImages；直接根据当前关卡索引(iCurlevel)取对应提示图
        let index = (typeof levelIndex === 'number') ? levelIndex : iCurlevel;
        let key = "level" + (index + 1) + "_ans";

        if (assets && assets[key]) {
            this.image = assets[key];
            this.totalFrames = Math.floor(this.image.width / this.frameWidth);
            this.currentFrame = 0;
            this.tickCount = 0;
            // 计算显示高度 (保持宽高比)
            let ratio = this.width / this.frameWidth;
            this.height = this.image.height * ratio;
        } else {
            this.image = null;
            this.totalFrames = 0;
            this.currentFrame = 0;
            this.tickCount = 0;
            this.height = 0;
        }
    },

    update: function() {
        if (!this.image || this.totalFrames <= 1) return;
        this.tickCount++;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
        }
    },

    draw: function() {
        if (!this.image) return;
        //绘制当前帧
        ctx.drawImage(
            this.image,
            this.currentFrame * this.frameWidth, 0, // 源图像坐标 (sx, sy)
            this.frameWidth, this.image.height,     // 源图像尺寸 (sw, sh)
            this.x, this.y,                         // 目标坐标 (dx, dy)
            this.width, this.height                 // 目标尺寸 (dw, dh)
        );
    }
};

/*
--------------------------------------------图片相关---------------------------------
*/

// 加载图片地址2
let oImgs = {
    "block" : "image/block.gif",
    "wall" : "image/wall.png",
    "box" : "image/box.png",
    "ball" : "image/ball.png",
    "up" : "image/up.png",
    "down" : "image/down.png",
    "left" : "image/left.png",
    "right" : "image/right.png",
    "level3_ans" : "image/level3_ans.png",
    "level2_ans" : "image/level2_ans.png",
    "level1_ans" : "image/level1_ans.png",
    "sky1" : "image/kumo.jpg",
    "sky2" : "image/kumo_fan.jpg"
}

//预加载图片
let block,wall,box,ball,up,down,left,right,sky1,sky2;
// 加载图片
imgPreload(oImgs, function(images){
    assets = images;

    block = images.block;
    wall = images.wall;
    box = images.box;
    ball = images.ball;
    up = images.up;
    down = images.down;
    left = images.left;
    right = images.right;
    sky1 = images.sky1;
    sky2 = images.sky2;
    initLevel();
    // 图片加载完成后再初始化关卡，避免 setLevel/drawSky 读取到 0 尺寸
// console.log("images/block.png:", images.block.complete ? "加载成功" : "加载失败");
// console.log("images/wall.png:", images.wall.complete ? "加载成功" : "加载失败");
// console.log("images/box.png:", images.box.complete ? "加载成功" : "加载失败");
// console.log("images/ball.png:", images.ball.complete ? "加载成功" : "加载失败");
// console.log("images/up.png:", images.up.complete ? "加载成功" : "加载失败");
// console.log("images/down.png:", images.down.complete ? "加载成功" : "加载失败");
// console.log("images/left.png:", images.left.complete ? "加载成功" : "加载失败");
// console.log("images/right.png:", images.right.complete ? "加载成功" : "加载失败");
});

//捕获用户上下左右移动
document.addEventListener('keydown', doKeyDown);
canvas.addEventListener('click', doClick);







