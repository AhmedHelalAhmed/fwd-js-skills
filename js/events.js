// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);
// https://developers.google.com/web/tools/chrome-devtools/console/events#monitor_events
//==========================================//
// EventTarget
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
//==========================================//
const mainHeading = document.querySelector("h1");

mainHeading.addEventListener("click", function () {
  console.log("The heading was clicked!");
});
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//==========================================//
const lotsOfElements = document.querySelectorAll(".quizzing-quizzby");
const element = lotsOfElements[2];

element.addEventListener("animationend", function () {
  const mainHeading = document.querySelector("h1");

  mainHeading.style.backgroundColor = "purple";
});
//==========================================//
document.addEventListener("keypress", function () {
  document.body.remove();
});
//==========================================//
// https://developer.mozilla.org/en-US/docs/Web/Events
//==========================================//
// removeEventListener
// dispatchEvent
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
//==========================================//
function myEventListeningFunction() {
  console.log("howdy");
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener("click", myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener("click", myEventListeningFunction);
//==========================================//
// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener("click", function myEventListeningFunction() {
  console.log("howdy");
});

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener("click", function myEventListeningFunction() {
  console.log("howdy");
});
//==========================================//
// https://developers.google.com/web/updates/2015/05/easily-jump-to-event-listeners
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
//==========================================//
document.addEventListener("click", function () {
  console.log("The document was clicked");
});

document.body.addEventListener("click", function () {
  console.log("The body element was clicked");
});
//==========================================//
const items = document.querySelectorAll(".quizzing-quizzes");
const el = items[1];

el.addEventListener(
  "click",
  function () {
    console.log("You clicked on the 2nd quizzing-quizzes item!");
  },
  true
);
//==========================================//
// An "event" is an "evt" is an "e"
//==========================================//
const links = document.querySelectorAll("a");
const thirdLink = links[2];

thirdLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Look, ma! We didn't navigate to a new page!");
});
//==========================================//
/*
https://www.w3.org/TR/DOM-Level-3-Events/#event-flow
https://www.w3.org/TR/DOM-Level-3-Events/#capture-phase
https://www.w3.org/TR/DOM-Level-3-Events/#target-phase
https://www.w3.org/TR/DOM-Level-3-Events/#bubble-phase
https://developer.mozilla.org/en-US/docs/Web/API/Event
https://developer.mozilla.org/en-US/docs/Web/Events
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/
//==========================================//
// 200 event listeners wrong
const myCustomDiv = document.createElement("div");

for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = "This is paragraph number " + i;

  newElement.addEventListener("click", function respondToTheClick(evt) {
    console.log("A paragraph was clicked.");
  });

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
//==========================================//
// refactor method 1
//  we still have two hundred event listeners
const myCustomDiv = document.createElement("div");

function respondToTheClick() {
  console.log("A paragraph was clicked.");
}

for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = "This is paragraph number " + i;

  newElement.addEventListener("click", respondToTheClick);

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
//==========================================//
// refactor methd #2 best solution
// a single event listener
// a single listener function
const myCustomDiv = document.createElement("div");

function respondToTheClick() {
  console.log("A paragraph was clicked.");
}

for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = "This is paragraph number " + i;

  myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener("click", respondToTheClick);

document.body.appendChild(myCustomDiv);
//==========================================//
const myCustomDiv = document.createElement("div");

function respondToTheClick(evt) {
  console.log("A paragraph was clicked: " + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = "This is paragraph number " + i;

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener("click", respondToTheClick);
//==========================================//
/*
<article id="content">
  <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>

  <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
</article>

*/
/*
The .nodeName property will return a capital string, 
not a lowercase one. So
when you perform your check make sure to either:
*/
document.querySelector("#content").addEventListener("click", function (evt) {
  console.log("A span was clicked with text " + evt.target.textContent);
});
document.querySelector("#content").addEventListener("click", function (evt) {
  if (evt.target.nodeName === "SPAN") {
    // ← verifies target is desired element
    console.log("A span was clicked with text " + evt.target.textContent);
  }
});
//==========================================//
// https://javascript.info/event-delegation
// https://davidwalsh.name/event-delegate
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
//==========================================//
document.addEventListener("DOMContentLoaded", function () {
  console.log("the DOM is ready to be interacted with!");
});
//==========================================//
// load waits until all of the images, stylesheets, etc. have been loaded
//==========================================//
const t0 = performance.now();
for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = "This is paragraph number " + i;

  document.body.appendChild(newElement);
}
const t1 = performance.now();
console.log("This code took " + (t1 - t0) + " milliseconds");
//==========================================//
// refactor method #1
const t0 = performance.now();

const myCustomDiv = document.createElement("div");

