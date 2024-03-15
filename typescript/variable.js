// Declaring a Variable
// const: is the constant way of declaring a variable
// var: is the global way of declaring a variable
// let: is the local way to declare a variable
// const firstName = "John";
// console.log(firstName);
// any: is a type that can be any type
// explicitly
// implicitly
// Objects: an object is a stand alone variable that containd properties and types
// type userDetails={
//     userName:string,
//     height:number,
//     age: number,
//     complexion: string,
//     isCute: boolean,
//     address: {
//         street: number,
//         location: string,
//         state: string,
//         country: string
//     } 
// }
// interface user2 {
//     userName:string,
//     height:number,
//     age: number,
//     complexion: string,
//     isCute: boolean,
//     address: {
//         street: number,
//         location: string,
//         state: string,
//         country: string
//     } 
// }
// const User:userDetails ={
//     userName:'freddy',
//     height:1.5,
//     age: 10,
//     complexion: 'chocolate',
//     isCute: true,
//     address:{
//         street: 4,
//         location: 'Oron road',
//         state: 'Akwa-Ibom',
//         country: 'Nigeria'
//     }
// };
// console.log(User);
// Functions
// const addNum = (a: number, b: string): string | number => a + b
// console.log(addNum(2,"6"));
// const newAdd =(a: number, b: number, c?: number): number => a + b + (c || 0)
// console.log(newAdd(2, 6, 2));
// const sayHello = (name: string) => {
//     return `Hello ${name}, how are you doing?`;
// }
// console.log(sayHello('fred'));
// const pi = (cal: number)=> Math.PI * cal;
// console.log(pi(10));
// Classes in typescript
