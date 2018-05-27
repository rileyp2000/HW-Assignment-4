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

	getDisk(index){
		if(index < this.disks.length){
			return this.disks[index];
		}
	}

	size(){
		return this.disks.length;
	}

	toString() {
		var ret = "Tower with: ";
		while(this.disks.length !== 0) {
			ret += this.pop();
			ret += "\n";
		}
		return ret;
	}

}
