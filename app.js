function User()
{
    this.name = "";
    this.life = 100;
    this.givelife = function givelife(targetplayer) {
        targetplayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetplayer.name);
    }
}

var shridatta = new User();
var batman = new User();
shridatta.name="Shridatta";
batman.name="Batman";

shridatta.givelife(batman);
console.log("Shridatta = " + shridatta.life);
console.log("Batman = " + batman.life);

User.prototype.uppercut = function uppercut (targetplayer) {
    targetplayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetplayer.name);
};
batman.uppercut(shridatta);
console.log("Shridatta = " + shridatta.life);
console.log("Batman = " + batman.life);
