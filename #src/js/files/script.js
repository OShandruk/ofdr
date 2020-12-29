// ******************** JS SCRIPTS ***********************************************************

//********************** PAGE BURGER MENU  JS6 *********************

// let menuPageBurger = document.querySelector('.menu-page__burger');
// let menuPageBody = document.querySelector('.menu-page__body');
// menuPageBurger.addEventListener("click", function (e) {
// 	menuPageBurger.classList.toggle('active');
// 	_slideToggle(menuPageBody);
// });
//******************************* DROP MENU************************************************** */
// if (isMobile.any()) {
// 	let menuParents = document.querySelectorAll('.menu-page__parent');
// 	for (let index = 0; index < menuParents.length; index++) {
// 		const menuParent = menuParents[index];
// 		menuParent.addEventListener("click", function (e) {
// 			menuParent.parentElement.classList.toggle('active');
// 			e.preventDefault();
// 		});
// 	}
// } else {
// 	let menuParents = document.querySelectorAll('.menu-page__parent');
// 	for (let index = 0; index < menuParents.length; index++) {
// 		const menuParent = menuParents[index];
// 		menuParent.addEventListener("mouseenter", function (e) {
// 			menuParent.classList.add('active');
// 		});
// 		menuParent.addEventListener("mouseleave", function (e) {
// 			menuParent.classList.remove('active');
// 		});
// 	}
// }


//************************** */ SERCH**********************************************************/ 

// let searchSelect = document.querySelector('.search-page__title');
// let categoriesSearch = document.querySelector('.categories__search');
// searchSelect.addEventListener("click", function (e) {
// 	searchSelect.classList.toggle('active');
// 	_slideToggle(categoriesSearch);
// });

//***********************************************  SWIPER **************************
var swiper = new Swiper('.programs__slider', {
	autoHeight: true,
	slidesPerView: 4,
	spaceBetween: 30,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	loop: true,
 });

// *****************************************************************************************


// *********************** JQUERY SCRIPTS **************************************************

// function ibg(){
//     $.each($('.ibg'), function(index, val) {
//         if($(this).find('img').length>0){
//             $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
//         }
//     });
// }
// ibg();

// });
// *FIXED HEADER
// ******************************************************

// $(window).scroll(function() {
// if ($(this).scrollTop() > 1){
// $('.header__fix-wrap').addClass("fix__header");
// }
// else{
// $('.header__fix-wrap').removeClass("fix__header");
// }
// });

// END fixed HEADER


//*SLICK SLIDER
// *********************************************************


// jQuery(document).ready(function ($) {

// 	$('.mainslider').slick({
// 		speed: 1000,
// 		slidesToShow: 1,
// 		arrows: false,
// 		asNavFor: '.mainslider__dots'
// 		//   prevArrow:document.querySelector('.offer__slider__arrow-left'),
// 		//   nextArrow:document.querySelector('.offer__slider__arrow-right'),
// 	});

// });

//*********************PRODUCT SLIDER********************************* 

// jQuery(document).ready(function ($) {

// 	//NUMBERING IN SLICK SLAIDER
// 	var $status = $('.product-slider__number');
// 	var $slickElement = $('.product-slider');

// 	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
// 		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
// 		var i = (currentSlide ? currentSlide : 0) + 1;
// 		$status.html('<span>' + i + '</span>' + ' ' + '/' + slick.slideCount);
// 	});

// 	$('.product-slider').slick({
// 		speed: 1000,
// 		slidesToShow: 3,
// 		arrows: true,
// 		prevArrow: document.querySelector('.product-slider__arrow-left'),
// 		nextArrow: document.querySelector('.product-slider__arrow-right'),
// 		responsive: [
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					slidesToShow: 3,
// 					slidesToScroll: 3,
// 				}
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow: 2,
// 					slidesToScroll: 2,
// 				}
// 			},
// 			{
// 				breakpoint: 480,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1,
// 				}
// 			}

// 			// You can unslick at a given breakpoint now by adding:
// 			// settings: "unslick"
// 			// instead of a settings object
// 		]
// 	});

// });

// ***************************************************************


