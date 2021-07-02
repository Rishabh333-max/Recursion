// function sayHello(number){
//     if(number>0)
//     {console.log(number)}
//      sayHello(--number);
    
// }
// sayHello(10);


// function add(number){
//     if(number>6){
//         console.log(number+100)
//     }
//     else{
//         console.log(number-2);
//     }
// }
// add(8);
// add(5);


// function Person(age){
//     if(age>18){
//         console.log("You are teenager,it's Party time");
//     }
//     else if(age<18){
//         console.log("You are a Kid");
//     }
   
// }Person(41);
// Person(17);
// Person(21);


// function sayHello(number){
//     if(number<0){
//         return number;
//     }
//         console.log(number);
//         sayHello(--number);
    
// }
// var hello=sayHello(10);
// console.log(hello)


// function square(num){
//     if(num>0){
//          return num*num;
//     }
//     else{
//         return "it is a number for which you cannot square"
//     }
// }
// var result=square(10);
// console.log(result)


// function getPowerResult(num,power){
//     if(power==1){
//         return num
//     }
//     else{
//         return num*getPowerResult(num,power-1)
//     }
// }
// console.log(getPowerResult(4,3))


// function square(num){
//     if(num>3){
//         return num*num;
//     }
//     else{
//         return num*num*num;
//     }
// }
// console.log(square(5));
// console.log(square(2));


// function loop(num){
//     if(num>0){
//          console.log(num)
//     }
//     loop(--num)
// }
// console.log(loop(10));


// function factorial(x){
//     if(x==0){
//         return 1;
//     }
//     else {
//         return x*factorial(x-1)
//     }
// }
// console.log(factorial(5));


// IIFE + RECURSION + ANONYMOUS------->

// (function(val){
// if(val>0){
// console.log(val);         
// arguments.callee(--val)         //isme function ka koi naam nhi h to recursion m to hum naam k saath krte h but agar 
// }                               //naam nhi hota function to hum (arguments.callee()) ka use krte hai
// })(11)