function Bullets(imageSrc, x, y, width, height) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = document.getElementById('myCanvas').getContext('2d');
    this.draw = function () {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
    this.load = function () {
        let _this = this;
        this.image.onload = () =>{
            _this.draw();
        };
        this.image.src = imageSrc;
    }
    this.moveUp = function() {
        this.y -= 5;
    };
    this.Reset=function(ob)
    {
        this.x=ob.x;
        this.y=ob.y;
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}