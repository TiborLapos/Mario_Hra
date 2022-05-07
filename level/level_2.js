
function loadmap_2(){
    return map1  = [
        new Platfrom({
            x: 0,
            y: floor_height,
            image: image,
            block:true,
            text: 'floor 1'
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
    ])
}
