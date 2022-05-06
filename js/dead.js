
function dead(){
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
    }


    //document.getElementById("canvas").style.border = "5px solid red";

}