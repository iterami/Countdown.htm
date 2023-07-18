'use strict';

function add(time){
    if(!running
      || core_storage_data['countdown'] <= 0){
        return;
    }

    core_storage_data['countdown'] += time;
    document.getElementById('countdown').textContent = core_storage_data['countdown'];
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

function repo_init(){
    core_repo_init({
      'events': {
        'add': {
          'onclick': function(){
              add(100);
          },
        },
      },
      'globals': {
        'running': true,
      },
      'storage': {
        'countdown': 10,
        'score': 0,
      },
      'title': 'Countdown.htm',
    });

    core_storage_update();

    core_interval_modify({
      'id': 'countdown',
      'interval': 1000,
      'todo': countdown,
    });
}
