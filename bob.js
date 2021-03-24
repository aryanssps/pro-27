class Pendulum {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:1,
          density:1.9
      }
      this.body = Bodies.circle(x, y,20,options);
    this.radius=20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    ellipseMode(CENTER);

      fill("purple");
      ellipse(0, 0);
      pop();
    }
  };