require.config({
	baseUrl: '/js/',
    paths:{
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
        'bootstrap': "libs/bootstrap.min",
        'carousel': 'libs/bootstrap-carousel',
        'facebook-sdk': 'http://connect.facebook.net/en_US/all'
    },
    shim:{
        'bootstrap':{ deps:['jquery'], exports: 'jquery' },
        'carousel':{ deps:['jquery', 'carousel'], exports: 'jquery' }
    }
});

require(['jquery','mods/facebook', 'bootstrap', 'carousel'], function($, facebook){

    facebook.setup();

    $('#meetings').carousel('pause');
    $('#sponsors').carousel();

});