// Count how many times a string has the letter a
// let countA = "sasasasasasa";
// let sum = 0;
// for (let i = 0; i < countA.length; i++) {
//   if (countA[i] === "a") {
//     sum++;
//   }
// }
// console.log(sum);
// for (let char of countA) {
//   if (char === "a") {
//     sum++;
//   }
// }
// console.log(sum);
// let i = 0;
// while (i < countA.length) {
//   if (countA[i] === "a") {
//     sum++;
//   }
//   i++;
// }
// console.log(sum);

// Count how many times a string has the letter a or A
// let cont = "sadAgAbahahA";
// let sum = 0;
// for (let con of cont) {
//   if (con === "a" || con === "A") {
//     sum++;
//   }
// }
// console.log(sum);

// Check whether a string contains all the vowels a, e, i, o, u
// let str = "The Quick Brown Fox Jumps Over The Lazy Dog";

// str = str.toLowerCase();
// let hasAllVowels =
//   str.includes("a") &&
//   str.includes("e") &&
//   str.includes("i") &&
//   str.includes("o") &&
//   str.includes("u");

// console.log(hasAllVowels); // true or false

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// let str = "doxypYnX";
// let newStr = "";
// for (let con of str) {
//   if (con === "x") {
//     newStr += "y";
//   } else if (con === "X") {
//     newStr += "Y";
//   } else if (con === "y") {
//     newStr += "x";
//   } else if (con === "Y") {
//     newStr += "X";
//   } else {
//     newStr += con;
//   }
// }
// console.log(str);
// console.log(newStr);
// Capitalize Every first Letter of each word in a String

// let line = "he is very good boy and live in dhaka";
// let runCase = line.split(" ");
// let finCase = [];
// for (let i = 0; i < runCase.length; i++) {
//   let newCase = runCase[i];
//   let conv = newCase.charAt(0).toUpperCase().concat(newCase.slice(1));
//   finCase.push(conv);
// }
// let result = finCase.join(" ");
// console.log(result);
