var mic;

function setup() {
  createCanvas(4000, 3000);
  mic = new p5.AudioIn();
  mic.start();
  background(0);
}

function draw() {
    var vol = mic.getLevel();
    var volumeC = map(vol, 0, 1, 0, 200);
    var volumeS = map(vol, 0, 1, 0, 400);
	textAlign(CENTER);
	


	
	stroke(0);
    strokeWeight(10);
    textSize(500 + volumeS);
    fill(0);
    text("THE", 2000, 1000);
	
	
	

	
	stroke(0);
    strokeWeight(200);
	textSize(15000 + volumeS);
    fill(0 + volumeC,0 - volumeC,255 - volumeC);
    text(" . ", 2000, 1500)
	
    stroke(255);
    strokeWeight(2);
    textSize(500 + volumeS);
    fill(0);
    text("THE", 2000, 1000);
	

	stroke(0);
    strokeWeight(200);
	textSize(15000 + volumeS);
    fill(0 + volumeC,0 - volumeC,255 - volumeC);
    text(" . ", 2400, 2500)
	

	
	
	stroke(0);
    strokeWeight(200);
	textSize(15000 + volumeS);
    fill(0 + volumeC,0 - volumeC,255 - volumeC);
    text(" . ", 1500, 2000)
	
	stroke(255);
    strokeWeight(2);
    textSize(500 + volumeS);
    fill(0);
    text("BLACK", 2000, 1400);
	
	stroke(255);
    strokeWeight(2);
    textSize(500 + volumeS);
    fill(0);
    text("SCREEN", 2000, 1800);
	
	

	

	
	
	
    
        
    //for (var i = 0; i < 20; i++) {
      //  textSize(24 + volumeS);
        //fill(200 + volumeC, 100 + volumeC, 150 + volumeC);
        //text(lyrics[i], random(0, 1), i * 100 + 100);
    //}

}



