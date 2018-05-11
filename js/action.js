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
		console.log('.main-nav a clicked');
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top -130
		}, 500);		
	});

	$('.hero-content a, .down-arrow-container a').click(function(e){
		console.log('.hero-content a clicked');
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top -130
		}, 500);		
	});

	$('.bars').on('click', function(){
		$('.small-device-nav-links').slideDown(500);
		$('.bars').hide();
		$('.close-x').show();

	});

	$('.small-device-nav-links a').on('click', function(e){
		console.log('.small-device-nav-links a clicked');
		
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top -390
		}, 500);

		$('.small-device-nav-links').slideUp(500);
		$('.bars').show();
		$('.close-x').hide();

	})

	$('.close-x').on('click', function(){
		$('.small-device-nav-links').slideUp(500);
		$('.bars').show();
		$('.close-x').hide();
	});

});