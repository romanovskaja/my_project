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

let btnsFilterContainer = document.querySelector('.wr-filter');

btnsFilterContainer.addEventListener('click', function(e) {
    // debugger
    if (!e.target.closest('button')) return;
    let btn = e.target.closest('button');
    if (btn.classList.contains('active')) return;

    let btns = document.querySelectorAll('.wr-filter button');
    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        if (btn.classList.contains('active')) {
            btn.classList.remove('active')
        }
    }
    // let arrBtns = Array.prototype.slice.call(btns);
    // removeClass(arrBtns, 'active');


    btn.classList.add('active');

    let btnId = btn.id;
    let blocks = document.querySelectorAll('.block');
    let arrBlocks = Array.prototype.slice.call(blocks);

    removeClass(arrBlocks, 'hide');

    if (btnId === 'all') return;

    arrBlocks.filter(block => (block.dataset.var != btnId)).map(block => block.classList.add('hide'));


});

let removeClass = function(arr, className) {
    arr
        .filter(item => item.classList.contains(className))
        .map(item => item.classList.remove(className));
}

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