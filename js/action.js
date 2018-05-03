$(document).ready(function(){
	console.log('ready');

	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$('.main-header').css('box-shadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)');
		} else {
			$('.main-header').css('box-shadow', 'none');
		}
	});

	$('.main-nav a').click(function(e){
		console.log('clicked');
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top -130
		}, 500);		
	});

	$('.hero-content a').click(function(e){
		console.log('clicked');
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top -130
		}, 500);		
	});

});
