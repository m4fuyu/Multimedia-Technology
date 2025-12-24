
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

// 加载图片地址
let oImgs = {
    "block" : "image/block.gif",
    "wall" : "image/wall.png",
    "box" : "image/box.png",
    "ball" : "image/ball.png",
    "up" : "image/up.png",
    "down" : "image/down.png",
    "left" : "image/left.png",
    "right" : "image/right.png",
}
// 题目高亮动画精灵（用于当前题目的强调效果）
let questionSprite = {
    baseFontSize: 18,
    currentFontSize: 18,
    minSize: 16,
    maxSize: 22,
    animationSpeed: 0.03,
    time: 0,

    scale: function() {
        this.time += this.animationSpeed;
        let scale = 1 + Math.sin(this.time) * 0.1;
        this.currentFontSize = this.baseFontSize * scale;
        this.currentFontSize = Math.max(this.minSize, Math.min(this.maxSize, this.currentFontSize));
    },
    
    reset: function() {
        this.time = 0;
        this.currentFontSize = this.baseFontSize;
    }
};  
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

// 绘制背景
ctx.fillStyle = "#dcc1ab";
ctx.fillRect(0, 0, W, H);
ctx.fillStyle = "#000000";
ctx.font='64px sans-serif';
ctx.textAlign='center';
ctx.fillText("银山推箱子", W/2, H/2 -320);


//预加载图片
let block,wall,box,ball,up,down,left,right;
imgPreload(oImgs,function(images){
    block = images.block;
    wall = images.wall;
    box = images.box;
    ball = images.ball;
    up = images.up;
    down = images.down;
    left = images.left;
    right = images.right;
// console.log("images/block.png:", images.block.complete ? "加载成功" : "加载失败");
// console.log("images/wall.png:", images.wall.complete ? "加载成功" : "加载失败");
// console.log("images/box.png:", images.box.complete ? "加载成功" : "加载失败");
// console.log("images/ball.png:", images.ball.complete ? "加载成功" : "加载失败");
// console.log("images/up.png:", images.up.complete ? "加载成功" : "加载失败");
// console.log("images/down.png:", images.down.complete ? "加载成功" : "加载失败");
// console.log("images/left.png:", images.left.complete ? "加载成功" : "加载失败");
// console.log("images/right.png:", images.right.complete ? "加载成功" : "加载失败");

    initLevel();
});

//捕获用户上下左右移动
document.addEventListener('keydown', doKeyDown);
canvas.addEventListener('click', doClick);



