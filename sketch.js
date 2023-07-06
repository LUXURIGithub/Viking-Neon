let bgImage

function preload() {
  bgImage = loadImage('https://media.istockphoto.com/id/1171564349/video/retro-land.jpg?s=640x640&k=20&c=UytoK5VuR3nXezFTIryRH6D4mHUE846zUBZhlIJA5cw=')
  
  char1 = loadImage('https://static.miraheze.org/ccbmwikiwiki/6/60/Gutsman.png')

  char2 = loadImage('https://static.miraheze.org/ccbmwikiwiki/f/fa/Maestro.png')
  

  char3 = loadImage('https://pbs.twimg.com/media/ESqwndQUwAAY8TQ.png')

  
}

function setup() {
  createCanvas(800, 400);
}
function draw() {
  background(bgImage);
// x(left, right).   y (up, down)
//               x.   y. 
//                        size size
  image(char1, 30, 200, 150, 150)
  image(char2, 200, 250, 75, 100)
  image(char3, 300, 215, 125, 145)
  
}
