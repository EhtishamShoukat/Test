//Write a JavaScript class Animal with a method speak(). Then, create a subclass Dog that overrides the speak() method.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name}Amimal Noice.`);
    }
}
class Dog extends Animal {
   speak() {
        console.log(`${this.name} barks.`);
    }
}
//Write a JavaScript function that checks if a string is a palindrome (reads the same backward as forward).
function palinDrome(str) {
   const convertedStr = str.toLowerCase().replace();
     return convertedStr === convertedStr.split('').reverse().join('');
}
console.log(palinDrome("Boy, ehtisham, shoukat, ali"))
console.log(palinDrome("pop"));
console.log(palinDrome("hello")); 
//Write a JavaScript function that removes duplicates from an array.
//input  ⁠= [1,  2,  "hello",  "world",  { name: "Alice", age: 30 },  { name: "Alice", age: 30 },   [1, 2, 3],  [1, 2, 3],  "hello",  3,  [4, 5, { nested: "object" }],  [4, 5, { nested: "object" }],  { nested: [1, 2, 3] },  { nested: [1, 2, 3] }]
const input = [
    1, 2, "hello", "world", { name: "Alice", age: 30 }, { name: "Alice", age: 30 },
    [1, 2, 3], [1, 2, 3], "hello", 3, [4, 5, { nested: "object" }],
    [4, 5, { nested: "object" }], { nested: [1, 2, 3] }, { nested: [1, 2, 3] }
];
function removeDuplicates(arr) {
    const uniqueItems = new Map();
for (let item of arr) {
        let key = typeof item === 'object' ? JSON.stringify(item) : item;
        uniqueItems.set(key, item); 
    }

    return Array.from(uniqueItems.values());
}



const result = removeDuplicates(input);
console.log(result);
//⁠Write JavaScript code to create a new HTML element, add it to the DOM, and attach an event listener to it.
//Create a new element (a button in this case)
const newButton = document.createElement('button'); 
newButton.textContent = 'Click Me'; 
document.body.appendChild(newButton); 

newButton.addEventListener('click', function() {
    alert('Button was clicked!'); 
});
