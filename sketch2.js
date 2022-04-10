function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  }
  function setup() {
      let m;
  let x = 0;
  var canvas;
   canvas= createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  }
  
  function draw() {
    background(255,255,255);
    normalMaterial();
    m = ((mouseX) * 20);
    for (let i = 1; i < m; i++) {
  
      square(sin(i), windowWidth/3, (5));
     rotateX(sin(i));
      rotateY(cos(i));
  
    }
  }