function add(time){
    if(!running
      || parseInt(document.getElementById('countdown').innerHTML) <= 0){
        return;
    }

    document.getElementById('countdown').innerHTML =
      parseInt(document.getElementById('countdown').innerHTML)
      + time;
}

function countdown(){
    var countdownvalue = parseInt(document.getElementById('countdown').innerHTML);

    if(countdownvalue < 1){
        running = false;
        window.clearInterval(interval);
        return;
    }

    document.getElementById('countdown').innerHTML =
      countdownvalue
      - 1;
    document.getElementById('score').innerHTML =
      parseInt(document.getElementById('score').innerHTML)
      + 1;

    window.localStorage.setItem(
      'Countdown.htm-countdown',
      document.getElementById('countdown').innerHTML
    );
    window.localStorage.setItem(
      'Countdown.htm-score',
      document.getElementById('score').innerHTML
    );
}

function reset(){
    if(!window.confirm('Reset?')){
        return;
    }

    document.getElementById('countdown').innerHTML = 10;
    document.getElementById('score').innerHTML = 0;

    window.localStorage.removeItem('Countdown.htm-countdown');
    window.localStorage.removeItem('Countdown.htm-score');

    window.clearInterval(interval);
    interval = window.setInterval(
      'countdown()',
      1000
    );
    running = true;
}

var interval = 0;
var running = true;

window.onload = function(e){
    document.getElementById('countdown').innerHTML =
      window.localStorage.getItem('Countdown.htm-countdown')
      || 10;
    document.getElementById('score').innerHTML =
      window.localStorage.getItem('Countdown.htm-score')
      || 0;

    interval = window.setInterval(
      'countdown()',
      1000
    );
};
