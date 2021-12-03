class Ball{

constructor(r,k,a){
    var ball_options = {
        restitution: 0.8
      }
      
      this.image= loadImage("melon.png");
     this. body = Bodies.circle(r,k,a,ball_options);
this.a=a

      World.add(world,this.body);
}
display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,2*this.a,2*this.a);
 
}


}