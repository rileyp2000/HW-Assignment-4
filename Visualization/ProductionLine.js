class ProductionLine{

    constructor(){
      this.input = [];
      this.output = [];
      this.robotArm = new Tower();
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

    addDisk(d){
      this.input.push(d);
    }

    drawInput(){
      let inLen = windowWidth * .40;
      console.log(inLen);
      let y = windowHeight * .8 - 30;
      for(let inp of this.input){
        let x = inLen - ((10 * inp.getRadius()) - 5);
        inp.coord(x,y);
        inp.display();
        inLen = x -10;
        console.log(inLen);
      }
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

    unloadRobot(){
      var toOutQueue = new Tower();
      //console.log(this.robotArm);
      //toOutQueue.push(new Disk(3));
  		while(this.robotArm.size() !== 0){
          var top = this.robotArm.pop();
          toOutQueue.push(top);
          //console.log(top);
      }
  		this.output.push(toOutQueue.copy());
      //console.log("To Out: " + this.output[this.output.length - 1]);
      //console.log("\nCurrent output queue: " + productionLine.getOutput());
    }

    run(){
      this.drawInput();
  		while(this.input.length !== 0){
  			this.process();
  			this.unloadRobot();
  		}
  	}

    removeTower() {
  		return this.output.pop();
  	}
}
