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
        'carousel':{ deps:['jquery', 'bootstrap'], exports: 'jquery' }
    }
});

require(['jquery','mods/facebook', 'bootstrap', 'carousel', 'facebook-sdk'], function($){

    $('#meetings').carousel('pause');
    $('#sponsors').carousel();

});