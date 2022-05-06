var gameloop = false
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
let isdead = false

/* Inspiroval som cez youtube video :https://www.youtube.com/watch?v=4q2vvZn5aoo&t=4528s&ab_channel=ChrisCourses ale ked som uz pochopil ako vseetok funguje zacial som pridavat moje vlastne veci */



function Game(){

    if(gameloop == true){
        console.log("game")
        canvas.width =  screen.width
        canvas.height = 576
    
    /*
    Fotky  
    */

    var neo = document.getElementById("neo");
    var neo_flip = document.getElementById("neo-flip");

    var background1 = document.getElementById("background1");
    var block = document.getElementById("block");
    var blockTri = document.getElementById("blockTri");
    const gravity = 0.5

    const genericObject = [
        new GenericObject({
            x: image.width,
            y: image.height,
            image:background1
        })
    ] 

    class Player{
        constructor(){
            this.position = {
                x: 100,
                y: 300
            }
            this.velocity = {
                x: 0,
                y: 0
            }
            this.speed = 5
            this.width = neo.width,
            this.height = neo.height,
            this.image = neo
            this.left = true
        }
        draw(){
            //Hit Box
            c.fillStyle = 'rgba(255,0,0,.2)'
            c.fillRect(this.position.x, this.position.y, this.width,this.height)
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


    // Default Init

    

    let player = new Player()
    let platforms  = loadmap_1()
    let goombas = []
    // Create Goomba
    goombas = [
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
        })
    ]
    // EFFEKT
    let particles = []


    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        },
        jump: {
            jumped: false
        }

    }
    player.update()
    let scrollOffset = 0


    //Restart Init 
    function init(){
        //player = new Player()
        //player.update()
        //platforms = loadmap_1()
        //scrollOffset = 0
        c.clearRect(0, 0, c.canvas.width, c.canvas.height)
    }
  

    function Animate(){
        if(gameloop == true){
            requestAnimationFrame(Animate)
            c. fillStyle = 'white'
            c.fillRect(0, 0, canvas.width,canvas.height)
           
            genericObject.forEach(genericObject => {
                genericObject.update()
                genericObject.velocity.x = 0
            })
           
            platforms.forEach(platform => {
                platform.update()
                platform.velocity.x = 0
            })

           
            player.update()
           
            goombas.forEach((goomba, index) => {
                goomba.update()
                // goomba dead
                if(collisionTop({
                    objec1: player,
                    objec2: goomba
                })){
                    // Create Particle
                    for(let i = 0; i < 50; i++){
                        particles.push(new Particle({
                            position:{
                                x: goomba.position.x + goomba.width / 2,
                                y: goomba.position.y + goomba.height / 2,
                            },
                            velocity: {
                                x: (Math.random() - 0.5) * 10, 
                                y: (Math.random() - 0.5) * 10, 
                            }, 
                            //Velkost
                            radius: Math.random() * 3
                        }))
                    } 
                    console.log("goomba death")
                    player.velocity.y -= 25
                    setTimeout(()=>{
                        goombas.splice(index, 1)
                    }, 0)
                }else if(player.position.x + player.width >= goomba.position.x && player.position.y + player.height >= goomba.position.y && player.position.x <= goomba.position.x + goomba.width ){
                    goombas.length = 0
                    dead()
               }
            })

           
            particles.forEach(Particle => {
                Particle.update()
            })
         

            let hitSide = false
            //Ovladaanie Left Right
            if(keys.right.pressed && player.position.x < 400){
                player.velocity.x = 5
            }else if((keys.left.pressed  && player.position.x > 100) || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)){
                player.velocity.x = -5
            }else {
                player.velocity.x = 0
                //Scroling code
                if(keys.right.pressed){
                    for(let i = 0; i < platforms.length; i++){
                        const platform  = platforms[i]
                        platform.velocity.x = -player.speed

                        if (platform.block && hitSideOfPlatform({
                            object:player, 
                            platform:platform
                        })){
                            platforms.forEach(platform => {
                                platform.velocity.x = 0
                            })
                            hitSide = true
                            break
                        }
                    }
                    if (!hitSide){
                        scrollOffset += player.speed

                        genericObject.forEach((genericObject) => {
                            genericObject.velocity.x = -player.speed * 0.66
                        })
    
                        goombas.forEach(goomba => {
                            goomba.position.x -= player.speed
                        })
    
                        particles.forEach(Particle => {
                            Particle.position.x -= player.speed
                        })
                    }
                }else if(keys.left.pressed && scrollOffset > 0){
                    for(let i = 0; i < platforms.length; i++){
                        const platform  = platforms[i]
                        platform.velocity.x = player.speed
                        if (platform.block && hitSideOfPlatform({
                            object:player,
                            platform:platform
                        })){
                            platforms.forEach(platform => {
                                platform.velocity.x = 0
                            })
                            hitSide = true
                            break;
                        }
                    }

                    if(!hitSide){
                        scrollOffset -= player.speed

                        genericObject.forEach((genericObject) => {
                            genericObject.velocity.x = player.speed * 0.66
                        })
                        goombas.forEach(goomba => {
                            goomba.position.x += player.speed
                        })
                        particles.forEach(Particle => {
                            Particle.position.x += player.speed
                        })
                    }
                }
            }

            //platform hitbox
            platforms.forEach(platform => {
                if(
                    isOnTopOfPlatform({
                        object: player,
                        platform: platform
                    })
                ){
                    player.velocity.y = 0
                    keys.jump.jumped = true
                }
                if (platform.block && hitBotomOfPLatform({
                    object: player,
                    platform:platform
                })){
                    player.velocity.y = -player.velocity.y
                }

                if (platform.block && hitSideOfPlatform({
                    object:player,
                    platform:platform
                })){
                    player.velocity.x = 0
                }

                // Particle skok
                particles.forEach((Particle, index) => {
                    if(
                        isOnTopOfPlatformCircle({
                            object: Particle,
                            platform: platform
                        })
                    ){
                        Particle.velocity.y = -Particle.velocity.y * 0.8

                        if(Particle.radius - 0.4 < 0  ){
                            particles.splice(index, 1)
                        }else{
                            Particle.radius -= 0.4
                        }
                    }
                    if(Particle.ttl < 0){
                        particles.splice(index, 1)
                    }
                })
                

                goombas.forEach(goomba => {
                    if(
                        isOnTopOfPlatform({
                            object: goomba,
                            platform: platform
                        })
                    ){
                        goomba.velocity.y = 0
                    }
                })
            })


            // Epizoda Vyhra
        if(scrollOffset > 2000){
            console.log("Winner")
        }
            // Epizoda Prehra
            if(player.position.y > canvas.height){
                console.log("You louse")
                dead()
            }
        }
    }
        

    Animate()
    
    addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode){
            case 65:
                console.log("left")
                keys.left.pressed = true
                player.image = neo_flip
                break
            case 68:
                console.log("right")
                keys.right.pressed = true
                player.image = neo
                break
            case 87:
                //console.log(player.velocity.y)
                if(keys.jump.jumped == true){
                    player.velocity.y  -= 15
                    keys.jump.jumped = false
                }
                break
            case 83:
                console.log("down")
                break
        }
    })
    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode){
            case 65:
                console.log("left")
                keys.left.pressed = false
                break
            case 68:
                console.log("right")
                keys.right.pressed = false
                break
            case 87:
                keys.jump.jumped = false
                break
            case 83:
                console.log("down")
                break
        }
    })
    } 
}

function menu(){
    if(gameloop != true){
        Start_button()
        Volume_button()
        Info_button()
    }
}

  

