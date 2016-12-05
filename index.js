const app = "I don't do much.";

var digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function(){
    setInterval(function() { this.time++ }.bind(this), 1000)
  }
}

function censor(word, string){
  return string.replace(word, 'BLEEP');
}

function violenceCensor(){

}

function drugsCensor(){
  
}