var gameloop = false
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

/* Inspiroval som cez youtube video :https://www.youtube.com/watch?v=4q2vvZn5aoo&t=4528s&ab_channel=ChrisCourses ale ked som uz pochopil ako vseetok funguje zacial som pridavat moje vlastne veci */
let isdead = false
let score = 0
let dead_count = 0
var bos_dead = false

var block = document.getElementById("block");
var blockTri = document.getElementById("blockTri");
var platf1 = document.getElementById("platf1");

function Game(){
    if(gameloop == true){
        canvas.width =  screen.width    //Game width
        canvas.height = 700             //Game Height
        
        let scrollOffset = 0            //Scroll Offset
        let genericObject               //Bacground
        let player = new Player()       //Player
        let platforms                   //Platforms
        let goombas = []                //Enemy
        let particles = []              //Efetkts
        let fireFlowers                 //Boosts - Upgrades
        let keys = key_status()         //Key - Status

        // Level 2
        if (bos_dead === true){
            platforms  = loadmap_2()
            goombas = load_enemy2()
            fireFlowers = crete_boost_map1()    //Need to be changed
            genericObject =  background2()
        }
        //Level 1
        if(bos_dead === false){
            platforms  = loadmap_1()
            goombas = load_enemy()
            fireFlowers = crete_boost_map1()
            genericObject =  background()
        }


        player.update()

        function Animate(){
            if(gameloop == true){
                requestAnimationFrame(Animate)
                c.fillStyle = 'black'
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
                    })){
                        //console.log("Touch")
                        player.powerUps.fireFlowers = true
                        setTimeout(()=> {
                            fireFlowers.splice(index, 1)
                        },0)
                    }
                        fireFlower.update()
                })
                //Player Update
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
                                            x: (Math.random() - 0.5) * 20,  //Hustota 
                                            y: (Math.random() - 0.5) * 20,  //Hustota
                                        }, 
                                        radius: Math.random() * 9   //Velkost
                                    }))
                                } 
                                goomba.boss = false
                                bos_dead = true
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
                        //console.log("Boss health: "+goomba.health)    //Debug
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
                        //console.log("goomba death")   //Debug
                        score += 10
                        player.velocity.y -= 25
                        if (goomba.boss === false){
                            setTimeout(()=>{
                                goombas.splice(index, 1)
                            }, 0)
                        }else{
                            goombas.length = 0
                            dead()
                        }
                    }else if(player.position.x + player.width >= goomba.position.x && player.position.y + player.height >= goomba.position.y && player.position.x <= goomba.position.x + goomba.width ){
                        if(player.powerUps.fireFlowers !=  true){
                            if(player.heal <= 25){
                                goombas.length = 0
                                dead() 
                            }else{
                                player.heal -= 25
                                for(let i = 0; i < 50; i++){
                                    particles.push(new Particle({
                                        position:{
                                            x: goomba.position.x + goomba.width / 2,
                                            y: goomba.position.y + goomba.height / 2,
                                        },
                                        velocity: {
                                            x: (Math.random() - 0.5) * 10,  //Hustota
                                            y: (Math.random() - 0.5) * 10,  //Hustoata
                                        }, 
                                        radius: Math.random() * 3   //Velkost
                                    }))
                                } 
                                setTimeout(()=>{
                                    goombas.splice(index, 1)
                                }, 0)
                                //console.log("-25 heal")   //Debug
                            }
                        }else{
                            if(!goomba.boss){
                                for(let i = 0; i < 50; i++){
                                    particles.push(new Particle({
                                        position:{
                                            x: goomba.position.x + goomba.width / 2,
                                            y: goomba.position.y + goomba.height / 2,
                                        },
                                        velocity: {
                                            x: (Math.random() - 0.5) * 10,  //Hustota
                                            y: (Math.random() - 0.5) * 10,  //Hustota
                                        }, 
                                        color: "yellow",
                                        radius: Math.random() * 3   //Velkost
                                    }))
                                } 
                            }else{
                                if(goomba.boss){
                                    goombas.length = 0
                                    dead()
                                }
                                if(player.heal <= 25){
                                    goombas.length = 0
                                    dead()
                                }else{
                                    player.heal -= 25
                                    for(let i = 0; i < 50; i++){
                                        particles.push(new Particle({
                                            position:{
                                                x: goomba.position.x + goomba.width / 2,
                                                y: goomba.position.y + goomba.height / 2,
                                            },
                                            velocity: {
                                                x: (Math.random() - 0.5) * 10,  //Hustota
                                                y: (Math.random() - 0.5) * 10,  //Hustota
                                            }, 
                                            radius: Math.random() * 3   //Velkost
                                        }))
                                    } 
                                    setTimeout(()=>{
                                        goombas.splice(index, 1)
                                    }, 0)
                                    //console.log("-25 heal")   //Debug
                                }
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

                let hitSide = false         //Testuje ci som nedkol okraj
                //Scrollovanie obrazu na obraozvke tak ako sa hybeme
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

                //Hitboxi roznych objektov
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
                    // Particles Hitbox
                    particles.forEach((Particle, index) => {
                        if(hitSideOfPlatformCirlcle({
                            object:Particle,
                            platform:platform
                        })){
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
                    //Enemy Hitbox
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
                    //Upgread Hitbox
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

                // Epizoda Vyhra
                if(scrollOffset > 4000 && bos_dead === true){
                    console.log("Winner")
                    win()
                }
                // Epizoda Prehra
                if(player.position.y > canvas.height){
                    console.log("You louse")
                    dead()
                }
            }
        }
        

        Animate()
        //Bohužial nemohol som to dat do inej file lebo potreebujem player.image
        addEventListener('keydown', ({ keyCode }) => {
            switch (keyCode){
                case 65:
                    //console.log("left")
                    keys.left.pressed = true
                    player.image = neo_flip
                    break
                case 68:
                    //console.log("right")
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
                    //console.log("down")
                    break
                case 32:
                    //console.log("space") 
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
                    //console.log("left")
                    keys.left.pressed = false
                    break
                case 68:
                    //console.log("right")
                    keys.right.pressed = false
                    break
                case 87:
                    keys.jump.jumped = false
                    break
                case 83:
                    //console.log("down")
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

  

