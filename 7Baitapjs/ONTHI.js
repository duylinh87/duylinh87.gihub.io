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


//// xu ly so
//Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function sphericalVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3)
  }
  console.log(sphericalVolume(2))
  
  // Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
  // tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
  function total(x, y) {
    if ( x>y){
      let tg = x;
           x = y;
           y= tg
    }
    let sum = 0
    for (let i = x + 1; i < y; i++) {
      sum += i
    }
    return sum
  }
  console.log(total(3, 8))
  //Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
  
  function testPrime(n) {
    if (n < 2 || !Number.isInteger) {
      return false
    }
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return `=========> ${true}`
  }
  console.log(testPrime(2))
  console.log(testPrime(10))
  console.log(testPrime(23))
  console.log(testPrime(19))
  
  //Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham
  // số truyền vào.
  
  function totalPrime(t) {
    let arryPrime = [];
    for (let i = 2; i <= t; i++) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
        arryPrime.push(i)
      }
    }
    let totalPrime = arryPrime.reduce((total, imte) => { return total + imte }, (2 + 3 + 5 + 7))
    return totalPrime
  }
  console.log(totalPrime(50))
  console.log(totalPrime(19))
  
  
  //Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
  
  function totalDivisor(d) {
    let arryDivisor = [];
    for (let i = 1; i <= d; i++) {
      if (d % i === 0) {
        arryDivisor.push(i)
      }
    }
    let totalDivisor = arryDivisor.reduce((total, imte) => { return total + imte })
    return totalDivisor
  }
  console.log(totalDivisor(6))
  console.log(totalDivisor(49))
  // Bài 6: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số chẵn thuộc dãy Fibonacci (0, 1, 1, 2, 3,
  // 5, 8, ...) mà nhỏ hơn hoặc bằng tham số truyền vào.
  
  
  function fibonacci(n) {
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
      // if ( fib[i] > n );
      //   break
    }
    console.log (fib)
    let arry = fib.filter ( item => item <= n && item %2 ===0)
    return arry.reduce ( (total,item) => total + item)
  }
  console.log(fibonacci(15))
  
  /////////////////////////////////////////// Xử lý chuỗi///////////////////////////////////////////////////////////////
  // Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ:
  // ''HELLO world'' => ''Hello World''.
  
  function toTitleCase(phrase) {
    return phrase
      .toLowerCase() // viet thuong lai het
      .split(' ') // tao thanh mang cac phan tu
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // chuyen chu cai dau cua mang
      .join(' '); //gop mang thanh chuoi
  };
  
  let result = toTitleCase('hello world you cho ban cho toi');
  console.log(result);
  
  
  //Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
  function toTitleCase2(phrase) {
    return phrase
      .toLowerCase() 
      .split(' ') 
      .join('-'); 
  };
  
  let result2 = toTitleCase2('hello world you cho ban cho toi');
  console.log(result2);
  
  // Bài 3: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự nằm trong
  // chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường).
  // Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey''. 
  function TestTwoString(st1, st2) {
    let a = st1.toLowerCase()
    let b = st2.toLowerCase()
    let count = 0;
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (b[i] == a[j]) {
          count++;
          break  // khi gap lan 1 trung ta ngung luon roi moi chay tiep vong lap tranh th co 2 ky tu giong
        }
      }
    }
    if (count == b.length) {
      return true
    }
    return false
  }
  console.log(TestTwoString("anhyeuemeee", "yeman"))
  console.log(TestTwoString("HELLO world", "how"))
  console.log(TestTwoString("HELLO world", "hey"))
  
  
  // Bài 4: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược
  //   đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc
  //   false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
  
  function symmetricStringTest(string) {
  
    let arry = string.toLowerCase()
    for (let i = 0; i < arry.length; i++) {
      if (arry[i] == arry[arry.length - 1]) {
        return true
      }
      return false
    }
  
  }
  console.log(symmetricStringTest("Race car"))
  // console.log(symmetricStringTest("race car"))
  // console.log(symmetricStringTest("Mace cam"))
  // console.log(symmetricStringTest("lace cam"))
  
  /////////////////////////////////////////////////// bai tap ve mang////////////////////////////
  
  //Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined,NaN, 0, ''''.
  function bouncer(arr) {
    arr = arr.filter(n => {
      return n !== undefined && n !== null && n !== false && n !== 0 && n !== "" && n !== NaN
    });
    return arr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9, NaN, null, 0, undefined, 89, 12]));
  
  
  ///// Bài 2: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ, 
  // kết quả trả về là 1 mảng chỉ chứa những
  // phần tử không đồng thời nằm trong 2 mảng truyền vào. 
  // Ví dụ truyền vào [1, 2, 3] và [1, 3, 4, 5] thì
  // kết quả trả về là mảng [2, 4, 5].
  function compareArry(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
          arr1.splice(i, 1);
          arr2.splice(j, 1);
        }
      }
    }
    return result.concat(arr1, arr2)
  }
  let arr1 = [1, 2, 3];
  let arr2 = [1, 3, 4, 5];
  console.log(compareArry(arr1, arr2))
  
  
  // Bài 3: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
  // [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
  function filterElementLong(arry) {
    let elementLong = arry[0].length
    for (let i = 0; i < arry.length; i++) {
      if (arry[i].length >= elementLong) {
        elementLong = arry[i].length
      }
    }
    return arry.filter(x => { return x.length == elementLong })
  }
  
  
  let a = ['aba', 'aa', 'ad', 'c', 'vcd', 'aaaa', 'bbbb', 'cccc', 'dddd']
  console.log(filterElementLong(a))
  //////////////////////////////////// javaspcrit tong hop///////////////////////////////////////////
  
  //Bài 1: Cho 2 số a và b. Viết hàm giải phương trình bậc nhất dạng ax + b = 0.
  
  function ptb1(a, b) {
    if (a != 0) {
      return ` nghiem cua phuong trinh la x = ${x = -b / a}`
    }
    else if (a == 0 && b == 0) {
      return `phương trình vô số nghiệm`
    }
    else (a == 0 && b != 0)
    return `phương trình vô nghiệm`
  
  }
  console.log(ptb1(4, 5))
  console.log(ptb1(0, 5))
  console.log(ptb1(0, 0))
  // Bài 2: Cho 3 số a, b và c. Viết hàm giải phương trình bậc 2 dạng ax² + bx + c = 0.
  
  function ptb2(a, b, c) {
    let denta = b * b - 4 * a * c;
    if (denta < 0) {
      return `=====>Phuong trinh vo nghiem`
    }
    else if (denta == 0) {
      return `=====> phuong trinhg co nghiem kep ${x1 = x2 = -b / (2 * a)}`
    }
    else {
      return `=====>phuong trinh co 2 nghiem phan biet ${x1 = (-b + Math.sqrt(denta)) / (2 * a)}  va ${x2 = (-b - Math.sqrt(denta)) / (2 * a)}`
    }
  }
  console.log(ptb2(2, -7, 3))
  
  
  
  
  // Bài 4: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại
  // bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải
  // bài toán trên với 3 tham số h là chiều cao của giếng, x và y như mô tả trên.
  
  function findDay(h, x, y) {
    // let day = 0;
    if (x >= h) { return day = 1 };
    if (x < h && x <= y) {
      return `leo bằng niềm tin `
    }
    if (x < h && x > y) {
      return day = parseInt(h / (x - y))
    }
  }
  console.log(findDay(5, 4, 3))
  console.log(findDay(5, 7, 3))
  console.log(findDay(7, 6, 6))
  
  
  // Bài 5: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số
  // nhỏ nhất có thể (không tính số 0 đầu tiên). Ví dụ với tham số 53751 thì kết quả là 13557.
  
  function sortMin(n) {
    let arryNumberString = n.toString().split("")
    let arryNumber = arryNumberString.map(x => { return +x });
    arryNumber.sort((a, b) => { return a > b });
    let result = arryNumber.join("")
    // for (let i = 0; i < arryNumber.length; i++) {
    //   result += arryNumber[i]
    // };
    return +result
  }
  console.log(sortMin(45612311))
  console.log(sortMin(44647749))
  console.log(sortMin(3412326))
  
  let h = [3, 4, 5, 2, 3]
  let k = h.sort(function (x, y) { return x > y })
  console.log(k)
  
  /////////////////////////////////// bai tap obj/////////////////////////////////////
  //  Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
  //  Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
  
  function sortArry(arr) {
    let newarry = [];
    for (let i = 0; i < arr.length; i++) {
      newarry.push(arr[i].name)
    }
    return newarry.sort()
  }
  let p = [
    { name: "Huy", gender: "Male", age: 20 },
    { name: "Linh", gender: "Male", age: 20 },
    { name: "Can", gender: "Male", age: 20 },
  ]
  console.log(sortArry(p))
  //Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
  // Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
  
  function sortAge(arr) {
    let newarry = [];
    for (let i = 0; i < arr.length; i++) {
      newarry.push(arr[i].age)
    }
    return newarry.sort((a, b) => { return b - a })
  }
  let m = [
    { name: "Huy", gender: "Male", age: 20 },
    { name: "Linh", gender: "Male", age: 12 },
    { name: "Can", gender: "Male", age: 17 },
  ]
  console.log(sortAge(m))
  
  //  Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
  // Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
  function filterName(arr) {
    let newarry = [];
    for (let i = 0; i < arr.length; i++) {
      newarry.push(arr[i].name)
    }
    return newarry.filter( item => item.toLowerCase().charAt(0)=="h")
  }
  let s = [
    { name: "Huy", gender: "Male", age: 20 },
    { name: "hinh", gender: "Male", age: 20 },
    { name: "Can", gender: "Male", age: 20 },
  ]
  console.log(filterName(s))
  
  
  //Bài 5: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
  // Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
  
  function totalAge(arr) {
    let newarry = [];
    for (let i = 0; i < arr.length; i++) {
      newarry.push(arr[i].age)
    }
    let sum = 0
   for ( let i = 0 ; i < newarry.length; i++) {
        sum += newarry[i];
   }
    return ` so tuoi trung binh ${tb = sum / newarry.length}`
  }
  let g = [
    { name: "Huy", gender: "Male", age: 20 },
    { name: "Linh", gender: "Male", age: 12 },
    { name: "Can", gender: "Male", age: 17 },
  ]
  console.log(totalAge(g))
  
  
  
  
  
  
