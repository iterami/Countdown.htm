'use strict';

function add(time){
    var countdown = parseInt(
      document.getElementById('countdown').innerHTML,
      10
    );

    if(!running
      || countdown <= 0){
        return;
    }

    document.getElementById('countdown').innerHTML = countdown + time;
}

function countdown(){
    var countdown = parseInt(
      document.getElementById('countdown').innerHTML,
      10
    ) - 1;

    if(countdown < 0){
        running = false;
        window.clearInterval(interval);
        return;
    }

    var score = parseInt(
      document.getElementById('score').innerHTML,
      10
    ) + 1;

    document.getElementById('countdown').innerHTML = countdown;
    document.getElementById('score').innerHTML = score;

    window.localStorage.setItem(
      'Countdown.htm-countdown',
      countdown
    );
    window.localStorage.setItem(
      'Countdown.htm-score',
      score
    );
}

function reset(){
    if(!window.confirm('Reset?')){
        return;
    }

    var ids = {
      'countdown': 10,
      'score': 0,
    };
    for(var id in ids){
      document.getElementById(id).innerHTML = ids[id];
      window.localStorage.removeItem('Countdown.htm-' + id);
    }

    window.clearInterval(interval);
    interval = window.setInterval(
      countdown,
      1000
    );
    running = true;
}

var interval = 0;
var running = true;

window.onload = function(e){
    var ids = {
      'countdown': 10,
      'score': 0,
    };
    for(var id in ids){
        document.getElementById(id).innerHTML =
          window.localStorage.getItem('Countdown.htm-' + id)
          || ids[id];
    }

    interval = window.setInterval(
      countdown,
      1000
    );
};
