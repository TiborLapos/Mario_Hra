function isOnTopOfPlatform({object, platform}){
    return (
        object.position.y + object.height <= platform.position.y
        &&
        object.position.y + object.height + object.velocity.y >= platform.position.y
        &&
        object.position.x + object.width >= platform.position.x
        &&
        object.position.x <= platform.position.x + platform.width)
}

function isOnTopOfPlatformCircle({object, platform}){
    return (
        object.position.y + object.radius <= platform.position.y
        &&
        object.position.y + object.radius + object.velocity.y >= platform.position.y
        &&
        object.position.x + object.radius >= platform.position.x
        &&
        object.position.x <= platform.position.x + platform.width)
}

function collisionTop( {objec1, objec2}){
    return (
        objec1.position.y + objec1.height <= objec2.position.y
        &&
        objec1.position.y + objec1.height + objec1.velocity.y >= objec2.position.y
        &&
        objec1.position.x + objec1.width >= objec2.position.x
        &&
        objec1.position.x <= objec2.position.x + objec2.width)
}

function hitBotomOfPLatform({object, platform}){
    return (
        object.position.y<= platform.position.y + platform.height
        &&
        object.position.y - object.velocity.y >= platform.position.y + platform.height
        &&
        object.position.x + object.width >= platform.position.x
        &&
        object.position.x <= platform.position.x + platform.width /*- 50*/)
}


function hitSideOfPlatform({object, platform}){
    return (
        object.position.x + object.width + object.velocity.x - platform.velocity.x >= platform.position.x
        &&
        object.position.x + object.velocity.x <= platform.position.x + platform.width
        &&
        object.position.y <= platform.position.y + platform.height
        &&
        object.position.y + object.height >= platform.position.y )
}

function hitSideOfPlatformCirlcle({object, platform}){
    return (
        object.position.x + object.radius + object.velocity.x - platform.velocity.x >= platform.position.x
        &&
        object.position.x + object.velocity.x <= platform.position.x + platform.width
        &&
        object.position.y <= platform.position.y + platform.height
        &&
        object.position.y + object.radius >= platform.position.y 
        )
}



function objectTouch({object1, object2}){
    return(
        object1.position.x + object1.width >= object2.position.x  
        &&
        object1.position.x <= object2.position.x + object2.width
        &&
        object1.position.y + object1.height >= object2.position.y
        &&
        object1.position.y <= object2.position.y + object2.height
        )
}



