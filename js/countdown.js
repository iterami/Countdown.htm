function add(time){
    if(!running){
        return;
    }

    document.getElementById('countdown').innerHTML =
      parseInt(document.getElementById('countdown').innerHTML)
      + time;
}

function countdown(){
    document.getElementById('countdown').innerHTML =
      parseInt(document.getElementById('countdown').innerHTML)
      - 1;
    document.getElementById('score').innerHTML =
      parseInt(document.getElementById('score').innerHTML)
      + 1;

    if(document.getElementById('countdown').innerHTML < 1){
        running = false;
        window.clearInterval(interval);
    }
}

var interval = window.setInterval(
  'countdown()',
  1000
);
var running = true;
