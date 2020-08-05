const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
//==========================================//

Array.prototype.decimalfy = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
//==========================================//

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
//==========================================//

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}
//==========================================//

// you don’t have to worry about adding new properties to objects.
// The for...of loop will only loop over the values in the object.
Array.prototype.decimalfy = function () {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// your code goes here

for (let day of days) {
  let [firstLetter] = day;
  let dayCapitalized = firstLetter.toUpperCase() + day.slice(1);
  console.log(dayCapitalized);
}
//==========================================//

const books = [
  "Don Quixote",
  "The Hobbit",
  "Alice in Wonderland",
  "Tale of Two Cities",
];
console.log(...books);
//==========================================//

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
//==========================================//
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = [...fruits, ...vegetables];

console.log(produce);
//==========================================//
// Rest parameter

const order = [20.17, 18.67, 1.5, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
//==========================================//
// indefinite amount of numbers
// Variadic functions & arguments object
function sum() {
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  return total;
}
//==========================================//
// more clear with rest parameter
function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
//==========================================//
/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...numbers) {
  let count = 0;
  let sum = 0;
  for (const number of numbers) {
    sum += number;
    count++;
  }
  if (count === 0) {
    return 0;
  }
  return sum / count;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
//==========================================//
// ¯\_(ツ)_/¯
//==========================================//
document.getElementsByClassName("brand-color");
//==========================================//
document.getElementsByTagName("p");
//==========================================//
document.getElementById("xid");
//==========================================//
// https://developer.mozilla.org/en-US/docs/Web/API/Element ex $0
// https://developer.mozilla.org/en-US/docs/Web/API/Node ex document.body
// https://developer.mozilla.org/en-US/docs/Web/API
// https://jquery.com/
//==========================================//
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// find and return the element with an ID of "header"
document.querySelector("#header");

// find and return the first element with the class "header"
document.querySelector(".header");

// find and return the first <header> element
document.querySelector("header");
//==========================================//
// first paragraph element that also has a class of: callout
document.querySelector("p.callout");
//==========================================//
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList
//==========================================//
// find and return the element with an ID of "header"
document.querySelector("#header");

// find and return a list of elements with the class "header"
document.querySelectorAll(".header");
const allHeaders = document.querySelectorAll("header");

for (let i = 0; i < allHeaders.length; i++) {
  console.dir(allHeaders[i]);
}
//==========================================//
// https://github.com/AhmedHelalAhmed/course-JS-and-the-DOM
//==========================================//
<h1 id="pick-me">
  Greetings To <span>All</span>!
</h1>;

const innerResults = document.querySelector("#pick-me").innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector("#pick-me").outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"
//==========================================//

const nanodegreeCard = document.querySelector(".card");
nanodegreeCard.textContent =
  "I will be the updated text for the nanodegreeCard element!";
nanodegreeCard.innerText; // this will get text as shown
nanodegreeCard.textContent; // this will get the text and not care about css
//==========================================//
// creates and returns a <span> element
document.createElement("span");

// creates and returns an <h3> element
document.createElement("h3");
//==========================================//
const container = document.createElement("span");
container.textContent = "right now";
//==========================================//
// create a brand new <span> element
const newSpan = document.createElement("span");

// select the first (main) heading of the page
const mainHeading = document.querySelector("h1");

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);
//==========================================//
const myPara = document.createElement("p");
const textOfParagraph = document.createTextNode(
  "I am the text for the paragraph!"
);

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);
// ===
const myPara = document.createElement("p");

myPara.textContent = "I am the text for the paragraph!";
document.body.appendChild(myPara);
//==========================================//
// The .appendChild() method will move an element from
// its current position to the new position.
const mainHeading = document.querySelector("#main-heading");
const otherHeading = document.querySelector("#other-heading");
const excitedText = document.createElement("span");

excitedText.textContent = "!!!";
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);
//==========================================//
/*
beforebegin – inserts the HTML text as a previous sibling
afterbegin – inserts the HTML text as the first child
beforeend – inserts the HTML text as the last child
afterend – inserts the HTML text as a following sibling

<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->
*/
const mainHeading = document.querySelector("#main-heading");
const htmlTextToAdd = "<h2>Skydiving is fun!</h2>";

mainHeading.insertAdjacentHTML("afterend", htmlTextToAdd);
//==========================================//
const cardContainer = $0;
cardContainer.firstChild;
cardContainer.parentElement;
const fisrtCard = cardContainer.firstElementChild;
cardContainer.removeChild(firstChild);
//==========================================//
const mainHeading = document.querySelector("h1");

mainHeading.remove();
//==========================================//
// https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
//==========================================//
const mainHeading = document.querySelector("h1");

mainHeading.style.color = "red";
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
//==========================================//
const mainHeading = document.querySelector("h1");

mainHeading.style.color = "blue";
mainHeading.style.backgroundColor = "orange";
mainHeading.style.fontSize = "3.5em";
//==========================================//
const mainHeading = document.querySelector("h1");

mainHeading.style.cssText =
  "color: blue; background-color: orange; font-size: 3.5em";
//==========================================//
document.querySelector("#quizzing-quizzes").style.cssText =
  "width: 30px; text-decoration: underline;";
//==========================================//
const mainHeading = document.querySelector("h1");

mainHeading.setAttribute(
  "style",
  "color: blue; background-color: orange; font-size: 3.5em;"
);
//==========================================//
const mainHeading = document.querySelector("h1");

// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute("id", "heading-sibling");

// use the newly added ID to access that element
document.querySelector("#heading-sibling").style.backgroundColor = "red";
//==========================================//
const mainHeading = document.querySelector("#main-heading");

// store the list of classes in a variable
const listOfClasses = mainHeading.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);
const arrayOfClasses = listOfClasses.split(" ");

// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);
mainHeading.className = "im-the-new-class";
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
//==========================================//
const mainHeading = document.querySelector("#main-heading");

mainHeading.classList.toggle("richard");
mainHeading.classList.add("richard");
mainHeading.classList.remove("richard");
mainHeading.classList.contains("richard");
//==========================================//
// https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://developer.mozilla.org/en-US/docs/Web/API/Element/className
// https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling
// https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#DOM-CSS_CSSOM
// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information
// https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style
//==========================================//
