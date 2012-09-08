require.config({
	baseUrl: '/js/'
});

define('core',['jquery', 'libs/bootstrap'], function($){ return $;});
require(['core', 'libs/bootstrap-carousel'], function(){
    $('#meetings').carousel('pause');
});