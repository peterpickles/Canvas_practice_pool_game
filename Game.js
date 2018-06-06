function Game() { }

Game.prototype.init = function () {
  this.gameWorld = new GameWorld();
};

Game.prototype.start = function () {
  this.init();
  this.mainLoop();

};

Game.prototype.mainLoop = function () {
  Canvas.clear();
  PoolGame.gameWorld();
  PoolGame.gameWorld.draw();
  requestAnimationFrame(PoolGame.mainLoop);
};

let PoolGame = new Game() {

};