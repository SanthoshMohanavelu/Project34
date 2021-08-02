class Ground 
{
  constructor(x, y, width, height) 
  {
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(30, 190, 74);
    rect(pos.x,pos.y, this.width, this.height);
    pop();
  }
}