1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: the getElementById can return only one element with a specified value and performance is better


Answer: the getElementsByClassName can returns a collection of elements with a specified class name it automatically updates when elements with the same class name are added to the dom and performance is better but not like getElementById


Answer: the querySelector can select all elements but it only returns the first value that matches the selector but it is a bit slow compared to ID and Class method


Answer:  the querySelectorAll can select all elements that match the specified css selector and return them


2. How do you create and insert a new element into the DOM?

Answer:     const newSection = document.createElement("div");
            newSection.innerHTML =`<div> this is the new section </div>`;


3. What is Event Bubbling? And how does it work?


Answer: Event Bubbling like a bubble rising from the bottom of a fish tank to the surface. In web development, when an event like a click happens on an element it doesn't just stay there. It "bubbles up" to its parent elements one by one until it reaches the very top


And how does it work

answer: if i click a button inside a div the event starts at the button then the event will trigger all the parent then it will stop


4. What is Event Delegation in JavaScript? Why is it useful?


Answer:  Event Delegation is like Event Bubbling the difference and Event Delegation is useful because it save memory its can help to manage events for dynamically added elements


5. What is the difference between preventDefault() and stopPropagation() methods?


Answer:  preventDefault() is used to stop the default browser behavior stopPropagation() is used to stop bubbling up to parent element