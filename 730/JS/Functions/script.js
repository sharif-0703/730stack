(function(){
    console.log("Hello world")
})(); //IIFE - Immediate Invoke Function Expression
function display(){
    console.log("Hello Functions")  // function definition
}
display() //function call
console.log(display) 

var display2=function(){
    console.log("Bye functions")
}
display2()
// function can take parameters- we can take parameters optional by assigning a default values
function addition(a,b=10){
    console.log(a+b)
}
addition(5,8)
addition(5)

//functionns also returns a value

function sub(a,b){
  return a-b;
}
let p=sub(8,5)
console.log(p)

function mad(){
    console.log("JS IS MAD")
}
function bad(a,b){
    console.log(a);
    b()
    console.log("JS IS NOT BAD")
}
bad(5,mad)

function x(){
    var c=0;
    function y(){
        c++;
        console.log(c)
    }
    return y;
}
let z=x()
console.log(z);
z()
z()//inner function remembers the outer function even after execution ended