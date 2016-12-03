const app = "I don't do much.";

var digitalClock = {
  time: new Date().getSeconds(),
  startTicking: function(time){
    this.time = time + 1;
  }.bind(this)
}