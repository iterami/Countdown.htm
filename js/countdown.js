'use strict';

function add(time){
    var countdown = parseInt(document.getElementById('countdown').innerHTML);

    if(!running
      || countdown <= 0){
        return;
    }

    document.getElementById('countdown').innerHTML = countdown + time;
}

function countdown(){
    var countdown = parseInt(document.getElementById('countdown').innerHTML) - 1;

    if(countdown < 0){
        running = false;
        window.clearInterval(interval);
        return;
    }

    var score = parseInt(document.getElementById('score').innerHTML) + 1;

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
