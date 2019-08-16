
//bai1
$(document).ready(function(){
	// Chọn đối tượng cần tạo sự kiện, thẻ input có id="username"
  $('#username').keyup(function(){
  	// kiểm tra độ dài giá trị nhập vào ô input
    if($(this).val().length >= 8) {
    	// nếu >= 8 thì bỏ disabled đi
      $('.btn').removeAttr('disabled');
    } else {
    	// ngược lại thì add disabled vào
      $('.btn').attr('disabled', 'disabled');
    }
  })

})
// bai2
$(document).ready(function(){
			
    // Hàm validate Email với chuỗi Regex
    function validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
    }

    // Hàm validate Phone với chuỗi Regex
    function validatePhone(phone){
        var phoneReg = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;  
        return phoneReg.test(phone); 
    }

    $('.btn').click(function(){

        // Lấy ra các value nhập vào
        var username = $('#username').val(),
            password = $('#password').val(),
            email = $('#email').val(),
            phone = $('#phone').val();

        // Check nếu username rỗng
        if(username.trim() == ''){
            alert('Tài khoản bắt buộc nhập');
            $('#username').focus();
            return false;

        // Check nếu password rỗng
        } else if(password.trim() == '') {
            alert('Mật khẩu bắt buộc nhập');
            $('#password').focus();
            return false;

        // Check nếu password nhỏ hơn 8 ký tự
        } else if(password.length < 8) {
            alert('Mật khẩu không nhỏ hơn 8 ký tự');
            $('#password').focus();
            return false;

        // Check nếu email rỗng
        } else if(email.trim() == '') {
            alert('Email bắt buộc nhập');
            $('#email').focus();
            return false;

        // Check nếu email không hợp lệ
        } else if(!validateEmail(email)) {
            alert('Email không hợp lệ');
            $('#email').focus();
            return false;

        // Check nếu số điện thoại rỗng	
        } else if(phone.trim() == '') {
            alert('Số điện thoại bắt buộc nhập');
            $('#phone').focus();
            return false;

        // Check nếu số điện thoại không hợp lệ
        } else if(!validatePhone(phone)) {
            alert('Số điện thoại không đúng định dạng');
            $('#phone').focus();
            return false;

        // Nếu tất cả đều hợp lệ	
        } else {
            alert('Ok ! Các dữ liệu hợp lệ');
            return false;
        }

    })

})
//bai3
$(document).ready(function(){
			
    var brick = '\
          <div class="form-group parent_div">\
            <input type="text" class="form-control input" placeholder="input" >\
            <button type="button" class="btn btn-danger btn_del">Xóa</button>\
          </div>\
        ';
    $(document).on('click', '.btn_add', function(){
      $('.block').append(brick);
    });
  
    $(document).on('click', '.btn_del', function(){
      $(this).parent().remove();
    });
  })

  $(document).ready(function(){
	$('select').on('change', function() {
  	var color = $(this).val();
    switch(color) {
    
      case '1':
          $('#background-default').attr('class', 'maudo');
          break;
          
      case '2':
          $('#background-default').attr('class', 'mauxanh');
          break;
          
      case '3':
          $('#background-default').attr('class', 'mauvang');
          break;
          
      default:
          $('#background-default').attr('class', 'mauden');
			}
  });
})
// bai 5
$(document).ready(function(){
	// Click vào đối tượng có class="btn-info"
  $('.btn-info').click(function(){
  	// Lấy ra giá trị trong ô có id="input"
    var val = $('#input').val();
    // Gán giá trị đó vào thẻ có id="content"
    $('#content').html(val);
    // Hiển thị modal lên
    $('#myModal').modal('show');
  })
})

//bai7
$(document).ready(function(){
    $('.login').click(function(){
        // Lấy ra các giá trị trong username và password
        var username = $('.username').val();
        var password = $('.password').val();

        // Nếu username trống hoặc password trống
        if(username.trim() == '' || password.trim() == '') {
            // Hiện ra thông báo lỗi
            $('.error').html('Vui lòng nhập đủ các trường thông tin').removeClass('hidden');
  // Ẩn thông báo success
  $('.success').addClass('hidden');
        // Nếu độ dài mật khẩu không đúng yêu cầu
        } else if(password.length < 4 || password.length > 18) {
            //Hiện ra thông báo lỗi
            $('.error').html('Mật khẩu phải từ 4-18 ký tự').removeClass('hidden');
  // Ẩn thông báo success
  $('.success').addClass('hidden');
        // Ngược lại đúng tất cả điều kiện
        } else {
            // Ẩn thông báo lỗi
            $('.error').addClass('hidden');
  // Hiện thông báo success
  $('.success').removeClass('hidden');
        }
    })
})

