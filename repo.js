'use strict';

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': core_storage_save,
      },
      'events': {
        'add': {
          'onclick': function(){
              if(core_intervals.countdown.paused
                || core_storage_data.countdown <= 0){
                  return;
              }

              core_storage_data.countdown += core_storage_data.added;
              core_storage_update();
          },
        },
      },
      'storage': {
        'added': 100,
        'countdown': 10,
        'interval': 1000,
        'score': 0,
      },
      'storage-menu': '<table><tr><td><input class=mini id=added min=1 step=1 type=number><td>Add'
        + '<tr><td><input class=mini id=interval min=1 step=1 type=number><td>Interval</table>',
      'title': 'Countdown.htm',
    });

    core_storage_update();
    document.getElementById('add').textContent = '+' + core_storage_data.added;

    core_interval_modify({
      'id': 'countdown',
      'interval': core_storage_data.interval,
      'todo': function(){
          if(core_storage_data.countdown <= 0){
              core_interval_pause_all();
              return;
          }

          core_storage_data.countdown -= 1;
          core_storage_data.score += 1;

          core_storage_update();
      },
    });
}
