function Gun(imageSrc, x, y, width, height) {
    this.image = new Image();
    this.load = function () {
        let _this = this;
        this.image.onload = () =>{
            _this.draw();
        };
        this.image.src = imageSrc;
    }
    this.image.src = imageSrc;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = document.getElementById('myCanvas').getContext('2d');
    this.draw = function () {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
}