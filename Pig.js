class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255
    this.removed=true
  }
display(){
 if(this.body.speed<3){
  super.display();
 } 
 else{
   World.remove(world,this.body)
   if(this.removed===true){
     score+=100
     this.removed=false
   }
   push ()
   this.visibility-=5
   tint(255,this.visibility)
   image(this.image,this.body.position.x,this.body.position.y,50,50)
   pop ()
 }
// console.log(this.body.speed);
}
};