
$(document).ready(function () {
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
});

