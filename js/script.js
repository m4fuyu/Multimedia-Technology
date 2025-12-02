
// 找到canvas元素
let canvas = document.getElementById("gameCanvas");
let msg = document.getElementById("msg");
let ctx = canvas.getContext("2d");

//获取canvas宽度和高度
let W = canvas.width;
let H = canvas.height;
let offsetX = 360; // 水平居中偏移量 (1280-560)/2 = 360
let offsetY = 100; // 垂直偏移量（标题下方）
let w = 35,h = 35;
let curMap;//当前的地图
let curLevel;//当前等级的地图
let curMan;//初始化小人
let iCurlevel = 0;//关卡数
let moveTimes = 0;//移动了多少次
let perPosition = new Point(5,5);//小人的位置
// 加载图片
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


// 绘制背景
ctx.fillStyle = "#dcc1ab";
ctx.fillRect(0, 0, W, H);
ctx.fillStyle = "#000000";
ctx.font='64px sans-serif';
ctx.textAlign='center';
ctx.fillText("推箱子", W/2, H/2 -320);



let block,wall,box,ball,up,down,left,right;
imgPreload(oImgs,function(images){
    //console.log(images.block);
    block = images.block;
    wall = images.wall;
    box = images.box;
    ball = images.ball;
    up = images.up;
    down = images.down;
    left = images.left;
    right = images.right;
    init();
});

document.addEventListener('keydown', doKeyDown);


