class Box{
    constructor(x,y,width,height){
        var option={
            isStatic: true
          }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        
    }
    }