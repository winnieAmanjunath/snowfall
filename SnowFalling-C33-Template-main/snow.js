class Snow{
    constructor(x,y){
       var options = {
            
            friction: 1.1,
            density: 1.1 ,
            isStatic: false
        }
        this.snow = Bodies.circle(x,y,5,options);
        this.radius = 5;
        this.img = loadImage("snow4.webp");
        World.add(world, this.snow);
    }
    display(){
        fill ('blue');
        imageMode(CENTER);
        image(this.img,this.snow.position.x,this.snow.position.y,20,20);
    }
    updateY(){     
        if(this.snow.position.y > height){

            Matter.Body.setPosition(this.snow, {x:random(0,800), y:random(0,800)})
        }
    }


}