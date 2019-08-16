

// bai 1 :function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor () {
  let p = document.getElementsByTagName ("p")
  for (let i = 0 ; i < p.length ; i++){
   p[0].style.color = "blue"
   p[1].style.color = "red"
   p[2].style.color = "yellow"
}}
changeColor()

// bai 2: function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
function changeBgColor(color){
  let body = document.getElementsByTagName ('body')
  body[0].style.background = color
  }
  changeBgColor( "red")
  changeBgColor( "darkorchid")

//bai 3 :function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 
// thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào có thể là id của 2 đoạn văn).

function copyContent(paragraph1, paragraph2) {
  let p1 = document.getElementById (paragraph1)
  let p2 = document.getElementById (paragraph2).innerHTML
  p1.innerHTML = p2
}
copyContent("paragraph1", "paragraph2")



// bai 4: function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).


function changeFontSize (x){
  let p = document.getElementsByTagName ("p")
   for (let i = 0 ; i < p.length ; i++){
     p[i].style.fontSize = x +"px"
   }
}
changeFontSize (30)  


//bai 5: function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (paragraph, tham số truyền vào có thể là id đoạn văn) 
// lên 1 pixel so với kích thước hiện tại,
//  kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle). 

function increaseFontSize(paragraph){
       let p = document.getElementById (paragraph)
       let stylefontnow = p.style.fontSize;
       let fontvalue = stylefontnow.slice (0,-2);
  if ( fontvalue < 30);
  fontvalue = +fontvalue +1 ;   // mot dang ep chuoi thanh so them dau cộng phía trước của chuỗi
  p.style.fontSize = fontvalue + "px"
} 
increaseFontSize("paragraph1")




function increaseFontSize(x){
  let p = document.getElementById (x)
  let stylefontnow = window.getComputedStyle(p)
  let fontvalue = stylefontnow.getPropertyValue('font-size');
if ( fontvalue < 30);
fontvalue ++;
let sizein = fontvalue + "px";
p.style.fontSize = sizein
} 
increaseFontSize("paragraph1")


// bai 6 :kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).
// function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn 
// (paragraph, tham số truyền vào có thể là id đoạn văn) xuống 1 pixels so với kích thước hiện tại,
//  kích thước giảm xuống không vượt quá 10 pixels

function decreaseFontSize(paragraph5){
  let p = document.getElementById (paragraph5)
  let stylefontnow = p.style.fontSize;
  let fontvalue = stylefontnow.slice (0,-2);
if ( fontvalue > 10){
fontvalue--};
let sizein = fontvalue + "px";
p.style.fontSize = sizein
}
// decreaseFontSize("paragraph1")






