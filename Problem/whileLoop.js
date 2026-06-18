// const number = 7;
// if (number < 10) {
//   console.log("its okay");
// }
// console.log("Not okay");
// let num = 0;
// while (num < 7) {
//   console.log("loop", num);
//   // num = num + 1;
//   // num += 1;
//   num++;
// }
// repeatation of output
// let i = 1;
// while (i <= 60) {
//   console.log(
//     i,
//     "I will invest at least 6 hrs every single day for next 60 days!"
//   );
//   i++;
// }
// odd number
// let i = 61;
// while (i <= 80) {
//   if (i % 2 !== 0) {
//     console.log(i, "is a odd number");
//   }
//   i++;
// }
// even number
// let i = 78;
// while (i <= 98) {
//   if (i % 2 == 0) {
//     console.log(i, "is a even number");
//   }
//   i++;
// }

// sum of some number
// let i = 91;
// let sum = 0;
// while (i <= 129) {
//   // console.log(i);
//   sum += i;
//   i++;
// }
// console.log(sum);
// some of odd number
// let i = 91;
// let sum = 0;
// while (i <= 129) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
//   i++;
// }
// console.log(sum);
// sum of even number
// let i = 52;
// let sum = 0;
// while (i <= 85) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
//   i++;
// }
// console.log(sum);
// multiplication table of 5
// let a = 5;
// let i = 1;
// while (i <= 10) {
//   console.log(a, "*", i, "=", a * i);
//   i++;
// }
// countdown timer
// let i = 21;
// while (i >= 15) {
//   console.log("CounDown", i);
//   i--;
// }
// skip a number in countdown
// let i = 0;
// while (i < 10) {
//   i++;
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }
// skip number divisible by 5
// let i = 54;
// while (i < 85) {
//   i++;
//   if (i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }
// stop the loop when reached 100
// let i = 1;
// while (i <= 200) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// break the loop when sum 100
// let i = 1;
// let sum = 0;
// while (i <= 100) {
//   sum += i;
//   if (sum >= 100) {
//     break;
//   }
//   console.log(sum);
//   i++;
// }
// display the first square root of a number
// let i = 1;
// while (i < 100) {
//   if (i > 1 && Number.isInteger(i ** 0.5)) {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// function getMenu() {
//   console.log("Burger, Pizza, Pasta");
// }
// getMenu();
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
