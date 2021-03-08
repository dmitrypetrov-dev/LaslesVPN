// Анимация - плавное появление текста
let animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < 
            (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

// Tooltip для карты
function showTooltip(evt, text) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.left = evt.pageX + -40 + 'px';
    tooltip.style.top = evt.pageY + 30 + 'px';
  }
  function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }

// Слайдер
$(document).ready(function() {
    $('.review-wrapper').slick({
        arrows: true, //стрелки слайдера
        dots: true, //точки слайдера
        adaptiveHeight: true, //адаптив высоты слайдов
        slidesToShow: 3,  //количество слайдов в треке
        slidesToScroll: 1, //количество листающих слайдов
        speed: 500, //скорость скрола
        easing: 'ease', //тип анимации скрола
        infinite: true, //бесконечный скролл
        autoplay: false, //автоскролл слайда
        autoplaySpeed: 1000, //задержка автоскролла
        appendDots:$('.review-slider__row'),
        appendArrows:$('.review-slider__row1'),  
        responsive: [
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// Окно входа
function show_auth(state) {
    $('#window-reg').css('visibility', 'hidden');
    $('#window-email').css('visibility', 'hidden');
	document.getElementById('window-auth').style.visibility = state;
}
// Окно регистрации
function show_reg(state) {
    $('#window-auth').css('visibility', 'hidden');
    $('#window-email').css('visibility', 'hidden');
	document.getElementById('window-reg').style.visibility = state;
}
// Окно email
function show_email(state) {
    $('#window-auth').css('visibility', 'hidden');
    $('#window-reg').css('visibility', 'hidden');
	document.getElementById('window-email').style.visibility = state;
}