//********************** BURGER MENU JQUERY *********************
jQuery(document).ready(function ($) {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__link').click(function (event) {
		$('.header__burger,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});
//********************* BURGER MENU END **********************



//********************* BURGER MENU END **********************

// WOW EFFECT FOR SCROLING

// jQuery(document).ready( function($){
//   var wow = new WOW(
//   {
//     boxClass:     'wow',      // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset:       200,          // distance to the element when triggering the animation (default is 0)
//     mobile:       true,       // trigger animations on mobile devices (default is true)
//     live:         true,       // act on asynchronously loaded content (default is true)
//     callback:     function(box) {
// the callback is fired every time an animation is started
// the argument that is passed in is the DOM node being animated
//     },
//     scrollContainer: null,    // optional scroll container selector, otherwise use window,
//     resetAnimation: true,     // reset animation on end (default is true)
//   }
// );
// wow.init();
// });

// ************************************************************

//*****************MENU NAVIGATION***********************
jQuery(document).ready(function ($) {
	$("#menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top - 70 }, 1200);
	});
});
//***************** END MENU NAVIGATION***********************


//************ NUMBER ANIMATE*************************

// $(document).ready(function () {

//     var show = true;
//     var countbox = ".counts";
//     $(window).on("scroll load resize", function () {
//         if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
//         var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
//         var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
//         var w_height = $(window).height(); // Высота окна браузера
//         var d_height = $(document).height(); // Высота всего документа
//         var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
//         if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
//             $('.choose__item-number').css('opacity', '1');
//             $('.choose__item-number').spincrement({
//                 thousandSeparator: "",
//                 duration: 1200
//             });

//             show = false;
//         }
//     });

// });

//************ END  NUMBER ANIMATE*****************

//*************RANGE SLIDER INITIALIZED***************

// var $range = $(".js-range-slider"),
// 	$inputFrom = $(".js-input-from"),
// 	$inputTo = $(".js-input-to"),
// 	instance,
// 	min = 0,
// 	max = 1000,
// 	from = 0,
// 	to = 0;

// $range.ionRangeSlider({
// 	skin: "round",
// 	type: "double",
// 	min: min,
// 	max: max,
// 	from: 200,
// 	to: 800,
// 	onStart: updateInputs,
// 	onChange: updateInputs
// });
// instance = $range.data("ionRangeSlider");

// function updateInputs(data) {
// 	from = data.from;
// 	to = data.to;

// 	$inputFrom.prop("value", from);
// 	$inputTo.prop("value", to);
// }

// $inputFrom.on("input", function () {
// 	var val = $(this).prop("value");

// 	// validate
// 	if (val < min) {
// 		val = min;
// 	} else if (val > to) {
// 		val = to;
// 	}

// 	instance.update({
// 		from: val
// 	});
// });

// $inputTo.on("input", function () {
// 	var val = $(this).prop("value");

// 	// validate
// 	if (val < from) {
// 		val = from;
// 	} else if (val > max) {
// 		val = max;
// 	}

// 	instance.update({
// 		to: val
// 	});
// });

//************* END RANGE SLIDER INITIALIZED***************

// ********************toTOP************************

// $(function() {

// $(window).scroll(function() {

// if($(this).scrollTop() != 0) {

// $('#toTop').fadeIn();

// } else {

// $('#toTop').fadeOut();

// }

// });

// $('#toTop').click(function() {

// $('body,html').animate({scrollTop:0},800);

// });

// });
// ******************** END ToTOP************************


// ************************* SPOILER *****************************************
jQuery(document).ready(function () {
	jQuery('.filter__section__header').click(function () {
		$(this).parents('.filter__section-spoiler__on').find('.filter__section-body-spoiler').slideToggle();
		$(this).parents('.filter__section-spoiler__on').find('.filter__section__spoiler').toggleClass("active");
		$(this).parents('.filter__section-spoiler__on').find('.filter__section-title').toggleClass("active");

	})
})
// ************************* SPOILER MEDIA *****************************************
jQuery(document).ready(function () {
	var viewportWidth = $(window).width();
	if (viewportWidth <= 992) {
		$('.filter-title').click(function () {
			$(this).parents('.filter').find('.filter__body').slideToggle();

		})
	}
})

//************************TABS***************************/

jQuery(document).ready(function ($) {

	$(".tabs-item").not(":first").hide();
	$(".tabs-nav__item").click(function () {
		$(".tabs-nav__item").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

});

// ************************************************************************
