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

    process(){
      if (this.input.length !== 0){
        var toSend = this.input.shift();
        console.log("About to add: " + toSend);
        this.robotArm.push(toSend);

      }
      while (this.input.length !== 0 && this.input[0].getRadius() >= this.robotArm.getDisk(this.robotArm.size() - 1).getRadius()){
        var toS = this.input.shift();
        console.log("About to add: " + toS);
        this.robotArm.push(toS);
      }
      console.log(this.robotArm);
    }

    unloadRobot(){
      var toOutQueue = new Tower();
      console.log(this.robotArm);
      //toOutQueue.push(new Disk(3));
  		while(this.robotArm.size() !== 0){
          var top = this.robotArm.pop();
          toOutQueue.push(top);
          console.log(top);
      }
  		this.output.push(toOutQueue);
      console.log("To Out: " + toOutQueue);
    }

    run(){
  		while(this.input.length !== 0){
        console.log("Next thing in input is: " + this.input[0]);
  			this.process();
  			this.unloadRobot();
  		}
  	}

    removeTower() {
  		return this.output.remove();
  	}
}
