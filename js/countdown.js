function add100(){
    if(running){
        document.getElementById('countdown').innerHTML =
          parseInt(document.getElementById('countdown').innerHTML)
          + 100;
    }
}

function countdown(){
    document.getElementById('countdown').innerHTML =
      parseInt(document.getElementById('countdown').innerHTML)
      - 1;
    document.getElementById('score').innerHTML =
      parseInt(document.getElementById('score').innerHTML)
      + 1;

    if(document.getElementById('countdown').innerHTML < 1){
        clearInterval(interval);
        running = false;
        document.getElementById('lose-message-hidden').style.display = 'block';
    }
}

var interval = setInterval(
  'countdown()',
  1000
);
var running = true;
