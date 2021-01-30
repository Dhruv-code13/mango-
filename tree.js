class Tree{
    constructor(x, y) {
        var options = {
            
           
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 450,10,options);
        this.width = 450;
        this.height = 10;
     
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y+10);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, -300, this.width,600);
        pop();
      }
}