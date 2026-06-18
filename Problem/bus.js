let age = 50;
let fare = 800;
if (age < 10) {
  console.log("Your ticket is Free");
} else if (age >= 10 && age < 30) {
  let discount = (fare * 50) / 100;
  let actualFare = fare - discount;
  console.log(actualFare);
} else if (age >= 60) {
  let discount = (fare * 15) / 100;
  let actualFare = fare - discount;
  console.log(actualFare);
} else {
  console.log("Your Fare 800tk");
}
