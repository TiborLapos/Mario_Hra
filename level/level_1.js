    var image = document.getElementById("scream");
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

    function loadmap_1(){
        return map1  = [
            new Platfrom({
                x: 0,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor 1'
            }),
            new Platfrom({
                x: 700,
                y: floor_height - 200,
                image: image,
                block:true,
                text: 'floor 2'

            }),
            new Platfrom({
                x: 1500,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor 3'

            }),
          
            new Platfrom({
                x: 850, 
                y: 270 ,
                width: blockTri.width,
                height: blockTri.height,
                image: blockTri,
                block: true,
                text: 'platform 1'
            }),
            new Platfrom({
                x: 350, 
                y: 270 ,
                width: blockTri.width,
                height: blockTri.height,
                image: blockTri,
                block: true,
                text: 'platform 2'
            }),
            /*
            new Platfrom({
                x: 1390,
                y: 80,
                width: 50,
                height: platf1.height,
                image: platf1,
                block: true,
                text: 'platform 3'
            }),
            */
            new Platfrom({
                x: 2350,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor 4'
            }),
            new Platfrom({
                x: 2900, 
                y: 500 ,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 4'
            }),
            new Platfrom({
                x: 3200,
                y: 450,
                width: 50,
                height: platf1.height,
                image: platf1,
                block: true,
                text: 'platform 5'
            }),
            new Platfrom({
                x: 3200,
                y: 0,
                width: 50,
                height: platf1.height,
                image: platf1,
                block: true,
                text: 'platform 6'
            }),
            new Platfrom({
                x: 3500, 
                y: 450 ,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 7'
            }),
            new Platfrom({
                x: 3650, 
                y: 450 ,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 8'
            }),
            new Platfrom({
                x: 3850, 
                y: 350 ,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 9'
            }),
            new Platfrom({
                x: 4150, 
                y: 350 ,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 10'
            }),
            new Platfrom({
                x: 4500, 
                y: 550 ,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 11'
            }),
            new Platfrom({
                x: 4600,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor 5'
            }),
            new Platfrom({
                x: 5150,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor 6'
            }),
            new Platfrom({
                x: 4850, 
                y: 350 ,
                width: blockTri.width,
                height: blockTri.height,
                image: blockTri,
                block: true,
                text: 'platform 12'
            }),
            new Platfrom({
                x: 4650,
                y: 210,
                width: 50,
                height: platf1.height,
                image: platf1,
                block: true,
                text: 'platform 13'
            }),
            new Platfrom({
                x: 5050, 
                y: 350 ,
                width: blockTri.width,
                height: blockTri.height,
                image: blockTri,
                block: true,
                text: 'platform 14'
            }),
            new Platfrom({
                x: 5700, 
                y: 550,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 15'
            }),
            new Platfrom({
                x: 5800, 
                y: 450,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 16'
            }),
            new Platfrom({
                x: 5900, 
                y: 350,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 17'
            }),
            new Platfrom({
                x: 6000, 
                y: 250,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 18'
            }),
            new Platfrom({
                x: 6050, 
                y: 250,
                width: blockTri.width,
                height: blockTri.height,
                image: blockTri,
                block: true,
                text: 'platform 19'
            }),
            new Platfrom({
                x: 6200, 
                y: 250,
                width: blockTri.width,
                height: blockTri.height,
                image: blockTri,
                block: true,
                text: 'platform 20'
            }),
            new Platfrom({
                x: 6480, 
                y: 135,
                width: platf1.width,
                height: platf1.height,
                image: platf1,
                block: true,
                text: 'platform 21'
            }),
            new Platfrom({
                x: 6480, 
                y: 400,
                width: platf1.width,
                height: platf1.height,
                image: platf1,
                block: true,
                text: 'platform 22'
            }),
            new Platfrom({
                x: 6480, 
                y: 680,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 23'
            }),
            new Platfrom({
                x: 6980, 
                y: 135,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 24'
            }),
            new Platfrom({
                x: 7050, 
                y: 200,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 25'
            }),
            new Platfrom({
                x: 7000,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor 7'
            }),
            
            new Platfrom({
                x: 7180, 
                y: 420,
                width: block.width,
                height: block.height,
                image: block,
                block: true,
                text: 'platform 26'
            }),
            new Platfrom({
                x: 7550,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor 7'
            }),
            new Platfrom({
                x: 8100,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor 7'
            }),
            new Platfrom({
                x: 8650,
                y: floor_height,
                image: image,
                block:true,
                text: 'floor 7'
            }),
          
        ]
    }

    function load_enemy(){
        return (goombas = [
            /*
            new Goomba({
                position: {
                    x: 400,
                    y: 400,
                }, 
                velocity: {
                    x: -0.5,
                    y: 0,
                }, 
                distance: {
                    limit: 200,
                    traveled:0,
                },
                text:'Enemy 1'
            }),
            new Goomba({
                position: {
                    x: 1000,
                    y: 200,
                }, 
                velocity: {
                    x: -2,
                    y: 0,
                },
                distance: {
                    limit: 350,
                    traveled:0,
                },
                text:'Enemy 2'
            }),
            new Goomba({
                position: {
                    x: 1950,
                    y: 200,
                }, 
                velocity: {
                    x: -0.7,
                    y: 0,
                },
                distance: {
                    limit: 450,
                    traveled:0,
                },
                text:'Enemy 3'
            }),
            new Goomba({
                position: {
                    x: 4900,
                    y: 200,
                }, 
                velocity: {
                    x: -1,
                    y: 0,
                },
                distance: {
                    limit: 300,
                    traveled:0,
                },
                text:'Enemy 4'
            }),
            new Goomba({
                position: {
                    x: 5200,
                    y: 360,
                }, 
                velocity: {
                    x: -2,
                    y: 0,
                },
                distance: {
                    limit: 400,
                    traveled:0,
                },
                text:'Enemy 4'
            }),
            new Goomba({
                position: {
                    x: 5500,
                    y: 200,
                }, 
                velocity: {
                    x: -0.7,
                    y: 0,
                },
                distance: {
                    limit: 550,
                    traveled:0,
                },
                text:'Enemy 4'
            }),
            */
            new Goomba({
                position: {
                    x: 6205,
                    y: 110,
                }, 
                velocity: {
                    x: -1.2,
                    y: 0,
                },
                distance: {
                    limit: 200,
                    traveled:0,
                },
                text:'Enemy 5'
            }),
            new Goomba({
                position: {
                    x: 8650,
                    y: 300,
                }, 
                image:boss,
                width:300,
                height:300,
                boss:true,
                velocity: {
                    x: -1.2,
                    y: 0,
                },
                distance: {
                    limit: 1300,
                    traveled:0,
                },
                text:'Enemy BOSS'
            }),
        ])
    }
