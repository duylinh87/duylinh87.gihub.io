
//// xu ly so
//Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function sphericalVolume(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3)
}
console.log(sphericalVolume(2))

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function total(x, y) {
  let sum = 0
  let minNumber = Math.min(x, y);
  let maxNumber = Math.max(x, y);
  for (let i = minNumber + 1; i < maxNumber; i++) {
    sum += i
  }
  return sum
}
console.log(total(3, 8))
console.log(total(8, 3))

// cach 2:
function total2(a, b) {
  if (a > b) {
    let tg = a;
    a = b;
    b = tg
  }
  let sum = 0;
  for (let i = a + 1; i < b; i++) {
    if (i % 2 === 0)
      sum += i
  }
  return sum
}
console.log(total2(8, 3))





//Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function testPrime(n) {
  if (n < 2 || !Number.isInteger(n)) {
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

function totalPrime2(m) {
  let sum = 0
  for (let i = 2; i < m; i++) {
    if (testPrime(i)) {
      sum += i
    }
  }
  return `============================> ${sum}`
}
console.log(totalPrime2(50))





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
  console.log(fib)
  let arry = fib.filter(item => item <= n && item % 2 === 0)
  return arry.reduce((total, item) => total + item)
}
console.log(fibonacci(15))

//cach 2
function tongFibonacci(num){
  let x = 0;
  let y = 1;
  let tg = 0;
  let sum = 0;

  while ((x + y) <= num) {
    tg = x + y;
    x = y;
    y = tg;
    if (tg % 2 === 0) {
      sum += tg;
    }
  }
  return sum;
}
console.log ( tongFibonacci(90))




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
// ghi chu : với phương thức slit nếu để ("") thì sẽ trả về mảng các phần tử rời nhau ['a','b','c','d]
// ghi chu : với phương thức slit nếu để (" ") thì sẽ trả về mảng các phần tử rời nhau ['ab','cd']
// ghi chu : với phương thức slit nếu để ("  ") thì sẽ trả về mảng các phần tử rời nhau ['abcd']


//Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
function toTitleCase2(phrase) {
  return phrase
    .toLowerCase() // viet thuong lai het
    .split(' ') // tao thanh mang cac phan tu
    // .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // chuyen chu cai dau cua mang
    .join('-'); //gop mang thanh chuoi
};

let result2 = toTitleCase2('hello world you cho ban cho toi');
console.log(result2);

//cach 2 :

// function toTitleCase3(p){
//   return p.toLowerCase.replace(/ /g,"-")
// }
// let result3 = toTitleCase3('hello world you cho ban cho toi');
// console.log(result3);


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
  let arry = string.toLowerCase().split("")
  if ( arry.length %2 !==0){ return false}
  for (let i = 0; i <= arry.length /2 ; i++) {
    if (arry[i] != arry[arry.length - i - 1]) {
      return false
    }
    return true
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


// Bài 3: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số
// thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví
// dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''.

  function timeS(str){
    //console.log(str.split(':'));
    let hours=0;
    let minute=0;
    let seconds=0;
    let strTime=[];
    let totalSeconds=0;
    strTime=str.split(":");
    hours=parseInt(strTime[0]);
    minutes=parseInt(strTime[1]);
    seconds=parseInt(strTime[2]);
    return totalSeconds=hours*60*60 +minutes*60+seconds;
  }
  function covertSeconds(str, x){
    let num = x+timeS(str);
    let minutes= (num/60);
    let rMinutes=Math.floor(minutes);
    let hours = (rMinutes/60);
    let rHours = Math.floor(hours);
    let day= (rHours/24);
    let rDay= Math.floor(day);
    let seconds = Math.round((minutes - rMinutes) * 60);
    let newMinutes = Math.round((hours - rHours)* 60);
    let newHours= Math.round((day-rDay)*24);
    let rSeconds = Math.round(seconds);

    return " Time: ("+ rDay+ " day)" + newHours + " giờ " + newMinutes + " phút "+ seconds +" giây";}
    console.log ( covertSeconds("8:10:10",20))


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
  arryNumber.sort((a, b) => a - b);
  let result = arryNumber.join("")
  // for (let i = 0; i < arryNumber.length; i++) {
  //   result += arryNumber[i]
  // };
  return +result
}
console.log(sortMin(45612311))
console.log(sortMin(44647749))
console.log(sortMin(3412326))





