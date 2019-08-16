//- Bài 1. In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm. 
function printToday() {
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    //  let month = 12
    let year = now.getFullYear();
    // document.write ( " Ngày "+ date, " Tháng "+month," năm " +year)
    document.write(
        ` Ngày  :   ${date} </br>
          Tháng :   ${month}</br>
          Năm   :   ${year}`)
    if (month <= 3 && month >1) {
        document.write("</br> Đang là mùa Xuân anh em nhé!")
    }
    else if (month > 3 && month <= 6) {
        document.write("</br> Đang là mùa Hè anh em nhé!")
    }
    else if (month > 6 && month <= 9) {
        document.write("</br> Đang là mùa Thu anh em nhé!")
    }
    else { document.write("</br> Đang là mùa Đông anh em nhé!") }
}
printToday()

//- Bài 2. Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10).
//  Hãy chuyển điểm số sang dạng chữ với điều kiện sau:

    // Từ 8.5 đến 10: Điểm A
    // Từ 7 đến dưới 8.5: Điểm B
    // Từ 5.5 đến dưới 7: Điểm C
    // Từ 4 đến dưới 5.5: Điểm D
    // Từ 0 đến dưới 4: Điểm F

function covertNumberToWords (n) {
    if ( typeof n !== "number" || n >10 || n <0) {
      return "</br> Bạn Nhập điểm sai"
    }
        if ( n <= 10 && n >= 8.5) {
            return "</br> Bạn được điểm A"
         }
         else if (n >= 7 && n < 8.5) {
            return "</br> Bạn được điểm B"
         }
         else if (n >= 5.5 && n < 7) {
            return "</br> Bạn được điểm C"      
         }            
         else if (n >= 4 && n < 5.5) {
            return "</br> Bạn được điểm D"
         }
         else  {
            return"</br> Bạn được điểm F"
         }
}
     console.log (covertNumberToWords (0)) 
     console.log (covertNumberToWords (4))
     console.log (covertNumberToWords (6.5) )
     console.log (covertNumberToWords ("jhjhjhj")) 
     console.log ( covertNumberToWords (10.2))

 //  - Bài 3. Viết hàm translate() có tác dụng dịch từ "Hello" sang 5 thứ tiếng khác nhau (tự chọn) 
 //  với tham số truyền vào là mã quốc gia, sử dụng switch và mặc định dịch sang tiếng Việt.
     document.write ("</br> Lam bai so 3 </br>")

function translate (x) {
     switch (x) {
        case "viet":
             document.write (" Tiếng việt viết là : Xin Chào");
             break;
        case "Phap":
            document.write (" Tiếng Pháp đọc là: Bonjour ");
            break;
        case "Duc":
             document.write (" Tiếng Đức đọc là: Hallo");
            break;
        case "y":
            document.write (" Tiếng Ý đọc là: ciao");
            break;

        case "Taybannha":
             document.write (" Tiếng Tây Ban Nha đọc là: Hola");
            break;
         default :
            document.write (" Mời bạn chọn lại");
            break;
        }
    }
     //  let x = "viet"
     //  let x = "Phap"
    //  let x = "y"
     let x = "Duc"
    //  let x = "Taybannha "
console.log ( translate(x))

//- Bài 4. Cho 1 mảng chỉ gồm các giá trị true và false. 
// Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào.

function findTheFirstPlace (arr) {
     let lenghtarr = arr.length ;
     let theFirst = 0;
        for ( let i = 0 ; i < lenghtarr ; i++) {
            if ( arr[i] === true) {
                 theFirst = i;
                 break
            }    
        } return ` true xuất hiện lần đầu ở vị trí số ${theFirst}`
}
let arr = [ false,true, false, true, false]
console.log ( findTheFirstPlace(arr))



