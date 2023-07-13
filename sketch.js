let bgImage; 
let bgX = 0;
let bgpX = 0;
let runGif;

function preload() {
  bgImage = loadImage('Sprites/Parallaxbg-removebg.png')
  bgImageparallax = loadImage('Sprites/Parallaxbg(1).png')
  Character = createImg('Sprites/Runcyclesprite.gif');
}

function setup() {
  createCanvas(1920, 1080);
}
function draw() {
  bgX -=  6;
  bgpX -= 7;

  clear();

    for (let x = bgpX; x < width; x += bgImageparallax.width) {
  image(bgImageparallax, x, 0);
  }

  for (let x = 0; x < bgpX; x += bgImage.width) {
    image(bgImageparallax, x, 0);
  }
  
  for (let x = bgX; x < width; x += bgImage.width) {
  image(bgImage, x, 0);
  }

  for (let x = 0; x < bgX; x += bgImage.width) {
    image(bgImage, x, 0);
  }
  
  


  

  

  
  
  

  
  
  
  
  
  Character.position(0, 550);
}
