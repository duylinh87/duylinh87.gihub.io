                    // bai tap ve function
//Bài 1. Viết 1 function tính bình phương của 1 số.
function binhphuong(n) {
   
    return  n * n
}
console.log(binhphuong(3))


// Bai 2:Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.
function theky(so) {
    if (so ==100){
        return 1
    }
    return { Math.floor(so/100) + 1
}}
console.log(theky(2019))

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
     console.log (m[i])
 }
}
let arry = [ "xuan", "ha" ,"thu", "dong"]
sapxep(arry)
// let  m= arry.sort()
// console.log (m)
// // for ( let i=0; i<m.length; i++){
// //     console.log (m[i])
// // }
// m.join()









function binhphuong() {
    let nhapso = document.getElemntById ("nhapso").value
    let kq = nhapso*nhapso
     return document.getElemntById ("binhphuong").value = kq
}
parseInt








                     /// bai ve vong lap
















//bai1
 function forst(st2){
     for ( let i =0 ; i <10;i++){
         document.write ( st2 + "-")
     }
 }
 let st2 = "123"
 console.log (forst(st2))
//bai 2
 function giaiThua (n){
     let giaithua1 =1
     for ( let i = 1 ; i <n+1; i++){
         giaithua1 *= i
     }
     return giaithua1
 }
 console.log (giaithua (4))
 console.log (giaithua (5))
 console.log (giaithua (6))
 //bai 3
   function daochuoi(st3){
       let newstring ="";
       for (let i= st3.length-1 ; i>= 0; i--){
           newstring += st3[i]
       }
       return newstring;}

     let st3 ='hello'  
     console.log (daochuoi(st3))
  // cach 2: dung phuong thuc
//   Phương thức split() là phương thức tách 1 chuỗi thành 1 mảng các phần tử, bằng cách tách chuỗi thành các chuỗi con.
//   Phương thức reverse() đảo ngược 1 mảng tại chỗ. Phần tử mảng đầu tiên trở thành cuối cùng và cuối cùng sẽ thành phần tử đầu tiên.
//   Phương thức join() là phương thức nối tất cả các phần tử của mảng lại thành 1 chuỗi

//bai 5
function sodu (arry1){
    let moi =[];
    for ( let i =0 ; i < arry1.length; i++){
        moi.push(arry1[i] % 2)
    }
    return moi
}
let arry1 =[4,5,6,7,8,9]
console.log (sodu(arry1))



//bai 4 
function sapxep (arry3){
    let newarr = arry3.sort();
    for (let i = 0 ; i < newarr.length ; i++){
        document.write ( i + newarr[i] )
    }
}
let arry3 = [ 'anh', 'yeu', 'em', 'nhieu', 'lam']
console.log (sapxep ( arry3))

// bai 6
 

// for ( let i = 0 ; i <100 ; i++) {
//     let node = document.createElement ("div");
//     let textnode = document.createTextNode (i);
//     node.appendChild (textnode)
//     if ( i % 2 === 0) {
//         node.className ="red";
//         document.getElementById ('result').appendChild (node)
//     }
//     else {
//         node.className ="blue";
//         document.getElementById ('result').appendChild (node)
//     }
// }

for ( let i = 0 ; i <100 ; i++) {
    if ( i % 2 === 0) {
      document.write ('<p style ="color:red">' + i + '</p>')}
     else {
       document.write ('<p style ="color:green">' + i + '</p>')
     }
    }








       
   