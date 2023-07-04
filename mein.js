x=0;
y=0;












function preload() {
   arcoiris = loadImage('colores.png');
  }
  
  function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  poseNet=ml5.poseNet(video, filtro);
  poseNet.on("pose", foto);
   
  }
  
  function filtro(){
    console.log("empezo");

  }
  
  function foto(uno){
console.log(uno);
x=uno[0].pose.leftEye.x -75;
y=uno[0].pose.leftEye.y -250;
  }
  function draw() {
    image(video, 0, 0, 300, 300);
   image(arcoiris,x,y,125,260)
  }
  
  function take_snapshot(){    
    save('myFilterImage.png');
  }
  