'use strict';

function repo_init(){
    core_repo_init({
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

    window.clearInterval(interval);
    interval = window.setInterval(
      countdown,
      1000
    );
    running = true;
}
