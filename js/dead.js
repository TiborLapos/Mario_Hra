
function dead(){
    dead_count += 1
    gameloop = false
    show = true
    isdead = true
    c.clearRect(0, 0, c.canvas.width, c.canvas.height)
    Start_button()
    Volume_button()
    if(isdead == true){
        c.fillStyle = 'red';
        c.font = '60pt Arial';
        c.textAlign = "center";
        c.fillText("You died", 480, 150);
        c.fillStyle = 'red';
        c.font = '30pt Arial';
        c.fillText("Score: "+score, 480, 400);
        c.fillText("Death counter: "+dead_count, 480, 460);
    }
    score = 0


    //document.getElementById("canvas").style.border = "5px solid red";

}