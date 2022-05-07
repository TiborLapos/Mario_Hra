
function win(){
    gameloop = false
    show = true
    c.clearRect(0, 0, c.canvas.width, c.canvas.height)
    next_level()
    Volume_button()
    c.fillStyle = 'yellow';
    c.font = '60pt Arial';
    c.textAlign = "center";
    c.fillText("You Win", 480, 150);
    score = 0



}