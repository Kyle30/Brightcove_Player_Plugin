videojs.plugin('adCountDownTimer', function(){
	var player = this;
	var timeRemaining;
	var countdownTimer;
	player.on('ads-ad-started', function(){
		document.getElementById('ad-overlay').style.fontSize = '0.8em';
		document.getElementById('ad-overlay').style.color = 'black';
		document.getElementById('ad-overlay').style.zIndex = 999;
		countdownTimer = setInterval(function (){
			timeRemaining = player.ima3.adsManager.getRemainingTime();
			var ceilTime = Math.ceil(timeRemaining);
			document.getElementById('timeRemaining').innerHTML = ceilTime;
			console.log('剩餘時間: ' +　timeRemaining);
		}, 1000);
	});
	player.on('ads-ad-ended', function(){
		document.getElementById('ad-overlay').style.zIndex = -10;
		clearInterval(countdownTimer);
	});
})