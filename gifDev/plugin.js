videojs.plugin('gifDev',function(options){
	var player = this;
	player.one('loadstart',function(){
		var poster = $('.vjs-poster');
		poster.style = '';
		var gifImg = document.createElement('img');
		gifImg.style = options.style;
		gifImg.src = options.src;
		poster.append(gifImg);
	});
});
