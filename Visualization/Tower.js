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

	copy(){
		var cop = [];
		for(let i = 0; i < this.disks.length; i++){
			cop[i] = this.disks[i].copy();
		}
	}

	toString() {
		var ret = "Tower with: ";
		while(this.disks.length !== 0) {
			ret += this.pop();
			ret += ", ";
		}
		return ret;
	}

}
