class Mango{
    constructor(x, y, r) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, r,options);
        this.width = width;
        this.height = height;
        this.r=r
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}