videojs.plugin('mtSTW', function () {
    let player = this;
    player.on('loadedmetadata', function(){
      console.log('still watching');
    });
});
