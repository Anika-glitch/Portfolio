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
  let x=5;
  textSize(32);
  
    let i=1;
  
  
    
    
    for(let i=1;i<3;i++){
      
     noFill();
      stroke(153, 204, 255);
     torus(sin(i),(i*70),5);
     
       rotateX(frameCount/1000);
       rotateY(frameCount/1000);
     
    }
  
  }