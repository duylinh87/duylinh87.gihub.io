
function callnumber() {
    let number = document.getElementById ("number").value ; 
    for ( let i = 1 ; i <= number ; i++){
        let node = document.createElement ("div")
        let textnode = document.createTextNode (i);
        node.appendChild (textnode)
        if ( i %2 == 0) {
            node.className = "red"
            document.getElementById ("result").appendChild(node)
        }
        else {
            node.className = "blue"
            document.getElementById ("result").appendChild(node)
         }  
    }
}









// function print_number()
// {
//     // Lấy number
//     var number = document.getElementById("number").value;
    
//     // Ép number sang kiểu INT
//     number = parseInt(number);
    
//     // Lặp để in kết quả
//     var html = '';
//     for (var i = 1; i <= number; i++){
//         html += i + ' <br/>';
//     }
//     document.getElementById("result").innerHTML = html;
// }
