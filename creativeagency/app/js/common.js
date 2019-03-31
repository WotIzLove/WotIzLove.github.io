$(function (){

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-white', 'effect-menu-slide',  'pagedim-black'],
		navbar:{
			title: '<div class="logo"><div class="logo__block_blue"><p class="logo__title">CS</p></div><div class="logo__block_grey"></div></div>'},
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

        var selector = $(this).attr('href');
        var h = $(selector);

        $('html, body').animate({
            scrollTop: h.offset().top
        }, 1000);
    });

    $(".submit-forms__item").on('focus', function(){
        $(".submit-textarea").removeClass("submit-textarea_focus");
        $(".submit-forms__item").removeClass("submit-forms__item_focus").filter(this).addClass("submit-forms__item_focus");
    });

    $(".submit-forms__item").on('blur', function(){
        $(".submit-forms__item").removeClass("submit-forms__item_focus");
    });

    $(".submit-textarea").on('focus', function(){
        $(".submit-forms__item").removeClass("submit-forms__item_focus");
        $(this).addClass("submit-textarea_focus");
    });

    $(".submit-textarea").on('blur', function(){
        $(".submit-textarea").removeClass("submit-textarea_focus");
    });

    $("form.submit-forms").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display: flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});



























