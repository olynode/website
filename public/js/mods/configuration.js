define(['jquery'], function($){
    var c = {};

    c.facebookAppId = $('meta[name="fb:app_id"]').attr("content");

    return c;
});