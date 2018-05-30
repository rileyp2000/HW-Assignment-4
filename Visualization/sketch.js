var inputField, productionLine, header, itemsInQueue, output,towers;


function setup(){
  createCanvas(windowWidth, windowHeight);
  header = createElement('h2', "Production Line Visualized");
  header.position(0,0);
/*
  prompt = createP("Add a disk to the queue!");
  prompt.position(20, 25);
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  */
  productionLine = new ProductionLine();
  randomSeed(8675309);
  var ct = 1;
  while(ct < 10){
    let rnd = round(random(1, 15));
    var d = new Disk(rnd);
    //console.log(rnd);
    productionLine.addDisk(d);
    ct++;
  }

  itemsInQueue = createP("Put into input: " +productionLine.getInput());
  itemsInQueue.position(0, 40);

  productionLine.run();
  var out = "";
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
  var offset = 50;
  for(let i = 0; i < productionLine.output.length; i++){
    let lng = (productionLine.output[i].size() * 25) + 25;
    productionLine.output[i].display(30, offset);
    offset += lng;
  }
}
