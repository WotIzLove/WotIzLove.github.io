$(function() {

	$('.preloader').delay(1000).fadeOut('slow');

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-white', 'effect-menu-slide',  'pagedim-black'],
		navbar:{
			title: 'Merkury'},
			offCanvas:  {
				position:  'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function(){
		$('.hamburger').addClass('is-active');
	}).bind('closed',  function(){
		$('.hamburger').removeClass('is-active');
	});
    $(".menu__link").on('click', function(){
		$(".menu__link").removeClass("menu__link_active").filter(this).addClass("menu__link_active");
	});
		

	$('.dragdrop-about').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: true,
		navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
	});

});
