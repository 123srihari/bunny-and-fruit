class Chain{
constructor(v,d){
var specifications = {
    bodyA:v,
pointB:d,
length:200,
stiffness:0.1
}

 this.chain=Constraint.create(specifications)
 World.add(world,this.chain);
}
display(){
  strokeWeight (5)
  stroke("yellow")
  if(this.chain.bodyA){
    line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)

  }

}
chainBreak(){
  this.chain.bodyA=null
}





}