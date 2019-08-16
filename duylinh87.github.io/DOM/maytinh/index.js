
function insert(num){
    $("#textview").val() = $("#textview").val() +num
}
function equal(){
    let exp = $("#textview").val()
    // if(exp){
        $("#textview").val() = eval(exp)    /// ham eval tinh bieu thuc toan hoc
    // }
}
function clean(){
    d$("#textview").val() = ""
}
function back(){
    var exp = $("#textview").val() 
    $("#textview").val()  = exp.substring(0,exp.length-1)
}

