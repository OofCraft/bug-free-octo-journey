class Mango {
    constructor(x,y,radius){
    var options = {
        isStatic: true,
        restitution: 0,
        friction: 1,
        density: 1.2
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("mango.png");
    World.add(world, this.body);
}
    display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill("black");
    ellipse(pos.x, pos.y, this.radius);
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 27, 40, 40);
    pop();
    }
};