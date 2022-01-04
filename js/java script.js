/* скрипт менюшки */    
function openMenu() { 
        document.getElementById("sidebar").classList.toggle('active'); 
    }

/* game flappy bird */
/*var cvs = document.getElementById("canvas");
var ctx = cvs.get.Context("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "../image/flappy_bird.png";
bg.src = "../image/flappy_bird_bg.png";
fg.src = "../image/flappy_bird_fg.png";
pipeUp.src = "../image/flappy_bird_pipeUp.png";
pipeBottom.src = "../image/flappy_bird_pipeBottom.png";

var gap = 90;

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(pipeUp, 100, 0);
    ctx.drawImage(pipeBottom, 100, 0 + pipeUp.height + gap);
    ctx.drawImage(fg, 0, cvs.height - fg.height);
}

pipeBottom.onload = draw;*/