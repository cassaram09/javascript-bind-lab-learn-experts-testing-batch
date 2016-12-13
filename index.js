const app = "I don't do much.";

var digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function(){
    setInterval(function() { this.time++ }.bind(this), 1000)
  }
}

function censor(word, string){
  var match = new RegExp(word, 'gi');
  return string.replace(match, 'BLEEP');
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
