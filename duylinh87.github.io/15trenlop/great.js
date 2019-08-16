

// 1111111111111111111111111111111111111111111111111111111111111111111111111///////// trang home


    // phan heder 
$(function () {
  let $header = $('header .menu');
  console.log($header)
  if ($header.length) {
    let $offsetTop = $header.offset().top;
        $headerHeight = $header.height();
        $injectSpace = $ ('<div/>',{ height: $headerHeight}).insertAfter($header).hide()
    // console.log($offsetTop)
    console.log ($headerHeight)
    $(window).scroll( function () {
      if ($(this).scrollTop() > $offsetTop) {
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
function toggleActive(e) {
  console.log(e.propertyName);
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
});
//fadein:hien ra tu tu
//fadeout:mat di tu tu
//scrollTop





//   $('.user-modal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget); // Button that triggered the modal
//     var tabId = button.data('tabs'); // Extract info from data-* attributes
//     $(this).find('.nav-tabs>li').removeClass('active');
//     $(this).find('#' + tabId + '-indicator').addClass('active');
//     $(this).find('.tab-pane').removeClass('active in');
//     $(this).find('.tab-pane#' + tabId).addClass('active in');
// });

// $('#login-btn').click(function(){
//     $('.before-log').hide();
//     $('.logged').css('display','flex');
// });
// $('#logout-btn').click(function(){
//     $('.logged').hide();
//     $('.before-log').show();
//     event.preventDefault();
// });
