videojs.plugin('geoFilteringMessaging', function (options) {
    var player = this;
    player.one('bc-catalog-error', function () {
        var specificError;
        if (typeof (player.catalog.error) !== 'undefined') {
            specificError = player.catalog.error.data[0];
            if (specificError !== 'undefined' & specificError.error_subcode == "CLIENT_GEO") {
                player.error({
                    code: options.code,
                    'headline': options.headline;
                });
            };
        };
    });
});
