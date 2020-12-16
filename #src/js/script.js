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
    // prevArrow: $('.custom-arrow-prev'),
    // nextArrow: $('.custom-arrow-next'),
});


document.querySelector('#play').onclick = play
document.querySelector('#pause').onclick = pause
document.querySelector('#stop').onclick = stop
document.querySelector('#speed-up').onclick = speedUp
document.querySelector('#speed-down').onclick = speedDown
document.querySelector('#speed-normal').onclick = speedNormal
document.querySelector('#volume').oninput = videoVolume

let video
let display
let progress

video = document.querySelector('#video-player')
progress = document.querySelector('#progress')
progress.onclick = videoRewind

video.ontimeupdate = progressUpdate

function play() {
    video.play()
}

function pause() {
    video.pause()
}
function stop() {
    video.pause()
    video.currentTime = 0
}
function speedUp() {
    video.play()
    video.playbackRate = 5
}
function speedDown() {
    video.play()
    video.playbackRate = 0.5
}
function speedNormal() {
    video.play()
    video.playbackRate = 1
}
function videoVolume() {
    let v = this.value
    console.log(v)
    video.volume = v/100
}
function progressUpdate () {
    console.log (video.duration)
    console.log (video.currentTime)
    let d = video.duration
    let c = video.currentTime
    progress.value = (100*c)/d
    document.querySelector('#out').innerHTML = video.currentTime
}
function videoRewind () {
    let w = this.offsetWidth
    let o = event.offsetX
    console.log (w)
    console.log (o)
    this.value = 100*o/w
    video.pause()
    video.currentTime = video.duration * (o/w)
    video.play()

}

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

$('div.more').hide()
$('a.showmemore').click(function(){
$(this).next('div').slideToggle()
})