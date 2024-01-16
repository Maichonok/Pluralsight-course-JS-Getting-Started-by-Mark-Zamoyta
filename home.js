// let key = 42;

//  function getSecretCode(value) {

//     let keyGenerator = function() {
//         let key = 12;
//         console.log('in keyGenerator: ', key);
//         return key;
//     }
//     let code = value * keyGenerator();
//     console.log(' in getSecretCode: ', key);
//     return code;
//  }

//  let secretCode = getSecretCode(2);
//  showMessage(secretCode);

changePercentOff(30);

/* Passing Objects to Functions
let person = {
    name: "John",
    age: 32,
    partTime: false
};

function incrementAge(p) {
    p.age++;
}

incrementAge(person);

showMessage(person.age);
*/

// let s = 'Hello';
// showMessage(s.charAt(1));

const header = document.getElementById("message");
header.style.fontWeight = "800";

const button = document.getElementById("see-review");
button.addEventListener("click", function () {
  const review = document.getElementById("review");
  if (review.classList.contains("d-none")) {
    review.classList.remove("d-none");
    button.textContent = "CLOSE REVIEW";
  } else {
    review.classList.add("d-none");
    button.textContent = "SEE REVIEW";
  }
});

const values = ["a", "b", "c"];
// values. push('d', 'e', 'f');
// const last = values.pop();
// const first = values.shift();
// values[0] = 'aaa';
// console.log(Array.isArray(values));
// console.log(values[0]); //aaa
// console.log(values, last);
// console.log(values, first);
values.unshift("hello", "world");
console.log(values); //['hello', 'a', 'b', 'c']

//slice()
const array = ["a", "b", "c"];
const newArray = array.slice(1, 2);
console.log(newArray); //b

//splice()
const arrayNew = ["a", "b", "c"];
arrayNew.splice(1, 1);
console.log(arrayNew); // a c

const arrayOfUser = ["a", "b", "c"];
console.log(arrayOfUser.indexOf("a")); //0
console.log(arrayOfUser.indexOf("v")); //-1

const myValues = ["a", "b", "c", "d", "z"];
const set = myValues.filter(function (item) {
  console.log("item: ", item);
  return item > "b";
});
console.log(set); //["c", "d", "z"]

const myArray = ["a", "bbb", "c"];
const found = values.find(function (item) {
  return item.length > 1;
});
console.log(found); //bbb

const letters = ["a", "b", "c"];

letters.forEach(function (item) {
  console.log(item); // a b c
});

const containers = document.getElementsByClassName("container");
containers[0].classList.add("d-none");
console.log(containers);

const app = {
  productId: 12345,
  userName: "Joe",
  orderNumber: 789,
};

let productId = 456;

function showProductId() {
  // let productId = 12;
  function fix() {
    console.log("in fix: ", productId);
  }
  // console.log(productId);
  // console.log(app.productId);
  fix();

  console.log("in showProductId: ", productId);
}
showProductId();
