require.config({
	baseUrl: '/js/'
});

define('core',['jquery', 'bootstrap'], function($){ return $;});
require(['core', 'bootstrap-carousel'], function(){
    $('#meetings').carousel('pause');
});