'use strict';

function add(time){
    if(!running
      || core_storage_data['countdown'] <= 0){
        return;
    }

    core_storage_data['countdown'] += time;
    document.getElementById('countdown').innerHTML = core_storage_data['countdown'];
}

function countdown(){
    core_storage_data['countdown'] -= 1;

    if(core_storage_data['countdown'] < 0){
        running = false;
        window.clearInterval(interval);
        return;
    }

    core_storage_data['score'] += 1;

    core_storage_update();
}

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': core_storage_save,
      },
      'storage': {
        'countdown': 10,
        'score': 0,
      },
      'title': 'Countdown.htm',
    });

    core_storage_update();

    document.getElementById('add').onclick = function(){
        add(100);
    };
    document.getElementById('reset').onclick = core_storage_reset;

    window.clearInterval(interval);
    interval = window.setInterval(
      countdown,
      1000
    );
    running = true;
}

var interval = 0;
var running = true;
