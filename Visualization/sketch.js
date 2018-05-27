var inputField, productionLine, header, itemsInQueue, output;
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

  var ct = 1;
  while(ct < 10){
    var d = new Disk(ct);
    productionLine.addDisk(d);
    ct++;
  }
  itemsInQueue = createP("Put into input: " +productionLine.getInput());
  itemsInQueue.position(0, 40);
  productionLine.run();

  output = createP("Result: " + productionLine.getOutput());
  output.position(0, 60);


}

function draw(){

}
