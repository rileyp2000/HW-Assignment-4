class Disk {

  constructor(rad){
    if(rad <= 0 )
      throw "Not a valid radius";

    this.radius = rad;
  }

  getRadius(){
    return this.radius;
  }

  copy(){
    return new Disk(this.radius);
  }

  compareTo(disk2){
    return this.getRadius() - disk2.getRadius();
  }

  toString(){
    return this.radius;
  }

}
