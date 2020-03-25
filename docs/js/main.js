$(document).ready(function() {
	AOS.init();

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		if (height > 750) {
			$(".nav-wrap").addClass("nav-wrap--fixed");
		} else {
			$(".nav-wrap").removeClass("nav-wrap--fixed");
		}
	});

	// Nav
	$("#page-nav").onePageNav({
		currentClass: "nav-menu-item--active",
		changeHash: false,
		scrollSpeed: 400,
		scrollThreshold: 0.6,
		filter: "",
		easing: "swing"
	});

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplaySpeed: 1000
	});
});
