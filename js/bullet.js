class Bullet{
  constructor(x, y){
    this.x = x
    this.y = y
    this.width = 10
    this.height = 30
    this.speed = 5
  }
  draw(){
    this.y += this.speed

    fill("#ff0831")
    stroke("darkred")
    strokeWeight(3)
    rect(this.x, this.y, this.width, this.height)

  }
  collision(targetInfo){
    let bulletY = this.y + this.height / 2
    let bulletX = this.x + this.width / 2
     
    let targetX = targetInfo.x + targetInfo.width / 2
    let targetY = targetInfo.y + targetInfo.height / 2

    let distance = dist(bulletX, bulletY, targetX, targetY)

    if(distance <= 40){
      console.log("collision")
      return true
    }
    return false
  }
}