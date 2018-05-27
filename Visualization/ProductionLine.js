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
      console.log(this.input);
      var c = 0;
      while (this.input.length !== 0 && this.input[this.input.length - 1].getRadius() >= this.robotArm[this.robotArm.length - 1].getRadius()){
        this.robotArm.push(this.input.shift());
        console.log("C: " + c);
        c++;
      }
    }

    unloadRobot(){
      var toOutQueue = new Tower();
  		while(this.robotArm.length !== 0){
  			this.toOutQueue.push(this.robotArm.pop());
      }
  		this.output.add(toOutQueue);
      console.log(toOutQueue);
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
