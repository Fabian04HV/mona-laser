let gameOver = false
let scoreText = document.querySelector(".score")

class Game{
  constructor(){
    this.playerImage
    this.tomatoImage
    this.player = new Player()
    this.bullets = []
    this.tomatoes = []
    this.score = 0
  }
  preload(){
    this.playerImage = loadImage("../images/mona-lisa.png")
    this.tomatoImage = loadImage("../images/tomato.png")
  }
  draw(){
    if(gameOver){
      noLoop()
    }
    background("#ffffff")
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
    }, 1000)
  }
  updateScore(){
    scoreText.innerText = this.score
  }
}