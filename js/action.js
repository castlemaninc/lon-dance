$(document).ready(function(){
	console.log(" I'm working! ");

	$('.bars').on('click', function(){
		$('.small-device-nav-links').css('display', 'block');
		$('.bars').hide();
		$('.close-x').show();
	});

	$('.close-x').on('click', function(){
		$('.small-device-nav-links').css('display', 'none');
		$('.bars').show();
		$('.close-x').hide();
	});

});