for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement("p");
  newElement.innerText = "This is paragraph number " + i;

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
const t1 = performance.now();
console.log("This code took " + (t1 - t0) + " milliseconds");
//==========================================//
// Testing Code Performance
// performance.now() => timestamp
// accurate to five thousandths of a millisecond (5 microseconds)
// https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
//==========================================//
const startingTime = performance.now();

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    console.log("i and j are ", i, j);
  }
}

const endingTime = performance.now();
console.log("This code took " + (endingTime - startingTime) + " milliseconds.");
//==========================================//
// DocumentFragment - optimize
// using a DocumentFragment to prevent performance issues
// and to prevent adding unnecessary elements to the DOM.
const fragment = document.createDocumentFragment(); // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
  const newElement = document.createElement("p");
  newElement.innerText = "This is paragraph number " + i;

  fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!
//==========================================//
// https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
//==========================================//
/*
Reflow is the process of the browser laying out the page. It happens when you first display the DOM (generally after the DOM and CSS have been loaded), and happens again every time something could change the layout. This is a fairly expensive (slow) process.

Repaint happens after reflow as the browser draws the new layout to the screen. This is fairly quick, but you still want to limit how often it happens.

For example, if you add a CSS class to an element, the browser often recalculates the layout of the entire page—that's one reflow and one repaint!
*/
//==========================================//
// hide #comments
document.getElementById("comments").style.display = "none";

// delete spam comments

// show #comments
document.getElementById("comments").style.display = "block";
//==========================================//
// https://www.udacity.com/course/website-performance-optimization--ud884
// https://developers.google.com/speed/articles/reflow
// https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing
// https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#rendering
// http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/
//==========================================//
function addParagraph() {
  const para = document.createElement("p");
  para.textContent = "JavaScript is single threaded!";
  document.body.appendChild(para);
}

function appendNewMessage() {
  const para = document.createElement("p");
  para.textContent = "Isn't that cool?";
  document.body.appendChild(para);
}

addParagraph();
appendNewMessage();
//==========================================//
// https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
// https://en.wikipedia.org/wiki/Call_stack
//==========================================//
//  function handleKeyPresses is not invoked immediately,
//  it's invoked at some later point in time.
const links = document.querySelectorAll("input");
const thirdField = links[2];

thirdField.addEventListener("keypress", function handleKeyPresses(event) {
  console.log("a key was pressed");
});
//==========================================//
/*
The code will run in this order:

'howdy' will be logged to the console
'ice cream is tasty' will be logged to the console
The string '123' will only be logged if there's a click. 
If the page is never clicked, then this code might not ever run! But where is it? 
Where did the numbers function holding the console.log('123'); code go?
*/
console.log("howdy");
document.addEventListener("click", function numbers() {
  console.log("123");
});
console.log("ice cream is tasty");
// This happens because of the JavaScript Event Loop!

//==========================================//
/*
Not all of the code that we write is 100% JavaScript code. 
Some of the code is interacting with the Web APIs (also known as "browser APIs"). 
There are many more examples, 
but both .addEventListener() and setTimeout() are Web APIs.
*/
console.log("howdy"); // 1
document.addEventListener(
  "click", // 2
  function numbers() {
    console.log("123");
  }
);
console.log("ice cream is tasty"); // 3
//  JavaScript's run-to-completion nature
//==========================================//
// https://www.youtube.com/watch?v=uBdemYBG-ek
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
//==========================================//
setTimeout(function sayHi() {
  console.log("Howdy");
}, 1000); // 1 second
//==========================================//
setTimeout(function sayHi() {
  console.log("Howdy");
}, 0); // ← 0 milliseconds!
//==========================================//
// helal
let count = 1;

function generateParagraphs() {
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 500; i++) {
    const newElement = document.createElement("p");
    newElement.textContent = "This is paragraph number " + count;
    count = count + 1;

    fragment.appendChild(newElement);
  }

  document.body.appendChild(fragment);

  if (count < 20000) {
    setTimeout(generateParagraphs, 0);
  }
}

generateParagraphs();
/*

This code starts off by setting a count variable to 1. 
This will keep track of the number of paragraphs that have been added. 
The generateParagraphs() function will add 500 paragraphs to the page each time it's invoked.
The interesting thing is that there's a setTimeout()
call at the end of the generateParagraphs() function. 
If there are less than twenty thousand elements, 
then the setTimeout() will be used to 
call the generateParagraphs() function.

If you try running this code on a page, 
you can still interact with the page while the code is running. 
It doesn't lock up or freeze the page. 
And it doesn't lock up or freeze because of the setTimeout() calls.
*/
//==========================================//
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://javascript.info/settimeout-setinterval
//==========================================//
