class Tomato{
  constructor(x){
    this.x = x
    this.y = 500
    this.width = 30
    this.height = 30
    this.speed = 2  
  }
  draw(){
    this.y -= this.speed
    image(game.tomatoImage, this.x, this.y, this.width, this.height)
    if(this.y <= 0){
      gameOver = true
    }
  }
}