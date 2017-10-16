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

var interval = 0;
var running = true;
