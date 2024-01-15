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
    button.textContent = 'CLOSE REVIEW';
  } else {
    review.classList.add("d-none");
    button.textContent = 'SEE REVIEW';
  }
});
