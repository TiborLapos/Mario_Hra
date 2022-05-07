var gameloop = false
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
let isdead = false

/* Inspiroval som cez youtube video :https://www.youtube.com/watch?v=4q2vvZn5aoo&t=4528s&ab_channel=ChrisCourses ale ked som uz pochopil ako vseetok funguje zacial som pridavat moje vlastne veci */

let score = 0
let dead_count = 0

function Game(){
    if(gameloop == true){
        console.log("game")
        canvas.width =  screen.width
        canvas.height = 700
    
    /*
    Fotky  
    */

    var neo = document.getElementById("neo");
    var neo_flip = document.getElementById("neo-flip");
    var background1 = document.getElementById("background1");
    var block = document.getElementById("block");
    var blockTri = document.getElementById("blockTri");
    var platf1 = document.getElementById("platf1");

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
                x: 1700,
                y: 400
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
    // Create Enemy
    goombas = load_enemy()


    // EFFEKT
    let particles = []

    //Upgrade
    let fireFlowers = [
    new Fireflower({
        position:{
        x: 6980,
        y: 0
        },
        velocity:{
            x:0,
            y:0
        }
    })]


    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        },
        jump: {
            jumped: false
        },
        space: {
            pressed: false
        }

    }
    player.update()
    let scrollOffset = 0

    function Animate(){
        if(gameloop == true){
       
            requestAnimationFrame(Animate)
            c. fillStyle = 'black'
            c.fillRect(0, 0, canvas.width,canvas.height)
            //Objects Animate
            genericObject.forEach(genericObject => {
                genericObject.update()
                genericObject.velocity.x = 0
            })

            //Platform Animate
            platforms.forEach(platform => {
                platform.update()
                platform.velocity.x = 0
            })



            //Upgrade Animate
            fireFlowers.forEach((fireFlower,index) =>{
                if(objectTouch({
                    object1: player,
                    object2: fireFlower
                })
                ){
                    //console.log("Touch")
                    player.powerUps.fireFlowers = true
                    setTimeout(()=> {
                        fireFlowers.splice(index, 1)
                    },0)
                }
                    fireFlower.update()
            })
            player.update()


            //Enemy Animate
            goombas.forEach((goomba, index) => {
                goomba.update()
                //Remove Enemy On Hit
                particles.filter(particle => particle.fireball).forEach((particle, particleIndex) => {
                    if(particle.position.x + particle.radius >= goomba.position.x && particle.position.y + particle.radius >= goomba.position.y && particle.position.x - particle.radius <= goomba.position.x + goomba.width && particle.position.y - particle.radius <= goomba.position.y + goomba.height){
                        // Create Effekt
                        if(goomba.health <= 0){
                            console.log("Boss dead")
                            for(let i = 0; i < 150; i++){
                                particles.push(new Particle({
                                    position:{
                                        x: goomba.position.x + goomba.width / 2,
                                        y: goomba.position.y + goomba.height / 2,
                                    },
                                    velocity: {
                                        x: (Math.random() - 0.5) * 20, 
                                        y: (Math.random() - 0.5) * 20, 
                                    }, 
                                    //Velkost
                                    radius: Math.random() * 9
                                }))
                            } 
                            goombas.splice(index, 1)
                        }
                        
                        if(boss){
                            goomba.health -= 10
                            particles.splice(particleIndex, 1)
                        }else{
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
                            setTimeout(()=>{
                                goombas.splice(index, 1)
                                particles.splice(particleIndex, 1)
                            }, 0)
                        }
                        
                    }
                    console.log("Boss health: "+goomba.health)
                })
                // Enemy dead
                if(collisionTop({
                    objec1: player,
                    objec2: goomba
                })){
                    // Create Effekt
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
                    score += 10
                    player.velocity.y -= 25
                    setTimeout(()=>{
                        goombas.splice(index, 1)
                    }, 0)
                }else if(player.position.x + player.width >= goomba.position.x && player.position.y + player.height >= goomba.position.y && player.position.x <= goomba.position.x + goomba.width ){
                    
                    if(player.powerUps.fireFlowers !=  true){
                        goombas.length = 0
                        dead()
                    }else{
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
                                color: "yellow",
                                //Velkost
                                radius: Math.random() * 3
                            }))
                        } 
                        setTimeout(()=>{
                            goombas.splice(index, 1)
                        }, 0)
                        player.powerUps.fireFlowers = false
                    }
               }
            })

            //Particles Animate
            particles.forEach((particle,particleIndex)  => {
                particle.update()
                if (particle.fireball && (particle.position.x - particle.radius >= canvas.width || particle.position.x + particle.radius <= 0)){
                    setTimeout(() => {
                        particles.splice(particleIndex, 1) 
                    },0)
                }
            })
            //console.log(particles)

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
                        //Scroll Platform
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
                        //Scroll Objects
                        genericObject.forEach((genericObject) => {
                            genericObject.velocity.x = -player.speed * 0.66
                        })
                        //Scroll Enemy
                        goombas.forEach(goomba => {
                            goomba.position.x -= player.speed
                        })
                        //Scroll Upgrade
                        fireFlowers.forEach(fireFlower => {
                            fireFlower.position.x -= player.speed
                        })
                        //Scroll Effekt
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
                        //Scroll Object
                        genericObject.forEach((genericObject) => {
                            genericObject.velocity.x = player.speed * 0.66
                        })
                        //Scroll Enemy
                        goombas.forEach(goomba => {
                            goomba.position.x += player.speed
                        })
                        //Scroll Upgrade
                        fireFlowers.forEach(fireFlower => {
                            fireFlower.position.x += player.speed
                        })
                        //Scroll Efekts
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

                // Particles bounce
                particles.forEach((Particle, index) => {
                    if(hitSideOfPlatformCirlcle({
                        object:Particle,
                        platform:platform
                    })){
                        //console.log("Hehe")
                        Particle.velocity.y = -Particle.velocity.y * .99
                        if(Particle.radius - 0.4 < 0  ){
                            particles.splice(index, 1)
                        }else{
                            Particle.radius -= 0.4
                        }
                    }
                    if(
                        isOnTopOfPlatformCircle({
                            object: Particle,
                            platform: platform
                        })
                    ){
                        const bounce = 0.9
                        Particle.velocity.y = -Particle.velocity.y * .99

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


                
                //Enemy kolizia
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
                 //Upgread kolizia
                 fireFlowers.forEach(fireFlowers => { 
                    if(
                        isOnTopOfPlatform({
                            object: fireFlowers,
                            platform: platform
                        })
                    ){
                        fireFlowers.velocity.y = 0
                    }
                })
            })

        console.log("Position X: "+scrollOffset+"Position Y: "+player.position.y)

            // Epizoda Vyhra
        if(scrollOffset > 4000){
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
            case 32:
                console.log("space") 
                if(keys.space.pressed == false){
                    if(!player.powerUps.fireFlowers) return
                    let velocity = 10
                    if(player.image === neo_flip){
                        velocity = -10
                    } 
                    particles.push(new Particle({
                        position: {
                            x: (player.position.x + player.width / 2) + 30,
                            y: player.position.y + 30
                        },
                        velocity: {
                            x: velocity,
                            y:0
                        },
                        radius:5,
                        color: 'black',
                        fireball: true
                    }))
                }
                keys.space.pressed = true                
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
            case 32:
                    keys.space.pressed = false                
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

  

