var inputField, productionLine, header, itemsInQueue, output,towers,t;


function setup(){
  createCanvas(windowWidth, windowHeight);
  header = createElement('h2', "Production Line Visualized");
  header.position(0,0);

  productionLine = new ProductionLine();
  t = new Tower();
  randomSeed(8675309);
  var ct = 0;
  while(ct < 10){
    let rnd = round(random(1, 15));
    var d = new Disk(rnd);
    //console.log(rnd);
    productionLine.addDisk(d);
    t.push(d);
    ct++;
  }
  //productionLine.addDisk(new Disk(3));
  //productionLine.addDisk(new Disk(2));

  itemsInQueue = createP("Put into input: " +productionLine.getInput());
  itemsInQueue.position(0, 40);

  //productionLine.run();
  //var out = "";
  /*for(let i = 0; i < productionLine.output.length; i++){
    /*out += productionLine.output[i];
    out += "\n";
    //productionLine.output[i].setY(30 * productionLine.output[i].size());
    productionLine.output[i].display();
  }*/

  //output = createP("Result: \n" + out);
  //output.position(0, 60);
}

function draw(){
  /*var offset = 50;
  for(let i = 0; i < productionLine.output.length; i++){
    let lng = (productionLine.output[i].size() * 25) + 25;
    productionLine.output[i].display(30, offset);
    offset += lng;
  }*/
  //productionLine.drawInput();
  let y = windowHeight * .8 - 80;
  let mid = windowWidth * .5 + 15;
  t.display(mid, y);
  fill(0);
  rect(10, windowHeight * .8, windowWidth * .40 - 10, 20, 10);
  rect(windowWidth * .5 - 10, windowHeight * .8 - 80, 50, 75, 10);
  rect(windowWidth * .6 + 10, windowHeight * .8, windowWidth * .3, 20, 10);
}
