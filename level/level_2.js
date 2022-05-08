
function loadmap_2(){
    return map1  = [
        new Platfrom({
            x: 0,
            y: floor_height,
            image: image,
            block:true,
            text: 'floor 1'
        }),
        new Platfrom({
            x: 600, 
            y: 500 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 850, 
            y: 480 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 1050, 
            y: 450 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 1350, 
            y: 450 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 1550, 
            y: 350 ,
            width: blockTri.width,
            height: blockTri.height,
            image: blockTri,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 1950, 
            y: 250 ,
            width: blockTri.width,
            height: blockTri.height,
            image: blockTri,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2050, 
            y: 150 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2250, 
            y: 350 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2350, 
            y: 0 ,
            width: platf1.width,
            height: platf1.height,
            image: platf1,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2050, 
            y: 450 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2250, 
            y: 650 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2550, 
            y: 650 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2650, 
            y: 500,
            width: platf1.width,
            height: platf1.height,
            image: platf1,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2650, 
            y: 250,
            width: platf1.width,
            height: platf1.height,
            image: platf1,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2500, 
            y: 650 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform block'
        }),
        new Platfrom({
            x: 2550, 
            y: 450 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2450, 
            y: 250 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 2950, 
            y: 250 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 3350, 
            y: 250 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 3450, 
            y: 450 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 3650, 
            y: 450 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 3950, 
            y: 250 ,
            width: block.width,
            height: block.height,
            image: block,
            block: true,
            text: 'platform tu ma bit upgrae'
        }),
        new Platfrom({
            x: 4350, 
            y: -200,
            width: platf1.width,
            height: platf1.height,
            image: platf1,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 4350, 
            y: 80 ,
            width: platf1.width,
            height: platf1.height,
            image: platf1,
            block: true,
            text: 'platform 4'
        }),
        new Platfrom({
            x: 4350,
            y: floor_height,
            image: image,
            block:true,
            text: 'floor 2'
        }),
        new Platfrom({
            x: 4900,
            y: floor_height,
            image: image,
            block:true,
            text: 'floor 2'
        }),
        new Platfrom({
            x: 5435,
            y: floor_height,
            image: image,
            block:true,
            text: 'floor 2'
        }),
        new Platfrom({
            x: 5000,
            y: floor_height,
            image: image,
            block:true,
            text: 'floor 2'
        }),
        new Platfrom({
            x: 5950,
            y: 0,
            image: platf1,
            height:800,
            width:platf1.width,
            block:true,
            text: 'floor 2'
        }),
    ]
}

function load_enemy2(){
    return (goombas = [
        
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
                x: 5550,
                y: 300,
            }, 
            image:boss2,
            width:150,
            height:200,
            boss:true,
            velocity: {
                x: -7,
                y: 0,
            },
            distance: {
                limit: 1050,
                traveled:0,
            },
            text:'Enemy BOSS'
        }),
    ])
}
