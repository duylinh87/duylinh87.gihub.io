

//  Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, 
//  kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.
// function numberMax(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return false
//     }
//     if (a >= b) {
//         return a
//     }
//     else {
//         return b
//     }

// }
// console.log(numberMax(5, 9))
// console.log(numberMax(5, 5))
// console.log(numberMax('c', 5))

// - Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. 
// Kiểm tra tham số đầu vào phải là 1 số nguyên >= 0, sau đó tính giai thừa và in ra kết quả.
// function findFactorial(n) {
//     let result = 1
//     if (Number.isInteger(n) === true && n >=0) {
//         for (let i = 1; i < n + 1; i++) {
//             result *= i
//         }
//         return result
//     }
//     else {
//         return `Bạn nhập sai `
//     }
// }
// console.log(findFactorial(5))
// console.log(findFactorial(-5))
// console.log(findFactorial('fdfdf'))
// console.log(findFactorial(5.888))
// console.log(findFactorial(7.888))
// console.log(findFactorial(0))
// - Bài 3. Cho 1 mảng các số bất kỳ. Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên và sắp xếp theo thứ tự giảm dần.
// function newArryEvenNumber(arr) {
//     let sortArr = arr.sort(
//         function (a, b) {
//             return b - a
//         }
//     )
//     let newArry = [];
//     for (let i = 0; i < sortArr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newArry.push(sortArr[i])
//         }
//     }
//     return newArry
// }
// let arr = [3, 4, 5, 6, 7, 112, 40, 20, 13, 80, 15]
// console.log(newArryEvenNumber(arr))


// cach 2:
// function newArryEvenNumber(arr) {
//     let sortArr = arr.sort(
//         function (a, b) {
//             return b - a
//         }
//     )
//     let newArry = sortArr.filter(function(itme){
//         return itme %2 === 0
//     })
//      return newArry
//     }
//     let arr = [3, 4, 5, 6, 7, 112, 40, 20, 13, 80, 15]
//     console.log(newArryEvenNumber(arr))
//     let arry = [13, 24, 25, 36, 17, 12, 40, 29, 13, 80, 15]
//     console.log(newArryEvenNumber(arry))
//     // cach 3: arowy funtion
function newArryEvenNumber(arr) {
    let sortArr = arr.sort(
         (a, b) => {
            return b - a
        }
    )
    let newArry = sortArr.filter( itme =>
         itme %2 === 0
    )
     return newArry
}

let arr = [3, 4, 5, 6, 7, 112, 40, 20, 13, 80, 15]
    console.log(newArryEvenNumber(arr))
let arry = [13, 24, 25, 36, 17, 12, 40, 29, 13, 80, 15]
    console.log(newArryEvenNumber(arry))











- Bài 4. Một trang web cho phép người dùng tạo tài khoản. 
Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. 
Nếu hợp lệ trả về "Pass", nếu không hợp lệ trả về "Fail".


function checkInfo(object) {
    if (object.username === "" || object.username.length > 20
       || object.password.length > 32 || object.password.length < 6
       || object.confirm !== object.password
    ) {
        return `Fail`
    }
    
        return `Pass` 
}
let object = {
    username: " le duy linh",
    password: "123456",
    confirm: "123456"
}
console.log (checkInfo(object))
let linh = {
    username: "",
    password: "123456",
    confirm: "123456"
}
console.log (checkInfo(linh))
let Binh = {
    username: "1234567891234",
    password: "123456",
    confirm: "123456"
}
console.log (checkInfo(Binh))