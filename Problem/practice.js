var apple = 380;
var orange = 320;
var cash = 1000;
var bill = apple + orange;
var change = cash - bill;
console.log(change);
var math = 75.25;
var bang = 65;
var phy = 35.45;
var bio = 80;
var che = 99.5;
var totalMarks = math + bang + phy + bio + che;
console.log(totalMarks);
var average = totalMarks / 5;
console.log(average.toFixed(2));
var givenNumber = 119;
var remainder = givenNumber % 5;
console.log(remainder);
const b = isNaN("11");
console.log(b);
const a = isNaN(2 - 10);
console.log(a);

let burger = 300;
if (burger > 500) {
  console.log("You got free Coke");
} else {
  console.log("coke 30tk");
}
