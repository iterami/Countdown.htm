'use strict';

function add(time){
    if(!running
      || left <= 0){
        return;
    }

    left += time;
    document.getElementById('countdown').innerHTML = left;
}

function countdown(){
    left -= 1;

    if(left < 0){
        running = false;
        window.clearInterval(interval);
        return;
    }

    score += 1;

    document.getElementById('countdown').innerHTML = left;
    document.getElementById('score').innerHTML = score;

    window.localStorage.setItem(
      'Countdown.htm-countdown',
      left
    );
    window.localStorage.setItem(
      'Countdown.htm-score',
      score
    );
}

function repo_init(){
    core_repo_init({
      'title': 'Countdown.htm',
    });

    left = parseInt(window.localStorage.getItem('Countdown.htm-countdown')) || 10;
    score = parseInt(window.localStorage.getItem('Countdown.htm-score')) || 0;

    document.getElementById('add').onclick = function(){
        add(100);
    };
    document.getElementById('reset').onclick = reset;

    start();
}

function reset(){
    if(!window.confirm('Reset?')){
        return;
    }

    left = 10;
    score = 0;

    window.localStorage.removeItem('Countdown.htm-countdown');
    window.localStorage.removeItem('Countdown.htm-score');

    start();
}

function start(){
    document.getElementById('countdown').innerHTML = left;
    document.getElementById('score').innerHTML = score;

    window.clearInterval(interval);
    interval = window.setInterval(
      countdown,
      1000
    );
    running = true;
}

var interval = 0;
var left = 10;
var running = true;
var score = 0;
