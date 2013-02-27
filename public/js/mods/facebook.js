/*jshint node:false */
/*globals require */

'use strict';

define(['jquery','mods/configuration'], function($, config){
    var f = {};
    f.setup = function(){
        FB.init({
            appId: config.facebookAppId,
            cookie: true,
            status: true,
            xfbml: true,
            oauth: true
        });
    };

    return f;
});