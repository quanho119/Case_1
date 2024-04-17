let money = 0;
let numberOfBullet = 3;
document.getElementById("money").innerHTML = "Money: " + money;
document.getElementById("number").innerHTML = "Bullet: " + numberOfBullet;
let bullet;
let gun;
let bird;
function gameImg() {
    bullet = new Bullets("image/bullet.png", 400, 400,50,50);
    bullet.ctx = document.getElementById('myCanvas').getContext('2d');
    gun = new Gun("image/gun.png", 400, 400,50,50);
    gun.ctx = document.getElementById('myCanvas').getContext('2d');
    bird = new Bird("image/birdLeft.png", 100, 100,100,100);
    bird.ctx = document.getElementById('myCanvas').getContext('2d');
    bullet.load();
    gun.load();
    this.drawObjects = function()
    {
        gun.load();
        bird.load();
    }
}
let game = new gameImg();
game.drawObjects();
function Col(ob1, ob2) {
    return ob1.x < ob2.x + ob2.width &&
        ob1.x + ob1.width > ob2.x &&
        ob1.y < ob2.y + ob2.height &&
        ob1.y + ob1.height > ob2.y;
}
function buyBullet()
{
    if(money>=5)
    {
        money-=5;
        numberOfBullet++;
    }
    else
        alert("Not enough money");
    document.getElementById("money").innerHTML = "Money: " + money;
    document.getElementById("number").innerHTML = "Bullet: " + numberOfBullet;
}
// window.addEventListener('keydown',gun.Run());
function up() {
    bird.ctx.clearRect(0, 0, bird.ctx.canvas.width, bird.ctx.canvas.height);
    bird.draw();
    bird.Move();
    gun.draw();
    requestAnimationFrame(up);
}
up();

function shot() {
    if (numberOfBullet == 0) {
        alert("Run out of bullets");
        return;
    }
    numberOfBullet--;
    document.getElementById("number").innerHTML = "Bullet: " + numberOfBullet;
    bullet.x = gun.x;
    bullet.y = gun.y;
    bullet.load();
    bullet.draw();
    let nonstop = true;
    function update() {
        console.log(bullet)
        if (nonstop) {
            bullet.ctx.clearRect(0, 0, bullet.width, bullet.height);
            bullet.moveUp();
            bullet.draw();
            requestAnimationFrame(update);
            if (bullet.y <= 0) {
                bullet.Reset(gun);
                nonstop = false;
            }
            if (Col(bullet, bird)) {
                money += 10;
                bullet.Reset(gun);
                bird.Reset();
                nonstop = false;
                document.getElementById("money").innerHTML = "Money: " + money;
            }
        }
    }

    update();
}