class Slingshot {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.1,
            length:8
        }
        this.Sling = constraint.create(options);
        World.add(world,this.Sling);
    }
    
    display(){
        var PointA = this.Sling.bodyA.position;
        var PointB = this.Sling.bodyB.position;
        strokeWeight(5);
        
        line(PointA.x,PointA.y,PointB.x,PointB.y)
    }
}