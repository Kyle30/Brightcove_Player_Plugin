videojs.plugin('adCountDownTimer', function(){
	var player = this;
	var timeRemaining;
	var countdownTimer;
	player.on('ads-ad-started', function(){
		document.getElementById('ad-overlay').style.fontSize = '1.2em';
		document.getElementById('ad-overlay').style.color = 'black';
		document.getElementById('ad-overlay').style.zIndex = 999;
		document.getElementById('ad-overlay').style.fontWeight = 600;
		countdownTimer = setInterval(function (){
			timeRemaining = player.ima3.adsManager.getRemainingTime();
			document.getElementById('timeRemaining').innerHTML = Math.round(timeRemaining);
		}, 300);
	});
	player.on('ads-ad-ended', function(){
		document.getElementById('ad-overlay').style.zIndex = -10;
		clearInterval(countdownTimer);
	});
})
