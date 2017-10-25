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
        'interval': 0,
        'running': true,
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