// bai tap obj
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

    if ( arr[i].age > arr[i+1].age ) {
       console.log( arr[i])
      newarry.push(arr[i])
    }
  }
  return newarry
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
    if ( arr[i].name.toLowerCase().charAt(0) === "h"){
   newarry.push( arr[i])
  }
}
  return newarry
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
  for (let i = 0; i < newarry.length; i++) {
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




////////////cach khac bai gop mang


// function merge_array(array1, array2) {
//   let result_array = [];
//   let arr = array1.concat(array2);
//   let len = arr.length;
//   let assoc = {};

//   while(len--) {
//     let item = arr[len];

//       if(!assoc[item]) 
//       { 
//           result_array.unshift(item);
//           assoc[item] = true;
//       }
//   }

//   return result_array;
// }


// let array1 = [1, 2, 3,5];

// let array2 = [2, 30, 1,5];

// console.log(merge_array(array1, array2));

//  let n =[] ;
//  n[0] = [1,2,3]
//  n[1] = [4,5,6]
//  n[2] = [7,8,9]
//  console.log (n)
//  console.log ( n.length)
//  console.log ( n[0].length)
//  console.log ( n[0][0])
//  console.log ( n[0][1])
//  console.log ( n[1][0])
//  console.log ( n[1][1])

//  function arryTwoDimensional ( n,m) {
//    let arry = [];
//    let start = 1
//    for ( let i = 0 ; i < n; i++) {
//      for ( let j = 0 ; j < m; j++){
//       arry[i][j] = start;
//       start +=1
//    }
//  }
//   return arry
// }
// console.log ( arryTwoDimensional(3,3))



function createZiczacArr2(m, n) {
  let ziczacArrMother = [];
  let result = 1;
  for (let i = 0; i < m; i++) {
    let ziczacArr = [];
    if (i % 2 == 0) {
      for (let j = 0; j < n; j++) {
        ziczacArr.push(result++);
      }
      ziczacArrMother.push(ziczacArr);
    }
    else {
      for (let j = 0; j < n; j++) {
        ziczacArr.push(result++);
        
      }
      ziczacArrMother.push(ziczacArr.reverse());
    }
    
  }
  return ziczacArrMother
}

  console.log(createZiczacArr2(6, 4))






  // function filterByName(items){
  //   let newArr=[];
  //   //console.log(items[0].name.toLowerCase().charAt(0));
  //   for(let i=0; i<items.length; i++)
  //   {
  //     if (items[i].name.toLowerCase().charAt(0)=='h') 
  //     {
  //       newArr.push(items[i]);
  //     }
  //   }
  //   return newArr;
  // }


    function totalF(n) {
      let a=0;
      let b =1;
      let tg = 0;
      let arr =[] ;
      while ( (a+b) <= n){
        tg = a +b;
        a =b ;
        b = tg
      }
      console.log(tg)
      // return arr.push(tg)
    }
    console.log ( totalF(90))



    function timeS(str){
      //console.log(str.split(':'));
      let hours=0;
      let minute=0;
      let seconds=0;
      let strTime=[];
      let totalSeconds=0;
      strTime=str.split(":");
      hours=parseInt(strTime[0]);
      minutes=parseInt(strTime[1]);
      seconds=parseInt(strTime[2]);
      return totalSeconds=hours*60*60 +minutes*60+seconds;
    }
    function covertSeconds(str, x){
      let num = x+timeS(str);
      let minutes= (num/60);
      let rMinutes=Math.floor(minutes);
      let hours = (rMinutes/60);
      let rHours = Math.floor(hours);
      let day= (rHours/24);
      let rDay= Math.floor(day);
      let seconds = Math.round((minutes - rMinutes) * 60);
      let newMinutes = Math.round((hours - rHours)* 60);
      let newHours= Math.round((day-rDay)*24);
      let rSeconds = Math.round(seconds);
    
      return " Time: ("+ rDay+ " day)" + newHours + " giờ " + newMinutes + " phút "+ seconds +" giây";}