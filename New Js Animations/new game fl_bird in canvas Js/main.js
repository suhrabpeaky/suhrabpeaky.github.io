let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeDown = new Image();

bird.src = "img/flappy_bird.png";
bg.src = 'img/flappy_bird_bg.png';
fg.src = 'img/flappy_bird_fg.png';
pipeUp.src = 'img/flappy_bird_pipeUp.png';
pipeDown.src = 'img/flappy_bird_pipeBottom.png';

let xPos = 10;
let yPos = 150;

let gap = 90;


let grav = 1.5;

// let flyB = 25;

let pipeMove = 150;

const draw = () => {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(bird, xPos, yPos);
    ctx.drawImage(pipeUp, pipeMove, 0);
    ctx.drawImage(pipeDown, pipeMove, pipeUp.height + gap);
    ctx.drawImage(fg, 0, cvs.height - fg.height);

    yPos += grav;
    requestAnimationFrame(draw);
}

pipeDown.onload = draw;


document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 20;
}

