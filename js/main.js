const game = new Game()
let lastShot = 300

function preload(){
  game.preload()
}
function setup(){
  createCanvas(600, 600)
  game.spawnTomatoes()
}
function draw(){
  lastShot++
  game.draw()
}
function keyPressed(){
  if(keyCode == 32 && lastShot >= 30){
    lastShot = 0
    const bullet = new Bullet(game.player.x + game.player.width / 2 - 5, game.player.y + 20)
    game.bullets.push(bullet)
  }
}