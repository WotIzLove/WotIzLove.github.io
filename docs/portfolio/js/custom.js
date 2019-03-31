$(document).ready(function () {
	wow = new WOW(
		{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       false,       // default
		live:         true        // default
	}
	)
	wow.init();


	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true, //Зацикливаем слайдер
		margin: 50, //Отступ от элемента справа в 50px
		nav: false, //Отключение навигации
		autoplay: true, //Автозапуск слайдера
		smartSpeed: 2000, //Время движения слайда
		autoplayTimeout: 3500, //Время смены слайда
	});

	$('.slider2').slick({
		nextArrow: '<i class="fas fa-chevron-circle-right right" aria-hidden="true"></i>',
		prevArrow: '<i class="fas fa-chevron-circle-left left" aria-hidden="true"></i>',
		arrows: true,
	});

	$('.tabs__menu a').click(function(e) {
		e.preventDefault();
		$('.tabs__menu .active').removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('href');
		$('.tab').not(tab).css({'display':'none'});
		$(tab).fadeIn(400);
	})

});


