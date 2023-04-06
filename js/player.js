class Player{
  constructor(){
    this.x = 250
    this.y = 50
    this.width = 100
    this.height = 100
    this.speed = 10
  }
  draw(){
    this.movement()
    image(game.playerImage, this.x, this.y, this.width, this.height)
  }
  movement(){
    if(keyIsDown(DOWN_ARROW) && this.y <= 500){
      this.y += this.speed
    }
    if(keyIsDown(UP_ARROW) && this.y >= 0){
      this.y -= this.speed
    }
    if(keyIsDown(LEFT_ARROW) && this.x >= -30){
      this.x -= this.speed
    }
    if(keyIsDown(RIGHT_ARROW) && this.x <= 520){
      this.x += this.speed
    }
  }
}