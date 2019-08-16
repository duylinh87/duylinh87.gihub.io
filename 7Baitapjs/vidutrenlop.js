// function sort(arry) {
//     let trunggian = 0;
//     for (let i = 0; i < arry.length - 1; i++) {
//         for (let j = i + 1; j < arry.length; j++) {
//             if (arry[i] >= arry[j]) {
//                 trunggian = arry[i];
//                 arry[i] = arry[j];
//                 arry[j] = trunggian
//             }
//         }
//     }
//     return arry
// }
// let arry = [3, 2, 11, 5, 25]
// console.log(sort(arry))
// let arri = [-3, 2, 11, 5, 5]
// console.log(sort(arri))



// function bublesort (arr) {
//     let trunggian =0
//     for (let i = 0 ; i < arr.length; i++ ){
//         for ( let j = 0 ; j <arr.length ; j++){
//             if ( arr[i]<= arr[j]){
//                 let trunggian = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = 
//             }
//         }

//     }
// }

// function quicksort(ar) {
//     if (ar.length <= 1) {
//         return ar
//     }
//     let left = [];
//     let right = [];
//     let result = [];
//     let pivit = ar.pop();
//     let k = ar.length;
//     for (let i = 0; i < k; i++) {
//         if (ar[i] <= pivit) {
//             left.push(ar[i])
//         }
//         else {
//             right.push(ar[i])
//         }
//     }
//     return result.concat(quicksort(left), pivit, quicksort(right))
// }
// let ar = [3, 5, 6, 7, 22, 23, 23, 6]
// console.log(quicksort(ar))

// findNumberMaxTwo = (a, b, c, d, e, f) => {
//   let arr = [];
//   arr.push(a, b, c, d, e, f)
//   arr.sort((x, y) => x - y)
//   for (let i = 0; i < arr.length; i++) {
//     if (!Number.isInteger(arr[i])) {
//       return `ban nhap sai`
//     }
//   }
//   return ` Số lớn thứ 2 là ${arr[arr.length - 2]}`
// }
// console.log(findNumberMaxTwo(4, 5, 33, 21, 22, 3))
// console.log ( findNumberMaxTwo ( "ddfd",45,33,21,44,2))
// console.log ( findNumberMaxTwo ( 4,5,33,21,19,18))
// console.log ( findNumberMaxTwo ( 4,5,33,21,10,11))




// let products = [
//   { name: "A", quantity: 2, unitprice: 20 },
//   { name: "B", quantity: 3, unitprice: 10 },
//   { name: "C", quantity: 4, unitprice: 40 },
// ]
// let total = products.reduce((total1, product) => {
//   return total1 + product.quantity * product.unitprice
// }, 0)
// console.log(total)

// class obj {
//   constructor() {
//   }
// }



// const arr = [1, 1, 1, 1, 2, 2, 11, 11, 2, 4, 5, 5, 4, 4, 4]

// function solve(arr) {
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!result[arr[i]]) result[arr[i]] = 1
//     else result[arr[i]]++
//   }

//   let mMax = 0;
//   let num = 0;
//   let listKey = Object.keys(result)

//   for (let i = 0; i < listKey.length; i++) {
//     if (result[listKey[i]] > mMax) {
//       mMax = result[listKey[i]];
//     }

//     if (mMax === result[listKey[i]]) {
//       num = listKey[i];
//     }
//   }


//   console.log('===============>ssss', mMax);
//   console.log('===============>ssss', num);
// }

// function solve2(arr) {
//   let count = 0
//   let countMax = 0;
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count = demSoLanXuatHien(arr[i], arr);
//     if (countMax < count) {
//       countMax = count;
//       num = arr[i];
//     }

//     if (countMax == count && num < arr[i]) {
//       num = arr[i];
//     }
//   }

//   console.log('===============>', countMax);
//   console.log('===============>', num);
// }


// function demSoLanXuatHien(num, arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) count++;
//   }

//   return count;
// }

// solve(arr);
// solve2(arr)



// let result2 = {
//   1: 3,
//   2: 5,
//   6: 8
// }

// let listKey1 = Object.keys(result2)
// console.log(listKey1)




// function buom(n) {
//   let str = ""
//     // This is upper half of pattern 
//     for (i=1; i<=n; i++) 
//     { 
//         for (j=1; j<=(2*n); j++) 
//         { 
//             // Left part of pattern 
//             if (i<j) 
//                 str +="  "; 
//             else
//                 str +="* "; 
              
//             // Right part of pattern s
//             if (i<=((2*n)-j)) 
//                  str +="  "; 
//             else
//                   str +="* "; 
//         } 
//         str += "\n"; 
//     } 
//     // This is lower half of pattern 
//     for (i=1; i<=n; i++) 
//     { 
//         for (j=1;j<=(2*n);j++) 
//         { 
//             // Left part of pattern 
//             if (i>(n-j+1)) 
//                 str +="  ";  
//             else
//                 str +="* "; 
                  
//             // Right part of pattern 
//             if ((i+n)>j) 
//                 str +="  ";  
//             else
//                  str +="* "; 
//         } 
//         str += "\n"; 
//     } 
//   return  str
// }
// console.log(buom(4))


