'use strict';

function repo_init(){
    core_repo_init({
      'globals': {
        'interval': 0,
        'running': true,
      },
      'info-events': {
        'add': {
          'todo': function(){
              add(100);
          },
        },
      },
      'storage': {
        'countdown': 10,
        'score': 0,
      },
      'title': 'Countdown.htm',
    });

    core_storage_update();

    window.clearInterval(interval);
    interval = window.setInterval(
      countdown,
      1000
    );
    running = true;
}
