$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
});
});


$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true
    // prevArrow: $('.custom-arrow-prev'),
    // nextArrow: $('.custom-arrow-next'),
});


$('.video__a').on('click', function(e) {
	e.preventDefault();
	
	let self = $(this);
	let videoSrc = self.attr('href');
	let videoId = videoSrc.substr(videoSrc.length - 11) + '?rel=0&autoplay=1';
	
	self.find('img').css('z-index', '0');
	self.find('iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);

});




// $('.slider-posts').slick({
//     slidesToShow: 3,
//     slidesToScroll: 2,
// });

$('.slider-posts').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});