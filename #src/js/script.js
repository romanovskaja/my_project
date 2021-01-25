// ! Menu lazy anchor scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
 anchor.addEventListener('click', function (e) {
  e.preventDefault()

  const blockID = anchor.getAttribute('href').substr(1)

  document.getElementById(blockID).scrollIntoView({
   behavior: 'smooth',
   block: 'start'
  })
 })
}

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
});
});

const overlay1 = document.querySelector('.overlay-1');
const overlay2 = document.querySelector('.overlay-2');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
overlay1.addEventListener('click', () => {
  search.classList.toggle('active');
  if (search.classList.contains('active')) {
    setTimeout(() => {
      input.focus();
    }, 200)
  }
})

search.addEventListener('click', () => {
  if (search.classList.contains('active')) {
    setTimeout(() => {
      input.focus();
    }, 200)
  }
})
overlay2.addEventListener('click', (e) => {
  input.value = '';
  input.focus();
  search.classList.remove('searching')
})
document.body.addEventListener('click', (e) => {
  if (!search.contains(e.target) && input.value.length === 0) {
    search.classList.remove('active');
    search.classList.remove('searching');
    input.value = '';
  }
})
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    input.blur();
  }
})
input.addEventListener('input', () => {
  if (input.value.length > 0) {
    search.classList.add('searching')
  } else {
    search.classList.remove('searching')
  }
})
input.value = '';
input.blur();


$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true
});


// block video

let mediaPlayer;
let videoControl = document.querySelector('.startBtn');
let videoText = document.querySelector('.videotext');
videoControl.lastElementChild.style.display = 'none';

document.addEventListener("DOMContentLoaded", function () { initialiseMediaPlayer(); }, false);

function initialiseMediaPlayer() {
	mediaPlayer = document.getElementById('video-player');
	mediaPlayer.controls = false;
}

videoControl.addEventListener('click', () => {
	if (mediaPlayer.paused || mediaPlayer.ended) {
		videoControl.children[0].style.display = 'none';
		videoControl.children[1].style.display = 'inline-block';
		mediaPlayer.play();
		videoText.style.visibility = 'hidden';
	} else {
    videoControl.children[1].style.display = 'none';
		videoControl.children[0].style.display = 'inline-block';
		mediaPlayer.pause();
		videoText.style.visibility = 'visible';
	}
});




// block filter

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
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
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

$('div.more').hide()
$('a.showmemore').click(function(){
$(this).next('div').slideToggle()
})