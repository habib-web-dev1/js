/*Task-2
Take four parameters. Multiply the four numbers and then return the result*/
// function mult(par1, par2, par3, par4) {
//   let mul = par1 * par2 * par3 * par4;
//   return mul;
// }
// console.log(mult(1, 2, 3, 4));

/*Task-2Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.*/
// function number(num) {
//   if (num % 2 === 0) {
//     let result = num / 2;
//     return result;
//   }
//   if (num % 2 === 1) {
//     let result = num * 2;
//     return result;
//   }
// }
// console.log(number(11));
/*Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.*/
// function make_avg(array) {
//   if (!Array.isArray(array)) {
//     return "Invalid";
//   }
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (Number.isInteger(array[i])) {
//       result += array[i];
//     }
//   }
//   let finalResult = result / array.length;
//   return finalResult;
// }
// console.log(make_avg([10, 12, 24, 26]));
// console.log(make_avg([20, 42, 24, 26]));
// console.log(make_avg(["a", 45, 27, 26]));
/*Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.*/
// function count_zero(number) {
//   if (typeof number !== "string") {
//     return "Invalid";
//   }
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] !== "0" && number[i] !== "1") {
//       return "Invalid";
//     }
//     if (number[i] === "0") {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(count_zero("01015010"));
// function count_zero(str) {
//   if (typeof str !== "string") return "Invalid";

//   // split string into array, filter only "0", then count
//   return str.split("0").length - 1;
// }
// console.log(count_zero("01018100010")); // 4
/*Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd*/
// function odd_even(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   }
//   if (number % 2 === 1) {
//     return "Odd";
//   }
// }
// console.log(odd_even(45));
/*Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.*/
// function tem(cel) {
//   const faren = (cel * 9) / 5 + 32;
//   return faren;
// }
// console.log(tem(10));
/*Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2
sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0*/
// function find(number) {
//   let result = 0;
//   for (let num of number) {
//     if (num === 5) {
//       result++;
//     }
//   }
//   return result;
// }
// console.log(find([5, 6, 5, 5, 5, 11, 12, 98, 5]));
/*Task-3:
Write a function to count the number of vowels in a string.*/
// function vow(str) {
//   if (typeof str === "string") {
//     let count = 0;
//     for (let num of str) {
//       num = num.toLowerCase();
//       if ("aeiou".includes(num)) {
//         count++;
//       }
//     }
//     return count;
//   }
//   return "Your input is wrong";
// }
// console.log(vow("hihowareyou"));
/*Task-4:
Write a function to find the longest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming*/
// function long(sentence) {
//   let words = sentence.split(" ");
//   let large = words[0];
//   for (let word of words) {
//     if (word.length > large.length) {
//       large = word;
//     }
//   }
//   return large;
// }
// console.log(long("I am learning Programming to become a programmer"));
/*Task-5:
Generate a random number between 10 to 20.*/
// let rand = Math.round(Math.random() * 10 + 10);
// console.log(rand);
/*Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];*/
// const heights2 = [167, 190, 120, 165, 137];
// const low = Math.min(...heights2);
// console.log(low);
/*Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];*/
// const heights2 = ["rahim", "robin", "rafi", "ronttyy", "ras"];
// function low(heights2) {
//   let high = heights2[0];
//   for (let num of heights2) {
//     if (high.length > num.length) {
//       high = num;
//     }
//   }
//   return high;
// }
// console.log(low(heights2));
/*Task-3:
Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.*/
// function calculateElectronicsBudget(...costs) {
//   let total = 0;
//   for (let cost of costs) {
//     total += cost;
//   }
//   return total;
// }
// console.log(calculateElectronicsBudget(35000, 15000, 20000));
/*ask-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
Input
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];*/
// const phones = [
//   { model: "PhoneA", brand: "Iphone", price: 95000 },
//   { model: "PhoneB", brand: "Samsung", price: 40000 },
//   { model: "PhoneC", brand: "Oppo", price: 26000 },
//   { model: "PhoneD", brand: "Nokia", price: 35000 },
//   { model: "PhoneE", brand: "Iphone", price: 105000 },
//   { model: "PhoneF", brand: "HTC", price: 48000 },
// ];
// function findAveragePhonePrice(price) {
//   let avg = 0;
//   for (let phone of phones) {
//     avg += phone.price;
//   }
//   let avgPrice = parseInt(avg / phones.length);
//   return avgPrice;
// }
// console.log(findAveragePhonePrice(phones));
// console.log(phones.length);
/*Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];*/
// const employees = [
//   { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//   { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//   { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//   { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];
// function salary(moneys) {
//   let totalSalary = 0;
//   let indSalary = 0;
//   for (let money of moneys) {
//     indSalary = money.experience * money.increment + money.starting;
//     totalSalary += indSalary;
//   }
//   return totalSalary;
// }
// console.log(salary(employees));
