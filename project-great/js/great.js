

// 1111111111111111111111111111111111111111111111111111111111111111111111111///////// trang home


    // phan heder 
$(function () {
  let $header = $('header .menu');
  if ($header.length) {
    let $offsetTop = $header.offset().top;
        $headerHeight = $header.height();
        $injectSpace = $ ('<div/>',{ height: $headerHeight}).insertAfter($header).hide()
    // console.log($offsetTop)
    // console.log ($headerHeight)
    $(window).scroll( () =>{
      // if ($(this).scrollTop() > $offsetTop) {
        if ($(this).scrollTop() > 0) {
        $header.addClass('fix');
        $injectSpace.show()
      }
      else {
        $header.removeClass('fix');
        $injectSpace.hide()
      }
    })
  }
})
// Phan du an
const panels = document.querySelectorAll('.panel');
function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}
 toggleActive =(e) => {
  // console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
// nut quay ve dau trang
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $('#goTop').fadeIn('slow');
    } else {
      $('#goTop').fadeOut('slow');
    }
  });
  $('#goTop').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });
// 2///////// trang sanpham
  $('[data-toggle="filter-display"]').each(function (){
    $(this).click( function() {
        displayTarget = $(this).data('target');
        $('.product-group, .sub-group').removeClass('active');
        $(this).addClass('active');
        $('.col-item').hide();
        $('.col-item' + displayTarget).fadeIn(600);
        // $('.col-item').removeAttr('style');
        // $('.col-item').not(displayTarget).css('display','none');
    });
  });
  $('[data-toggle="display-all"]').on('click', function() {
    $('.product-group, .sub-group').removeClass('active');
    $('.col-item').fadeIn(600);
  });
});
//fadein:hien ra tu tu
//fadeout:mat di tu tu
//scrollTop
getTimeRemaining = (endtime)=> {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);






