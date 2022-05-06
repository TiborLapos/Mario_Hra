
    var image = document.getElementById("scream");
    var floor_height = 500
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
            this.width = image.width,
            this.height = image.height
        }
        draw(){
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
            //c.fillStyle = 'blue'
            //c.fillRect(this.position.x, this.position.y, this.width, this.height)
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
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

    function loadmap_1(){
        return map1  = [
            new Platfrom({
                x: 0,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor'
            }),
            new Platfrom({
                x: (image.width) + 150,
                y: floor_height - 100,
                image: image,
                block:true,
                text: 'floor'

            }),
            new Platfrom({
                x: (image.width) + 950,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor'

            }),
            new Platfrom({
                x: (image.width) + 950,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor'

            }),
            new Platfrom({
                x: (image.width) + 1750,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor'

            }),
            
            new Platfrom({
                x: 850,
                y: 270 ,
                width: blockTri.width,
                height: blockTri.height,
                image: blockTri,
                block: true,
                text: 'object'
            }),
             
            new Platfrom({
                x: 1390,
                y: 100 ,
                width: 50,
                height: blockTri.height + 150,
                image: blockTri,
                block: true,
                text: 'object'
            }),
            new Platfrom({
                x: (image.width) + 2450,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor'

            }),
        ]
        
        
    }