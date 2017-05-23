videojs.plugin('stillWatching', function () {
    var player = this;
    player.on('loadedmetadata', function(){
      console.log('still watching');
      var t = player.currentTime();
      console.log(t);
    });
});
