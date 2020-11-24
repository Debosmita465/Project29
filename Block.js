class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
display(){
  fill(255);
  strokeWeight(2);
  stroke('rgb(0,0,0)')
  super.display();
}
}
