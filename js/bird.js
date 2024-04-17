function Bird(imageSrc, x, y, width, height) {
    this.image = new Image();
    this.draw = function () {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    this.load = function () {
        let _this = this;
        this.image.onload = () =>{
            _this.draw();
        };
        this.image.src = imageSrc;
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direction = 'right';
    this.ctx = document.getElementById('myCanvas').getContext('2d');
    this.Move = function () {
        if (this.x >= this.ctx.canvas.width - this.width) {
            this.direction = 'left';
            this.image = flipImage(this.image);
        }
        if (this.x <= 0) {
            this.direction = 'right';
            this.image = flipImage(this.image);
        }
        switch (this.direction) {
            case 'right':
                this.x += 2;
                break;
            case 'left':
                this.x -= 2;
                break;
        }
    }
    function flipImage(image) {
        let canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        let ctx = canvas.getContext('2d');
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(image, 0, 0);
        return canvas;
    }
    this.Reset = function () {
        this.x = Math.floor(Math.random()*100)+1;
        this.y = Math.floor(Math.random()*100)+1;
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}