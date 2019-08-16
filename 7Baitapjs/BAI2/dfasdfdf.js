
//bai 2
function giaiThua (n){
    let giaithua1 =1
    for ( let i = 1 ; i <n+1; i++){
        giaithua1 *= i
    }
    return giaithua1
}
console.log (giaiThua (4))
console.log (giaiThua (5))
console.log (giaiThua (6))
//bai 3
  function daochuoi(st3){
      let newstring ="";
      for (let i= st3.length-1 ; i>= 0; i--){
          newstring += st3[i]
      }
      return newstring;}

    let st3 ='hello'  
    console.log (daochuoi(st3))

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
