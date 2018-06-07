class ProductionLine{

    constructor(){
      this.input = [];
      this.output = [];
      this.robotArm = new Tower();
      this.running = false;
    }

    getInput(){
      return this.input;
    }

    getOutput(){
      return this.output;
    }

    getRobotArm(){
      return this.robotArm;
    }

    setRun(r){
      this.running = r;
    }

    addDisk(d){
      this.input.push(d);
    }

    drawInput(){
      noStroke();
      fill(255);
      //rect(0, windowHeight * .8 - 35, windowWidth * .40 +10, 35);
      let inLen = windowWidth * .40;
      //console.log(inLen);
      let y = windowHeight * .8 - 20;
      for(let inp of this.input){
        let x = inLen - ((10 * inp.getRadius()) - 5);
        inp.coord(x,y);
        inp.display();
        inLen = x -10;
        //console.log(inLen);
      }
    }

    drawOutput(){

    }

    drawRobotArm(){
      noStroke();
      let y = windowHeight * .8 - 80;
      let mid = windowWidth * .5 + 15;
      this.robotArm.display(mid, y);
    }

    process(){
      if (this.input.length !== 0){
        var toSend = this.input.shift();
        //console.log("About to add: " + toSend);
        this.robotArm.push(toSend);
      }
      while (this.input.length !== 0 && this.input[0].getRadius() >= this.robotArm.getDisk(this.robotArm.size() - 1).getRadius()){
        var toS = this.input.shift();
        //console.log("About to add: " + toS);
        this.robotArm.push(toS);
      }
      //console.log(this.robotArm);
    }
    hello(){
      console.log("Why no work");
    }
    unloadRobot(){
      this.drawRobotArm();
      setTimeout(this.hello(), 5000);
      var toOutQueue = new Tower();
      //toOutQueue.push(new Disk(3));
  		while(this.robotArm.size() !== 0){
          var top = this.robotArm.pop();
          toOutQueue.push(top);
          //console.log(top);
      }
      console.log(toOutQueue);
  		this.output.push(toOutQueue.copy());
    }

    run(){
      while(this.input.length !== 0 && this.running === true){
        console.log("new iteration");
        this.drawInput();
        this.process();
  			this.unloadRobot();
        this.drawOutput();
        this.setRun(false);
        console.log(" d ");
  		}
  	}

    removeTower() {
  		return this.output.pop();
  	}
}
