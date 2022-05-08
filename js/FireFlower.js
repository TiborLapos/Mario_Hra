var pill = document.getElementById("pill");


class Fireflower{
    constructor({position, velocity, text}){
        this.position = {
            x:  position.x,
            y: position.y
        }
        this.velocity = {
            x: velocity.x,
            y: velocity.y
        }
        this.width = 40,
        this.height = 30
        this.image = pill
        this.text = text
    }
    draw(){
        //Hit Box
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
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity
        }
    }
}

function crete_boost_map1(){
    return(fireFlowers = [
        new Fireflower({
            position:{
            x: 6980,
            y: 0
            },
            velocity:{
                x:0,
                y:0
            }
        })])
}