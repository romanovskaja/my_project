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
    // prevArrow: $('.custom-arrow-prev'),
    // nextArrow: $('.custom-arrow-next'),
});


// let base = {
// 	// Поиск элементов по классу
// 	findClass: function(str, node) {
// 		 if(document.getElementsByClassName) return (node || document).getElementsByClassName(str);
// 		 else {
// 			  let node = node || document, list = node.getElementsByTagName('*'), length = list.length, Class = str.split(/\s+/), classes = Class.length, array = [], i, j, key;
// 			  for(i = 0; i < length; i++) {
// 					key = true;
// 					for(j = 0; j < classes; j++) if(list[i].className.search('\\b' + Class[j] + '\\b') == -1) key = false;
// 					if(key) array.push(list[i]);
// 			  }
// 			  return array;
// 		 }
// 	},
// 	// Добавление обработчиков событий
// 	bind: function(node, type, listener) {
// 		if(node.addEventListener) node.addEventListener(type, listener, false);
// 		//@cc_on node.attachEvent('on' + type, function() { listener.call(node); });
// 	},
// 	// Реализация DOMContentLoaded
// 	init: [],
// 	ready: function() {
// 		if(!arguments.callee.done) {
// 			arguments.callee.done = true;
// 			if(this.timer) clearInterval(this.timer);
// 			let i, length = this.init.length;
// 			for(i = 0; i < length; i++) this.init[i]();
// 			this.init = [];
// 		}
// 	},
// 	check: function() {
// 		let _this = this, listener = function() {
// 			_this.ready();
// 		};
// 		if(document.addEventListener) document.addEventListener('DOMContentLoaded', listener, false);
// 		if(/KHTML|WebKit/i.test(navigator.userAgent)) this.timer = setInterval(function() {
// 			if(/loaded|complete/.test(document.readyState)) base.ready();
// 		}, 10);
// 		/*@cc_on document.write(unescape('%3CSCRIPT onreadystatechange="if(this.readyState==\'complete\') base.ready()" defer=defer src=\/\/:%3E%3C/SCRIPT%3E')); @*/
// 		this.bind(window, 'load', listener);
// 	}
// };

// // Функции для работы с панельками
// let videor = {
// 	process: function() {
// 		let i, list = base.findClass('videor'), length = list.length;
// 		for(i = 0; i < length; i++) base.bind(list[i], 'click', this.video);
// 		list = base.findClass('video-player');
// 		length = list.length;
// 		for(i = 0; i < length; i++) list[i].style.display = 'none';
// 	},
// 	video: function() {
// 		let content = base.findClass('video-player', this.parentNode)[0], e = arguments[0] || window.event;
// 		if(content.style.display == 'block') {
// 			content.style.display = 'none';
// 			this.innerHTML = 'show';
// 		}
// 		else {
// 			content.style.display = 'block';
// 			this.innerHTML = 'close';
// 		}
// 		e.preventDefault ? e.preventDefault() : e.returnValue = false;
// 	}
// };

// // Ищем блоки с классом «video» по событию DOMContentLoaded
// base.init.push(function() {
// 	videor.process();
// });

// // Запускаем проверку готовности DOM
// base.check();


let videoPlayer;
let videoControl = document.querySelector('.videor');

document.addEventListener("DOMContentLoaded", () => {
  initialiseMediaPlayer();
});

function initialiseMediaPlayer() {
 videoPlayer = document.getElementById('video-player');
 videoPlayer.controls = false;
}

videoControl.addEventListener('click', () => {
 if (videoPlayer.paused || videoPlayer.ended) {
  videoPlayer.play();
 } else {
  videoPlayer.pause();
 }
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