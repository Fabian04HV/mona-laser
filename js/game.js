let gameOver = false
let scoreText = document.querySelector(".score")
let textFeedback = document.getElementById("textFeedback")
class Game{
  constructor(){
    this.playerImage
    this.tomatoImage
    this.backgroundImage
    this.player = new Player()
    this.bullets = []
    this.tomatoes = []
    this.score = 0
    this.bgMusic
  }
  preload(){
    this.playerImage = loadImage("images/mona-lisa.png")
    this.tomatoImage = loadImage("images/tomato.png")
    this.backgroundImage = loadImage("images/louvre-hall.png")
    this.bgMusic = loadSound("fur-elise.mp3")
  }
  draw(){
    if(gameOver){
      textFeedback.innerText = "GAME OVER! Press CTRL + R to restart game"
      textFeedback.style.color = "red"
      noLoop()
    }
    background(this.backgroundImage)
    this.player.draw()
    this.bullets.forEach(bullet => {
      bullet.draw()
      
      game.tomatoes.forEach(function(tomato){
        if(bullet.collision(tomato)){
          game.score++
          game.updateScore()
          console.log(game.score)
          game.tomatoes.splice(game.tomatoes.indexOf(tomato), 1)
          game.bullets.splice(game.bullets.indexOf(bullet), 1)
        }
      })

    })
    this.tomatoes.forEach(tomato => {
      tomato.draw()
    })
  }
  spawnTomatoes(){
    let intervalId = setInterval(function(){
      let randX = Math.floor(Math.random() * 500)
      let tomato = new Tomato(randX)
      game.tomatoes.push(tomato)
    }, 750)
  }
  updateScore(){
    scoreText.innerText = this.score
  }
}