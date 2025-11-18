// let num2:number = 10;
// num2 = 1000

// console.log(num2);

// -----------------------

// type inference (avoid)
// let num = 10;
// num = "samarth"

// console.log(num);

// -----------------------

// write a fn that greets with firstname

// function greet(firstName:string) : number {
//     console.log(`Welcome here by ${firstName}`); 
//     return 10  
// }

// greet("Samarth")
// greet("KASHISH")

// -----------------------

// 2. fn which calc sum of 2 variables

// function sum(x:number,y:number) : string {
//     return `hey sum is ${x+y}`
// }
// sum(10,30);

// ---------------------
// 3. write a fn that accepts another fn which executes after 1s

// function a(){
//     console.log("Hi i am cb fn")
// }

// function b( cb : (x?:number)=>void  ){
//     setTimeout(function(){
//         cb(100)
//         cb()
//     },1000)
// }

// b(a)

// ------------------------------

// var a = 10;
// let b = 20;
// const c = 30;

// function abc(){
//     console.log("abc");
// }

// let abcd = ()=>{
//     console.log("abcd");
// }

// function a(x){
//     console.log("Hi i am cb fn")
// }
// a(10)

