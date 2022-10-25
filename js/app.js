$(document).ready(function () {
	$('.reviews').slick({
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 1,
		speed: 700,
		easing: 'ease',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		draggable: false,
		swipe: true,

	});
});

$(function () {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();
	console.log(scrollOffset);

	/* Fixed Header */
	checkScroll(scrollOffset);

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});

	/* Menu nav toggle */
	$("#nav_toggle").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	/* Collapse */
	$("[data-collapse]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$this.toggleClass("active");
	})

});
