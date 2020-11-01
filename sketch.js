//tracker of percentages
let trackW = 50;
let finishH = 550;
let finishImg;
let startImg;
let percentageFont;
var title = "MAVRIČNI KORAKI";

let data;

//tracker of kilometers

function preload()
{
    finishImg = loadImage('Rainbow-Flag.png');
    startImg = loadImage('footsteps.png');
    percentageFont = loadFont('LuckiestGuy-Regular.ttf')
}

function setup()
{
    data = 195.90;
    
    createCanvas(540, 960);
    background(246, 238, 226);
    

    let trackerPosX = width * 0.35 - trackW/2;
    let trackerPosY = 4*(height/5);
    
    //TOP PHOTO
    imageMode(CENTER);
    let imgScale = 0.13;
    image(finishImg, 
          trackerPosX + (finishImg.width * 0.4)*imgScale, 
          trackerPosY - 15 - finishH - (finishImg.height/2)*imgScale, 
          finishImg.width*imgScale, 
          finishImg.height*imgScale);
    
    //FEET PHOTO
    imgScale = 0.28;
    image(startImg, 
          trackerPosX + (startImg.width/2)*imgScale, 
          trackerPosY + 10 + (startImg.height/2)*imgScale, 
          startImg.width*imgScale, 
          startImg.height*imgScale);
    
    //BACK RECTANGLE
    noStroke();
    fill(240, 233, 220);
    rect(trackerPosX, trackerPosY - finishH, trackW, finishH);
    
    //ACTUAL TRACKER
    colorMode(HSB);
    let mapData = map(data%51.00, 0.00, 51.00, 0, finishH);
    console.log(mapData);
    
    for(let y = 0; y < mapData; y++)
    {
        let colorMap = map(y, 0, finishH, 0, 350);
        stroke(colorMap, 100, 100);
        
        line(trackerPosX, trackerPosY - y, 
             trackerPosX + trackW, trackerPosY - y)
    }
    
    //%
    let percentageReach = (data/51.00) * 100;
    percentageReach = round(percentageReach);
    noStroke();
    fill(20, 80, 100);
    fill(10, 70, 80);
    textAlign(LEFT, CENTER);
    textSize(23);
    textFont(percentageFont)
    text(str(percentageReach) + " " + "%", 
         trackerPosX + trackW + 20,
         trackerPosY - mapData + 20);
    
    //CIRCLES
//    push();
    
    let prideCols = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D'];
    noFill();
    let circlePosX = width * 0.75;
    let circleRadius = 140;
    let circleWidth = 6;
    let circleMargin = 0;
    strokeWeight(circleWidth/2);
    
    stroke(prideCols[0]); //red
    circle(circlePosX, height/2, circleRadius);
    stroke(prideCols[1]); //orange
    circle(circlePosX, height/2, circleRadius + circleWidth + circleMargin);
    stroke(prideCols[2]);
    circle(circlePosX, height/2, circleRadius + (circleWidth+circleMargin)*2);
    stroke(prideCols[3]);
    circle(circlePosX, height/2, circleRadius + (circleWidth+circleMargin)*3);
    stroke(prideCols[4]);
    circle(circlePosX, height/2, circleRadius + (circleWidth+circleMargin)*4);
    stroke(prideCols[5]);
    circle(circlePosX, height/2, circleRadius + (circleWidth+circleMargin)*5);
//    pop();
    
    let r = 75;
    let numPoints = 360;
    let circleWidth2 = 7;
//    push();
//    translate(circlePosX, height/2);
//    for (var i = 0; i <= numPoints; i++)
//    {   
//        let colorMap = map(i, 0, finishH, 0, 350);
//        stroke(colorMap, 100, 100);
//        strokeWeight(3);
//        
//        var input = i * TWO_PI/numPoints;
//        var x1 = cos(input) * r;
//        var x2 = cos(input) * (r + circleWidth2);
//        
//        var y1 = sin(input) * r;
//        var y2 = sin(input) * (r + circleWidth2);  
//        
//        line(x1, y1, x2, y2);
//    }
//    pop();
    
    //KILOMETERS
    noStroke();
    fill(20, 80, 100);
    fill(10, 70, 80);
    textAlign(CENTER, CENTER);
    textSize(25);
    textFont(percentageFont)
    
    let roundData = round(data);
//    for(let d = 0; d < roundData; d++)
//    {
//        
        text(str(roundData) + " " + "km", 
         circlePosX,
         height/2);
//    }
    
    
    
    //TITLE
    verticalText(title, 100, height/3.5);
}

function verticalText(input, x, y) {
  var output = "";  // create an empty string
 
  for (var i = 0; i < input.length; i += 1) {
    output += input.charAt(i) + "\n"; // add each character with a line break in between
  }
 
  push(); // use push and pop to restore style (in this case the change in textAlign) after displaing the text 
  textAlign(CENTER, TOP); // center the characters horizontaly with CENTER and display them under the provided y with TOP
  text(output, x, y); // display the text
  pop();
}


function keyPressed()
{
    if(key == "s")
    {
        saveCanvas('more1.jpg');
    }
}