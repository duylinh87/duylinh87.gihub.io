
$(document).ready(function() {
  $(window).scroll(function() {
     let pos_body = $('html,body').scrollTop();
     let pos_img1 = $('.card-img-top.one').offset().top;
     let pos_img2 = $('.card-img-top.two').offset().top;
     let pos_img3 = $('.card-img-top.three').offset().top;
     let pos_img4 = $('.card-img-top.four').offset().top;
     if(pos_body>pos_img1-200){
        $('.card-img-top.one').addClass('fadeInUp animated');
     }
     if(pos_body>pos_img2-200){
      $('.card-img-top.two').addClass('fadeInUp animated');
     }
     if(pos_body>pos_img3-200){
      $('.card-img-top.three').addClass('fadeInUp animated');
     }
    if(pos_body>pos_img4-200){
    $('.card-img-top.four').addClass('fadeInRight animated');
    }
  });
});








