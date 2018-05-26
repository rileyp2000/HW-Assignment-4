class Tower {

	constructor(){
		this.disks = [];
	}

	pop(){
		return disks.pop();
	}

	push(disk){
		disks.push(disk);
	}

	toString() {
		String ret = "";
		while(!this.disks.isEmpty()) {
			ret += this.pop();
			ret += "\n";
		}
		return ret;
	}

}
