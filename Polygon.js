class Polygon{
    constructor(x,y,r) {
    var options = {
        isStatic:false
    }
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    }
    display() {
        
        ellipse(this.body.position.x,this.body.position.y,this.r);
        ellipseMode(RADIUS);
    }
}