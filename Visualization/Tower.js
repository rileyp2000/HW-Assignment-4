class Tower {

	constructor(){
		this.disks = [];
	}

	pop(){
		return this.disks.pop();
	}

	push(disk){
		this.disks.push(disk);
	}

	toString() {
		var ret = "Tower with: ";
		while(!this.disks.isEmpty()) {
			ret += this.pop();
			ret += "\n";
		}
		return ret;
	}

}
