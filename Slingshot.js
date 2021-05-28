class Slingshot{
    constructor(bodyA,pointB){
       var  options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.sling=Constraint.create(options)
         World.add(world,this.sling)
         this.sling1=loadImage("sprites/sling1.png");
         this.sling2=loadImage("sprites/sling2.png");
         this.sling3=loadImage("sprites/sling3.png");
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){

        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.sling.bodyA){
            push()
            var pointA=this.sling.bodyA.position;
            var pointB=this.sling.pointB;
            strokeWeight(4);
            stroke("#301608")
            if(pointA.x<220){
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+25,pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-15,15,30);
            }
            else{
                line(pointA.x+25,pointA.y+10,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y+10,pointB.x+25,pointB.y);
                image(this.sling3,pointA.x+25,pointA.y-5,15,30);
            }
            pop()
        }
    }
}