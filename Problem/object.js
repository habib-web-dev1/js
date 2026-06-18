/*Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};*/
// const colors = {
//   red: "#ff0000",
//   green: "#00ff00",
//   blue: "#0000ff",
//   "golden rod": "#daa520",
// };
// console.log(colors["golden rod"]);
// console.log(Object.values(colors));
// const pro = Object.keys(colors);
// const val = Object.values(colors);

// for (let i = 0; i < pro.length; i++) {
//   console.log(pro[i], "=", val[i]);
// }

/*For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};*/
// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };
// // car.color = "red";
// car["color"] = "red";
// car["cond"] = "good";
// console.log(car);

/*Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
*/
// const student = {
//   name: "Hamim Sakep",
//   id: 5421,
//   physics: {
//     subject: "HSC Physics",
//     author: "Shahjahan Tapan",
//     marks: 30,
//   },
// };
// console.log(student["physics"]["marks"]);
// console.log(Object.keys(student["physics"]));
// console.log(Object.values(student["physics"]));
// console.log(student.physics.marks);

/* Count the number of properties.
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};*/
// let student = {
//   name: "Ariana Grande",
//   age: 21,
//   city: "Gaibandha",
//   isStudent: true,
// };
// console.log(Object.keys(student).length);
// console.log(Object.entries(student).length);
// let total = 0;
// for (let key in student) {
//   if (Object.keys(student)) {
//     total++;
//   }
// }
// console.log(total);

/*Loop through an object and print the key-value pairs with their types

Input:
let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
*/
// let myObject = {
//   name: "John Doe",
//   age: 25,
//   city: "Example City",
//   isStudent: true,
// };
// let prop = Object.keys(myObject);
// let val = Object.values(myObject);
// for (let i = 0; i < Object.keys(myObject).length; i++) {
//   console.log("key:", prop[i], "|", typeof val[i]);
// }
