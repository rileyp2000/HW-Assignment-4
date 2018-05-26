class Disk {

  constructor(rad){
    if(r <= 0 )
      throw "Not a valid radius";

    this.radius = rad;
  }

  getRadius(){
    return radius;
  }

  compareTo(disk2){
    return this.getRadius() - disk2.getRadius();
  }

  toString(){
    return "Radius: " + this.radius;
  }

}
