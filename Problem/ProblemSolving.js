const numbers = [1, 7, 3, 9, 7, 5];
// find the shortest number from this array
function Smallest(arr) {
  return Math.min(...arr);
}
console.log(Smallest(numbers));
