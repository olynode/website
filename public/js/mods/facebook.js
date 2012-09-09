define(['jquery','mods/configuration'], function($, config){
    var f = {};

    f.options = {
        appId: config.facebookAppId,
        channelUrl: '//olynode.org/channel',
        cookie: true,
        status: true,
        xfbml: true,
        oauth: true
    };

    window.fbAsyncInit = function(){
        console.log('wtf');
        FB.init(f.options);
        FB.getLoginStatus();
    };
});