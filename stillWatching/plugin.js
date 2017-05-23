videojs.plugin('stillWatching', function () {
    var player = this;
    var timeCheckPoint = 0;
    player.on('timeupdate', function () {
        if (player.currentTime() - timeCheckPoint >= 60) {
            player.pause();
            timeCheckPoint = player.currentTime();
            player.overlay({
                overlays: [{
                    start: timeCheckPoint,
                    end: 'playing',
                    align: 'top',
                    content: "Click this message if you are still watching."
                }]
            });
            var overlayContainer = document.getElementsByClassName('vjs-overlay')[0];
            overlayContainer.onclick = function () {
                player.play();
            };
        }
    });
});
