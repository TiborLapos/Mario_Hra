var  show = true

function Start_button(){
    canvas.width =  1024
    canvas.height = 576
    if (show == true){
        var x_po = 420
        var y_poz = 190
        const ctx = canvas.getContext('2d');
        const button1 = new Path2D();

        button1.rect(x_po, y_poz, 150, 50);
        //ctx.fillStyle = 'red';
        ctx.lineWidth = 4; 
        if (isdead == true){
            ctx.strokeStyle = 'red';
        }else{
            ctx.strokeStyle = '#1F51FF';
        }       
        ctx.strokeRect(x_po, y_poz, 150, 50);   

        ctx.fill(button1);
    
        ctx.fillStyle = 'white';
        ctx.font = '25pt Arial';
        ctx.textAlign = "center";
        ctx.fillText("./start", x_po+70, y_poz+40);
        
        ctx.lineWidth = 7; 
       

        if(isdead == false){
            ctx.fillStyle = '#1F51FF'
            ctx.font = '60pt Arial';
            ctx.textAlign = "center";
            c.fillText("Choose your faith", 500, 150);
        }
       
        

        // Listen for mouse moves
        canvas.addEventListener('click', function(event) {
        // Check whether point is inside circle
        if (ctx.isPointInPath(button1, event.offsetX, event.offsetY) && show !== false) {
            console.log("Start")
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            show = false
            gameloop = true 
            document.getElementById("canvas").style.border = "none";
            if(music === true){
                playMusic()
            }
            Game()
           // win()
        }
        });
    }
}
function Volume_button(){
    var x_po = 420
    var y_poz = 260
    // Create circle
    const ctx = canvas.getContext('2d');
    const button2 = new Path2D();
    button2.rect(x_po, y_poz, 150, 50);
    ctx.fillStyle = 'black';
    ctx.lineWidth = 4;  
    if (isdead === true){
        ctx.strokeStyle = 'red';
    }else{
        ctx.strokeStyle = '#1F51FF';
    }
    ctx.strokeRect(x_po, y_poz, 150, 50);  
    ctx.fill(button2);
   
    ctx.font = '25pt Arial';
    ctx.fillStyle = 'white'
    ctx.textAlign = "center";
    ctx.fillText("./mute", x_po+70, y_poz+40);
    ctx.lineWidth = 7;  

    // Listen for mouse moves
    canvas.addEventListener('click', function(event) {
    // Check whether point is inside circle
    if (ctx.isPointInPath(button2, event.offsetX, event.offsetY) && show !== false) {
        console.log("Mute")
        music = false
        stopMusic()
    }
    });
}

function Volume_button_play(){
    var x_po = 420
    var y_poz = 400
    // Create circle
    const ctx = canvas.getContext('2d');
    const button2 = new Path2D();
    button2.rect(x_po, y_poz, 150, 50);
    ctx.fillStyle = 'black';
    ctx.lineWidth = 4;  
    if (isdead === true){
        ctx.strokeStyle = 'red';
    }else{
        ctx.strokeStyle = '#1F51FF';
    }
    ctx.strokeRect(x_po, y_poz, 150, 50);  
    ctx.fill(button2);
   
    ctx.font = '22pt Arial';
    ctx.fillStyle = 'white'
    ctx.textAlign = "center";
    ctx.fillText("./music_on", x_po+75, y_poz+40);
    ctx.lineWidth = 7;  

    // Listen for mouse moves
    canvas.addEventListener('click', function(event) {
    // Check whether point is inside circle
    if (ctx.isPointInPath(button2, event.offsetX, event.offsetY) && show !== false) {
        console.log("Play Music")
        music = true
        playMusic()
    }
    });
}

function Info_button(){
    var x_po = 420
    var y_poz = 330
    // Create circle
    const ctx = canvas.getContext('2d');
    const button2 = new Path2D();
    button2.rect(x_po, y_poz, 150, 50);
    ctx.fillStyle = 'black';
    ctx.lineWidth = 4;  
    if (isdead == true){
        ctx.strokeStyle = 'red';
    }else{
        ctx.strokeStyle = '#1F51FF';
    }
    ctx.strokeRect(x_po, y_poz, 150, 50);  
    ctx.fill(button2);
   
    ctx.font = '25pt Arial';
    ctx.fillStyle = 'white'
    ctx.textAlign = "center";
    ctx.fillText("./info", x_po+70, y_poz+40);
    ctx.lineWidth = 7;  

    // Listen for mouse moves
    canvas.addEventListener('click', function(event) {
    // Check whether point is inside circle
    if (ctx.isPointInPath(button2, event.offsetX, event.offsetY) && show !== false) {
        console.log("info")
        ctx.font = '25pt Arial';
        ctx.fillStyle = 'white'
        ctx.textAlign = "center";
        ctx.fillText("To move use W A S D", x_po+70, y_poz+100);
        ctx.fillText("To use upgrade push SPACE", x_po+70, y_poz+140);

    }
    });
}
function next_level(){
    canvas.width =  1024
    canvas.height = 576
    if (show == true){
        var x_po = 420
        var y_poz = 190
        const ctx = canvas.getContext('2d');
        const button1 = new Path2D();

        button1.rect(x_po, y_poz, 150, 50);
        //ctx.fillStyle = 'red';
        ctx.lineWidth = 4; 
        if (isdead == true){
            ctx.strokeStyle = 'blue';
        }else{
            ctx.strokeStyle = '#1F51FF';
        }       
        ctx.strokeRect(x_po, y_poz, 150, 50);   

        ctx.fill(button1);
    
        ctx.fillStyle = 'white';
        ctx.font = '20pt Arial';
        ctx.textAlign = "center";
        ctx.fillText("./next_level", x_po+75, y_poz+35);
        ctx.lineWidth = 7; 
        // Listen for mouse moves
        canvas.addEventListener('click', function(event) {
        // Check whether point is inside circle
        if (ctx.isPointInPath(button1, event.offsetX, event.offsetY) && show !== false) {
            console.log("Start")
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            show = false
            gameloop = true 
            document.getElementById("canvas").style.border = "none";
            if(music === true){
                playMusic()
            }
            Game()
        }
        });
    }
}




