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
    move: new Audio("sound/move.mp3"),
    coin_recived: new Audio("sound/coin_recieved.mp3"),
    button_click: new Audio("sound/button_click.mp3"),
    typing: new Audio("sound/typing.mp3")
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

// 全局存储加载的图片对象
let loadedImages = {};
// 提示动画精灵对象
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
        // 根据关卡索引获取对应的提示图片 key (例如 level1_ans)
        let key = "level" + (levelIndex + 1) + "_ans";
        if (loadedImages && loadedImages[key]) {
            this.image = loadedImages[key];
            this.totalFrames = Math.floor(this.image.width / this.frameWidth);
            this.currentFrame = 0;
            // 计算显示高度 (保持宽高比)
            let ratio = this.width / this.frameWidth;
            this.height = this.image.height * ratio;
        } else {
            this.image = null;
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
        
        // 3. 绘制当前帧
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
    "level1_ans" : "image/level1_ans.png",
    "level2_ans" : "image/level2_ans.png"

}

//预加载图片
let block,wall,box,ball,up,down,left,right;

// 朴素加载图片
for (let key in oImgs) {
    loadedImages[key] = new Image();
    loadedImages[key].src = oImgs[key];
}

block = loadedImages.block;
wall = loadedImages.wall;
box = loadedImages.box;
ball = loadedImages.ball;
up = loadedImages.up;
down = loadedImages.down;
left = loadedImages.left;
right = loadedImages.right; 
initLevel();


