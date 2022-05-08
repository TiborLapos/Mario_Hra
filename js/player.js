
var a = Array('\u2665');
var neo = document.getElementById("neo");
var neo_flip = document.getElementById("neo-flip");

class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 220
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.speed = 5
        this.width = neo.width,
        this.height = neo.height,
        this.image = neo
        this.powerUps={
            fireFlowers:false
        }
        this.opacity = 1
        this.heal = 50
        this.text = this.healt
    }
    draw(){
        if(dev){
            //Hit Box
            c.fillStyle = 'rgba(255,0,0,.2)'
            c.fillRect(this.position.x, this.position.y, this.width,this.height)
        }
        //Heal
        this.text = (this.heal+" "+a[0])
        c.font = '12pt Arial';
        c.fillStyle = '#21fa00'
        c.fillText(this.text, this.position.x + 10,this.position.y - 10)  
        c.drawImage(this.image,this.position.x, this.position.y, 80, 150);
    }
    update(){
        this.draw()
        this.position.y +=  this.velocity.y
        this.position.x +=  this.velocity.x
        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity
        }

    }
}