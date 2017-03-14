# Geo-Filtering Messaging



## Javascript
[Plugin.js](https://raw.githubusercontent.com/Kyle30/Brightcove_Plugin/master/geoFilteringMessaging/plugin.js)

## Name, Options( JSON )
geoFilteringMessaging  
```
{
  "code": "CLIENT_GEO",
  "headline": "因版權限制，僅可於台灣地區觀看"
}
```


## Deverlopment
HTML
```HTML
<video id="myPlayerID" data-video-id="video_id" data-account="account_id" data-player="player_id" data-embed="default" data-application-id class="video-js" controls style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></video>
<script src="//players.brightcove.net/{{account_id}}/{{player_id}}_default/index.min.js"></script>
<script>
  videojs('myPlayerID').on('bc-catalog-error', function() {
    var myPlayer = this,
        specificError;
    if (typeof(myPlayer.catalog.error) !== 'undefined') {
      specificError = myPlayer.catalog.error.data[0];
      if (specificError !== 'undefined' & specificError.error_subcode == "CLIENT_GEO") {
        myPlayer.error({
          'code': 'CLIENT_GEO',
          'headline': "因版權限制，僅可於台灣地區觀看"
        });
      };
    };
  });
</script>
```
Javascript
```Javascript
videojs.plugin('geoFilteringMessaging', function (options) {
    var player = this;
    player.on('bc-catalog-error', function () {
        var specificError;
        if (typeof (player.catalog.error) !== 'undefined') {
            specificError = player.catalog.error.data[0];
            if (specificError !== 'undefined' & specificError.error_subcode == "CLIENT_GEO") {
                player.error({
                    code: options.code,
                    headline: options.headline
                });
            };
        };
    });
});
```
