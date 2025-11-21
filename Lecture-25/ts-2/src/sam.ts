

//WET CODE
// let user = {
//     age: 28,
//     firstName: "Samarth",
//     email: "sam@gmail.com"
// }

// function checkAge(user : {
//     age: number,
//     firstName: string,
//     email: string
// } ):boolean{
//    return user.age>18 ? true : false
// }

// checkAge(user)

// -----------------------------------
// types and interfaces = start both with capital letter

// Interface
// hint: how can you define the type of object

// DRY code

// let user = {
//     age: 28,
//     firstName: "Samarth",
//     email: "sam@gmail.com",
//     password: "12345"
// }

// interface User{
//     age: number,
//     firstName?: string,
//     email?: string,
//     password?: string
// }
// interface User2{
//     age: number
// }

// function isLegal(user: User2):boolean{
//     return user.age>25 ? true : false
// }
// isLegal(user)

// ---------------------------------------
// union and intersection
// interface Person{
//     name:string;
//     age: number;
//     greet(phrase:string) : void
// }

// class Student implements Person{
//     name:string;
//     age: number;
//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`);
//     }
// }
// let newStudent = new Student("Sam" , 22)

// newStudent.greet("Hello")

// -------------------------------------------
// interface X{
//     name:string;
//     age: number;
// }
// interface Y extends X{
//     greet(phrase:string) : void
// }
// class Student implements Y{
//     name:string;
//     age: number;
//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`);
//     }
// }
// let newStudent = new Student("Sam" , 22)

// newStudent.greet("Hello")

// -------------------------------------------


// advantages of types
// 1. unions (OR)
// 2. intersections (AND)

// interface Identity2{}
//UNION (OR)
// type Identity = number | string | boolean;

// function sam(id: Identity):void{
//     console.log(id);
// }

// sam(1)
// sam('1')

// ------------

// intersection (AND)
// type DSA = {
//     teacher: string,
//     leetcode: number
// }
// type WEB = {
//     teacher: string,
//     project: number
// }

// type Samarth = DSA & WEB; //intersection
// type Samarth2 = DSA | WEB; //union

// const sam:Samarth = {
//     teacher: "Samarth vohra",
//     leetcode: 120,
//     project: 6
// }

// ------------

// let arr = [10,20,30,40,50]

// function maxi(arr: number[]):number{
//     let max:number = 0;
//     for(let item of arr){
//         if(item>=max){
//             max = item;
//         }
//     }
//     return max;
// }

// console.log(maxi(arr));

// ------------

// interface User{
//     name:string 
//     age:number
// }
// let users = [{name:"Sam", age:24}]

// function isLegal(users: User[]):boolean | undefined{
//     for(let item of users){
//         if(item.age> 18){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }
// isLegal(users)


// --------------------------------


// type X = {
//     name:string;
//     age: number;
// }
// type Y = X | {
// type Y = X & {
//     greet(phrase:string) : void
// }
// class Student implements Y{
//     name:string;
//     age: number;
//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`);
//     }
// }
// let newStudent = new Student("Sam" , 22)

// newStudent.greet("Hello")

// --------------------------------

// Enums: prebuild datatypes, iterate constant values

// define and iterate set of named constants

// game => keypressed =  up | right | down |left

// type?

// function doSomething(keyPressed: string){
//     if(keyPressed === 'up'){ console.log("upp") }
//     else if(keyPressed === 'down'){ console.log("downn") }
// }
// doSomething('up')
// doSomething('down')
// doSomething('chandigarh') //valid

// type => optional part

// type Key = "up" | "down" | "right" | "left";

// function doSomething(keyPressed: Key){
//     if(keyPressed === 'up'){ console.log("upp") }
//     else if(keyPressed === 'down'){ console.log("downn") }
// }
// doSomething('up')
// doSomething('down')
// doSomething('chandigarh') //invalid

// ---------------------------

// enums  (reusablity)

// enum Direction {
//     up="up",  // by default 0
//     down="down",
//     right="right",
//     left="left"
// }
// function doSomething(keyPressed:Direction){
//     if(keyPressed === Direction.up){ return Direction.up }
//     else if(keyPressed === Direction.down){ return Direction.down}
// }
// console.log(doSomething(Direction.up) )
// console.log(doSomething(Direction.down) )
// console.log(doSomething(Direction.left) )
// console.log(doSomething(Direction.right) )

// -------------------------------------------
// exmple usecase
// enum Responses {
//     Success=200,  // by default 0
//     NotFound=404,
//     Error=500,
// }

// app.get('/sam' , (req,res)=>{
//     if(true){
//         res.status(Responses.Success).json("thanks")
//     }else{
//         res.status(Responses.Error).json("error")
//     }
// })