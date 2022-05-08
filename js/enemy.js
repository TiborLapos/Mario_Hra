const gravity = 0.4
var enemy = document.getElementById("enemy");
var enemy_flip = document.getElementById("enemy-flip");
var boss = document.getElementById("boss1");
var boss2 = document.getElementById("boss2");

class Goomba{
    constructor({position,width = 100,height = 80,boss = false, health = 1500, image = enemy, velocity,text, distance = {
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
        this.width = width,
        this.height = height
        this.boss = boss
        this.image = image
        this.distance = distance
        if(!boss) health = 1
        this.health = health
        this.name = text
        this.text = (this.name+" | "+this.health )

    }
    draw(){

       
        c.drawImage(this.image,this.position.x, this.position.y,this.width,this.height)
        if(dev){
             //Hit Box
            //c.fillStyle = 'red'
            //c.fillStyle = 'rgba(255,0,0,.2)'
            //c.fillRect(this.position.x, this.position.y, this.width,this.height)
            if(this.text){
                c.font = '8pt Arial';
                c.fillStyle = 'red'
                c.fillText(this.text, this.position.x,this.position.y)
            }
        }
        if(this.boss){
            c.font = '18pt Arial';
            c.fillStyle = '#21fa00'
            this.text = (this.health)
            c.fillText(this.text, this.position.x + this.width / 2,this.position.y)
        }
    }
    update(){
        this.draw()
        
        if(this.boss === false){
            if(this.velocity.x < 0){
                this.image = enemy
            }else{
                this.image = enemy_flip
            }
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

        }else{

        }
     
        //console.log(this.distance.traveled)
    }
}

class Particle{
    constructor({position, velocity, radius, color = '#e60000',fireball = false}){
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
        this.color = color
        this.fireball = fireball
    }
    draw(){
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
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