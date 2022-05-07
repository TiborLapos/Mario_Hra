var image = document.getElementById("scream");
var background1 = document.getElementById("background1");
var floor_height = 620
var posY = 500;

class GenericObject {
    constructor({x,y, image}){
        this.position = {
            x: 0,
            y: 0
        }
        
        this.velocity = {
            x: 0
        }

        this.image = image,
        this.width = 7000,
        this.height = image.height
        this.text = "Test"
    }
    draw(){
        
        //c.fillStyle = 'blue'
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        this.draw()
        this.position.x += this.velocity.x
    }
}

  

class Platfrom {
    constructor({x,y,image,width = 550,height = 80,block,text}){
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 0
        }
        this.image = image,
        this.width = width,
        this.height = height
        this.block = block
        this.text = text
    }
    draw(){
        //c.fillStyle = 'white'
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        c.font = '8pt Arial';
        if(this.text){
            c.fillStyle = 'red'
            c.fillText(this.text, this.position.x,this.position.y)
        }
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
    }
}

function background(){
    return (genericObject = [
        new GenericObject({
            x: image.width,
            y: image.height,
            image:background1
        })
    ])
}

function background2(){
    return (genericObject = [
        new GenericObject({
            x: image.width,
            y: image.height,
            image:neo
        })
    ])
}