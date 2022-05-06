const gravity = 0.4
var enemy = document.getElementById("enemy");
var enemy_flip = document.getElementById("enemy-flip");

class Goomba{
    constructor({position, velocity,text, distance = {
        limit: 50, 
        traveled: 0
    }}){
        this.position = {
            x:  position.x,
            y: position.y
        }
        this.velocity = {
            x: velocity.x,
            y: velocity.y
        }
        this.width = 100,
        this.height = 80
       // if()
        this.image = enemy
        this.text = text

        this.distance = distance
    }
    draw(){

        //Hit Box
        c.fillStyle = 'red'
        c.fillStyle = 'rgba(255,0,0,.2)'
        c.fillRect(this.position.x, this.position.y, this.width,this.height)


        c.drawImage(this.image,this.position.x, this.position.y,this.width,this.height)
        if(this.text){
            c.fillStyle = 'red'
            c.fillText(this.text, this.position.x,this.position.y)
        }
    }
    update(){
        this.draw()
        if(this.velocity.x < 0){
            this.image = enemy
        }else{
            this.image = enemy_flip
        }
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity
        }

        // Check for gombaa distanc ang walk back 
        this.distance.traveled += Math.abs(this.velocity.x)
        if(this.distance.traveled > this.distance.limit){
            this.distance.traveled = 0
            this.velocity.x = -this.velocity.x 
        }
     
        //console.log(this.distance.traveled)
    }
}

class Particle{
    constructor({position, velocity, radius}){
        this.position = {
            x: position.x, 
            y: position.y  
        }

        this.velocity = {
            x: velocity.x,
            y: velocity.y
        }
        this.radius = radius
        this.ttl = 300
    }
    draw(){
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = '#e60000'
        c.fill()
        c.closePath()
    }
    update(){
        this.ttl--
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.radius + this.velocity.y <= canvas.height){
            this.velocity.y += gravity * 0.05
        }

    }
   
}