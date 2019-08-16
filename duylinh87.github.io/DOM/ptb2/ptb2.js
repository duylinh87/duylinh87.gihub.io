 function hien(){
        let a = parseInt(document.getElementById ("texta").value);
        let b = parseInt(document.getElementById ("textb").value);
        let c = parseInt(document.getElementById ("textc").value);
        let x1 =0;
        let x2 =0
        let  deta = b*b - 4*a*c;
       if ( deta < 0) {
         document.getElementById ("ketqua").innerHTML = "phuong trinh vo nghiem"
       }
       else if ( deta == 0) {
        x1 = (-b/(2*a)) ;
        x2 = (-b/(2*a));
           document.getElementById ("nghiem1").value = eval (x1)
           document.getElementById ("nghiem2").value = eval (x2)
        //    document.getElementById ("nghiem1").value = x1
        //    document.getElementById ("nghiem2").value = x2
       } 
       else ( deta >0 ) {
        x1 =(-b-Math.sqrt(deta))/(2*a);
        x2 =(-b+Math.sqrt(deta))/(2*a); 
           document.getElementById ("nghiem1").value = eval (x1)
           document.getElementById ("nghiem2").value = eval (x2)
        //    document.getElementById ("nghiem1").value = x1
        //    document.getElementById ("nghiem2").value = x2
       }
            }
        