videojs.plugin('gifPoster',function(options){
	var player = this;
	player.one('loadstart',function(){
		var vjsPoster = document.getElementsByClassName('vjs-poster');
// 		remove - Original Poster
		vjsPoster.style = '';
// 		append - new Poster
		var gifImg = document.createElement('img');
		gifImg.style = options.style;
		gifImg.src = options.src;
		vjsPoster.appendChild(gifImg);
	});
});
