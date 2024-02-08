
const slide = document.querySelectorAll('.slide');
const navi = document.querySelectorAll('.nevi');
     //setInterval(right,6000);
        var i = 0; 
    function left(){         
    
    rem();
     
     if(i==0){ 
    w4();
     }
     else if(i==1){
     w0();

     }
     else if(i==2){
     w1();
     }
     else if(i==3){
    w2();
     }
     else {
         if(i==4){
    w3();
         }
         else{
             i=0;
         }
     }
     
    
 }
function right(){
 rem();
     if(i==0){ 
    w2();
     }
     else if(i==4){
     w1();
     }
     else if(i==3){
    w0();
     }
     else if(i==2){
     w4();
     }
     else {
         if(i==1){
         w3();
         }
         else{
             i=0;
         }
                                
 }

}
 //setInterval(right,2000);
 function w3(){
    rem();
     slide[0].classList.add('a');
     slide[1].classList.add('b');
     slide[2].classList.add('c');
     slide[3].classList.add('d');
     slide[4].classList.add('e');
     i=0;
     navi[2].classList.add('active');
 }
 function w4(){
    rem();
    slide[0].classList.add('b');
    slide[1].classList.add('c');
    slide[2].classList.add('d');
    slide[3].classList.add('e');
    slide[4].classList.add('a');
    i=1;
    navi[3].classList.add('active');
 }
 function w0(){
    rem();
    slide[0].classList.add('c');
    slide[1].classList.add('d');
    slide[2].classList.add('e');
    slide[3].classList.add('a');
    slide[4].classList.add('b');
    i=2;
    navi[4].classList.add('active');
 }
function w1(){
    rem();
     slide[0].classList.add('d');
     slide[1].classList.add('e');
     slide[2].classList.add('a');
     slide[3].classList.add('b');
     slide[4].classList.add('c');
     i=3;
     navi[0].classList.add('active');

 }
function w2(){
    rem();
    slide[0].classList.add('e');
    slide[1].classList.add('a');
    slide[2].classList.add('b');
    slide[3].classList.add('c');
    slide[4].classList.add('d');
    i=4;
    navi[1].classList.add('active');
 }

 function rem(){
 navi[0].classList.remove('active');
 navi[1].classList.remove('active');
 navi[2].classList.remove('active');
 navi[3].classList.remove('active');
 navi[4].classList.remove('active');
 slide[0].classList.remove('a','b','c','d','e');
 slide[1].classList.remove('a','b','c','d','e');
 slide[2].classList.remove('a','b','c','d','e');
 slide[3].classList.remove('a','b','c','d','e');
 slide[4].classList.remove('a','b','c','d','e');
 }
 
 