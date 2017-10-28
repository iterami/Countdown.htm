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
    if(core_storage_data['countdown'] <= 0){
        core_interval_pause_all();
        running = false;
        return;
    }

    core_storage_data['countdown'] -= 1;
    core_storage_data['score'] += 1;

    core_storage_update();
}
