videojs.plugin('stillWatching', function () {
    let player = this;
    let timeCheckPoint = 0;
    player.on('timeupdate', function () {
        if (player.currentTime() - timeCheckPoint >= 5) {
            player.pause();
            timeCheckPoint = player.currentTime();
        }
    });
});
