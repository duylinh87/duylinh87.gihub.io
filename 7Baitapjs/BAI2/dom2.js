let string ="homnayhocgi"
let travemot = string.charAt(4)
console.log (travemot)
let chieudaichuoi = string.length
console.log (chieudaichuoi)
 let str = 'Please visit Microsoft and Microsoft!';
var n = str.replace('Microsoft', 'W3Schools');
console.log (n)
let st ="chungtayeunhau"
let thaythe =st.replace('chungta','dcm')
console.log (thaythe)
let st3="chungt,akhongthuo,cve nhau"
let mang = st3.split();
console.log (mang)
console.log (mang[0])
console.log (mang[1])
                    // bai tap ve function
//Bài 1. Viết 1 function tính bình phương của 1 số.
function binhphuong(n) {
    return = n * n
}
console.log(binhphuong(3))

// Bai 2:Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.
function theky(so) {
  if ( so == 100) {
    return 1
  }
    else {return Math.floor(so/100) + 1
}}
console.log(theky(2019))
console.log(theky(100))
// Bài 3. Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.
function cut (string) {
        let a=string.slice(0,10)
    // return `${a}...`
    return ( a + '...')
}
let string ='anhyeuemnhieulam'
console.log (cut(string))


//Bài 4. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
function viethoa(st){
    let tudautien = st.charAt(0)
        let vh=tudautien.toUpperCase();
    let doansau = st.slice (1)
         let vt =doansau.toLowerCase()
      return vh + vt
  }
   let st="lam bai tap Ve chuoi"
   console.log (viethoa(st))


// Bai 5:Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.
function min(arr) {
    let veluemin = arr[0]
    let k = arr.length
    for (let i = 0; i < k; i++) {
        if (arr[i] <= veluemin) {
            veluemin = arr[i]
        }
    } return veluemin
}
let arr = [4000, 22, 2000, 555, 555, 222]
console.log(min(arr))   
// - Bài 6. Cho 1 mảng gồm tên của 5 học viên. Hãy viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên.


function sapxep (arry) {
 let m =arry.sort()
 for (let i = 0 ; i <m.length ; i++){
     document.write( m[i] + "</br>")
 }
}
let arry = [ "xuan", "ha" ,"thu", "dong"]
sapxep(arry)

// bai tap ve vong for

// bai 1
function connectedSt(st2){
    let st3 = st2 +"-"
    for ( let i =0 ; i < 9;i++){
      document.write (st3)
    }document.write (st2)
}
let st2 = "abc"
console.log (connectedSt(st2))


// bai 6 
for ( let i = 1 ; i <100 ; i =i+2){
    document.write (`<span style = "color :red"> ${i} </span>`)
    document.write (`<span style = "color :blue"> ${i+1} </span>`)
}