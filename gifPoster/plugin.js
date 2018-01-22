videojs.plugin('gifPoster', function(options){
  var player = this;
  player.one('loadstart', function(){
    var vjsPoster = document.getElementsByClassName('vjs-poster')[0];
    vjsPoster.style = '';
    var gifImg = document.createElement('img');
    gifImg.style = options.style;
    gifImg.src = options.src;
    vjsPoster.appendChild(gifImg);
  });
});
