let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback) {
  if (assetsStillLoading) {
    requestAnimationFrame(assetsLoadingLoop.bing(this, callback));
  } else {
    callback();
  }
}

//
function loadAssets(callback) {
  function loadSprites(fileName) {
    assetsStillLoading++;

    let spriteImage = new Image();
    spriteImage.src = "./assets/sprites/" + fileName;

    sprite.onload = function() {
      assetsStillLoading--;
    };

    return spriteImage;
  }
  sprintes.background = loadSprites("spr_background.png");
}

getThatBall();
