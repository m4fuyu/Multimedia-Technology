
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

let curWordBank = []; // 当前关卡使用的单词库
let wordQueue = [];   // 单词队列
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
// 单词精灵
let wordSprite = {
    emphasized: true,
    baseFontSize: 32,
    currentFontSize: 32,
    minSize: 28,
    maxSize: 80,
    animationSpeed: 0.03,
    time: 0,

    scale: function() {
        if (!this.emphasized) return;
        
        this.time += this.animationSpeed;
        console.log('time:', this.time, 'fontSize:', this.currentFontSize); // 调试输出
        
        // 使用正弦函数实现平滑的大小循环
        let scale = 1 + Math.sin(this.time) * 0.15;
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
    console.log(images.block);
    block = images.block;
    wall = images.wall;
    box = images.box;
    ball = images.ball;
    up = images.up;
    down = images.down;
    left = images.left;
    right = images.right;
    initLevel();
});

//捕获用户上下左右移动
document.addEventListener('keydown', doKeyDown);
canvas.addEventListener('click', doClick);



