//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;

let birdImg;

let bird = {
  x: birdX,
  y: birdY,
  width: birdWidth,
  height: birdHeight,
};

//pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

window.onload = () => {
  board = document.getElementById('board');
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext('2d');

  // draw flappy bird;
  // context.fillStyle = 'green';
  // context.fillRect(bird.x, bird.y, bird.width, bird.height);

  //load bird img
  birdImg = new Image();
  birdImg.src = './flappybird.png';
  birdImg.onload = () => {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
  };

  topPipeImg = new Image();
  topPipeImg.src = './toppipe.png';

  bottomPipeImg = new Image();
  bottomPipeImg.src = './bottompipe.png';

  requestAnimationFrame(update);
};

const update = () => {
  requestAnimationFrame(update);
  context.clearRect(0, 0, board.width, board.height);

  //draw bird over each frame
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
};
