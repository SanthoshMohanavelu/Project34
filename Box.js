class Box {
    constructor (x, y, width, height){
        var opt = {
            isStatic: false,
        } 
        this.body = Bodies.rectangle(x, y, width, height, opt)
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        World.add(world, this.body);
    }
    display () {
        var Pos=this.body.position;		

        push()
        rectMode(CENTER)
        translate(Pos.x, Pos.y);
        fill(231, 54, 68)
        rect(0,0,this.width, this.height);
        pop()
        
    }
}