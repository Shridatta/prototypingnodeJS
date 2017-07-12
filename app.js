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