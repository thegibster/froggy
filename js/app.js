// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = 0;
    this.y = 60;
    this.sprite = 'images/enemy-bug.png';
    this.speed_x=0;
};
var loss = -1;
var win = 0;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x >= 450) {
        this.x = 0;
    } else {
        this.x += this.speed_x * dt;
    }

    document.getElementById("Loss").innerHTML = 'Losses: ' + loss;

};
Enemy.prototype.handleInput = function(dt) {


};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';

};

Player.prototype.update = function(dt) {
    document.getElementById("Wins").innerHTML = 'Wins: ' + win;
    if (this.y <= 30) {
        win += 1;
        alert('You Reahced the water');

        // or reset method could go here
        this.x = 200;
        this.y = 400;
        gem.y = 300;

    }

};
Player.prototype.handleInput = function(dt) {

    switch (dt) {

        case 'up':
            if (this.y > 0) {
                if (this.y === 0) {
                    alert('Congrats you have won');
                    reset();

                } else {
                    {
                        this.y -= 83;
                    }
                }
            }
            break;
        case 'down':
            if (this.y < 400) {
                this.y += 83;
            }
            break;

        case 'left':
            if (this.x > 0) {
                this.x -= 107;
            }
            break;
        case 'right':
            if (this.x < 400) {
                this.x += 107;
            }
            break;
        default:
            break;


    }
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var Gem = function() {
    this.x = 0;
    this.y = 300;
    this.sprite = 'images/Gem Blue.png';
    this.i = 0;

};

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Gem.prototype.update = function() {

    document.getElementById("Points").innerHTML = 'Gems Collected: ' + this.i;


};
var allEnemies = [];
var length =3;
for (var i = 0; i< length; i++){
    allEnemies.push(new Enemy());
}
allEnemies[1].x = 0;
allEnemies[1].y = 140;
allEnemies[2].x = 0;
allEnemies[2].y = 225;
allEnemies[0].speed_x = 75;
allEnemies[1].speed_x = 120;
allEnemies[2].speed_x = 95;
var player = new Player();
var gem = new Gem();




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

    // console.log(e.keyCode);
    console.log(player.x, player.y);
    // console.log(allEnemies[0].x,allEnemies[0].y);
    console.log(gem.x, gem.y);
});