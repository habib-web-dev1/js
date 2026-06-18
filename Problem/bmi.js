let weight = 110;
let height = 72;
let actualHeight = height * 0.0254;
let BMI = weight / (actualHeight * actualHeight);
console.log(BMI.toFixed(2));
if (BMI < 18.5) {
  console.log("You are Under weight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are Normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are Overweight");
} else {
  console.log("You are Obese");
}
