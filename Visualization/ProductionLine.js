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
      input.add(d);
    }

    process(){
      if (!input.isEmpty())
        robotArm.push(input.shift());
      while (!input.isEmpty() && input.peek().getRadius() >= robotArm.peek().getRadius()){
        robotArm.push(input.shift());
      }
    }

    unloadRobot(){
      var toOutQueue = new Tower();
  		while(!robotArm.isEmpty())
  			toOutQueue.push(robotArm.pop());
  		output.add(toOutQueue);
    }

    run(){
  		while(!input.isEmpty()){
  			process();
  			unloadRobot();
  		}
  	}

    removeTower() {
  		return output.remove();
  	}
}
