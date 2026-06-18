// const fruits = ["orange", "mango", "apple", "lemon", "berry"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// for (let i = 1; i <= 60; i++) {
//   console.log(
//     i,
//     "I will invest at least 6 hrs every single day for next 60 days!"
//   );
// }
// odd number
// for (let i = 61; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i, "is a odd number");
//   }
// }
// even number
// for (let i = 78; i <= 98; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "is a even number");
//   }
// }
// sum of some number
// let sum = 0;
// for (let i = 1; i <= 4; i++) {
//   sum += i;
// }
// console.log(sum);
// some of odd number
// let sum = 0;
// for (let i = 91; i <= 129; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);
// sum of even number
// let sum = 0;
// for (i = 51; i <= 85; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);
// multiplication table of 9
// let a = 9;
// for (i = 1; i <= 10; i++) {
//   console.log(a, "*", i, "=", a * i);
// }
// countdown timer
// for (let i = 81; i >= 65; i--) {
//   console.log("CountDown", i);
// }
// skip a number in countdown
// for (let i = 1; i <= 200; i++) {
//   if (i === 100) {
//     continue;
//   }
//   console.log(i);
// }
// skip the number divisible by 5
// for (let i = 55; i <= 85; i++) {
//   if (i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }
// stop loop when value reached 100
// for (let i = 1; i <= 200; i++) {
//   if (i === 101) {
//     break;
//   }
//   console.log(i);
// }
// stop loop when sum reached 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   if (sum >= 100) {
//     break;
//   }
//   console.log(sum);
// }
// stop loop when it reached any number square
for (let i = 1; i <= 100; i++) {
  if (i > 1 && Number.isInteger(i ** 0.5)) {
    break;
  }
  console.log(i);
}
