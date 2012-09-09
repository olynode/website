define(['jquery','mods/configuration', 'facebook-sdk'], function($, config){
    var f = {};

    f.options = {
        appId: config.facebookAppId,
        cookie: true,
        status: true,
        xfbml: true,
        oauth: true,
        reloadIfSessionStateChanged: true
    };

    f.setup = function(){
        window.fbAsyncInit = function(){
            window.FB.init(f.options);
        };
    };

    return f;
});