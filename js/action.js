$(document).ready(function(){
	console.log('ready');

	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$('.main-header').css('box-shadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)');
		} else {
			$('.main-header').css('box-shadow', 'none');
		}
	});
});
