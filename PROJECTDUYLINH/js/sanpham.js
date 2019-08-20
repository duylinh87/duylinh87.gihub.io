
$(document).ready(function () {

  // san pham
  $('[data-toggle="filter-display"]').each(function () {
    $(this).click(function () {
      displayTarget = $(this).data('target');
      $('.product-group, .sub-group').removeClass('active');
      $(this).addClass('active');
      $('.col-item').hide();
      $('.col-item' + displayTarget).fadeIn(600);
    });
  });
  $('[data-toggle="display-all"]').on('click', function () {
    $('.product-group, .sub-group').removeClass('active');
    $('.col-item').fadeIn(600);
  });
//chi tiet
$('.qty-decrease').each(function () {
  $(this).on('click', function() {
      var updateQty = Number($(this).next('input').attr('value'));
      if (updateQty > 1) {
          updateQty--;
      }
      $(this).next('input').attr('value',updateQty);
      $(this).next('input').val(updateQty);
      updateSubtotal(this,updateQty);
      updateTotal();
  });
});
$('.qty-increase').each(function () {
  $(this).on('click', function() {
      var updateQty = Number($(this).prev('input').attr('value'));
      updateQty++;
      $(this).prev('input').attr('value',updateQty);
      $(this).prev('input').val(updateQty);
      updateSubtotal(this,updateQty);
      updateTotal();
  });
});

//thanhtoan
$('.product-quantity input').each(function () {
  $(this).change(function(){
      var currentQty = $(this).val();
      $(this).attr('value',currentQty);
      updateSubtotal(this,currentQty);
      updateTotal();
  });
});
$('.product-remove button').each(function () {
  $(this).on('click', function() {
      $(this).parents('.cart-item').remove();
      updateTotal();
  });
});

$('.apply-coupon').click(function(){
  discountRate = $(this).prev('input').val();
  $('.discount-rate').text(discountRate + '%');
  $('.cart-discount td').text(discount.toLocaleString('vi'));
  updateTotal();
});
$('.open-option').change(function() {
  if (this.checked) {
      $('.optional').slideDown();
  } else {
      $('.optional').slideUp();
  }
});



});

// trang chi tiet
$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});






