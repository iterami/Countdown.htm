'use strict';

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
