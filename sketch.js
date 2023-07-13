let bgImage; 
let bgX = 0;
let runGif;

function preload() {
  bgImage = loadImage('Sprites/Parallaxbg.png')
  Character = createImg('Sprites/Runcyclesprite.gif');
}

function setup() {
  createCanvas(1920, 1080);
}
function draw() {
  bgX -= 12;

  for (let x = bgX; x < width; x += bgImage.width) {
    image(bgImage, x, 0);
  }

  for (let x = 0; x < bgX; x += bgImage.width) {
    image(bgImage, x, 0);
  }
  
  Character.position(0, 550);
}
