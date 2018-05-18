console.log("conntected!");

function Canvas2D(){
    this._canvas = document.getElementById("screen");
    this._canvasContext = this._canvas.getContext("2d");
}

Canvas2D.prototype.clear = function(){
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

Canvas2D.prototype.drawImage = function(image, position){
    this._canvasContext.drawImage(image, position.x, position.y);
}

let Canvas = new Canvas2D();

//Test if assets are showing up in canvas
let image = new Image();
image.src = "./assets/sprites/spr_background.png";
Canvas.drawImage(image, { x: 0, y: 0 });

set
