videojs.plugin('stillWatching', function () {
    let player = this;
    player.on('loadedmetadata', function(){
      console.log('still watching');
      let t = player.currentTime();
      console.log(t);
    });
});
