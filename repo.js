'use strict';

function add(event){
    if(core_intervals.countdown.paused
      || core_storage_data.countdown <= 0){
        return;
    }

    event.target.blur();
    core_storage_data.countdown += core_storage_data.added;
    core_storage_update();
}

function interval(){
    if(core_storage_data.countdown <= 0){
        core_interval_lock('countdown');
        return;
    }

    core_storage_data.countdown -= 1;
    core_storage_data.score += 1;

    core_storage_update();
}

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': core_storage_save,
      },
      'events': {
        'add': {
          'onclick': add,
        },
        'start': {
          'onclick': start,
        },
      },
      'info': '<button class=medium id=start type=button>Start New Game</button>',
      'storage': {
        'added': 100,
        'countdown': 10,
        'interval': 1000,
        'score': 0,
      },
      'storage_menu': '<table><tr><td><input class=mini id=added min=1 step=1 type=number><td>Add'
        + '<tr><td><input class=mini id=interval min=1 step=1 type=number><td>Interval</table>',
      'title': 'Countdown.htm',
    });

    start(true);
}

function start(init){
    if(init !== true){
        if(!globalThis.confirm('Start new game?')){
            return;
        }

        core_storage_data.countdown = 10;
        core_storage_data.score = 0;
        core_escape(false);
    }

    core_storage_update();
    document.getElementById('add').textContent = '+' + core_storage_data.added;

    core_interval_modify({
      'id': 'countdown',
      'interval': core_storage_data.interval,
      'todo': interval,
    });
}
