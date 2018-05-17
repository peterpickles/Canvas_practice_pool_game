function Canvas2D(){
    this_canvas = document.getElementById('screen');
    this_canvasContext = this._canvas.getContext('2d');
}

Canvas2D.prototype.clear = function(){
    this.canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);

}

Canvas2D.prototype.drawImage = function(image, position){
    this.canvasContext.drawImage(image, position.x, position.y);
}