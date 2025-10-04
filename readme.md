1/What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:getElementById("id") → selects one element by id. Returns a single element.

getElementsByClassName("class") → selects all elements with that class. Returns a live HTMLCollection.

querySelector("selector") → selects first element matching any CSS selector.

querySelectorAll("selector") → selects all elements matching CSS selector. Returns a static NodeList.

2/How do you create and insert a new element into the DOM?
Ans:
const div = document.createElement("div"); // create
div.textContent = "Hello";
document.body.appendChild(div);            // insert

3/What is Event Bubbling and how does it work?
Ans: When an event happens on an element, it first triggers on that element and then bubbles up to its parent elements, all the way to the <html> element.

Example:

<div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});


Clicking the button logs:

Child 
Parent 

4/What is Event Delegation in JavaScript? Why is it useful?
Ans:
Instead of adding event listeners to many child elements, you add one listener to a parent and handle events from its children using event.target.

Example:

document.getElementById("parent").addEventListener("click", (e) => {
  if(e.target.tagName === "BUTTON"){
    console.log("Button clicked:", e.target.textContent);
  }
});
Why useful:

Fewer event listeners → better performance

Works for dynamically added elements

5/What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() → stops the default browser action (like following a link or submitting a form).

stopPropagation() → stops the event from bubbling or capturing to parent/ancestor elements.