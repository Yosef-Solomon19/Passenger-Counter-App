"use strict";



// Store count as 0 
// listen for clicks on the inc button
// increment the count variable when the butoon is clicked
// change the count-el in the HTML to reflect the new count
let count = 0; 
let countEl= document.getElementById("count-el");

// When the increment button is clicked 
// It will call the function to add the count by 1
// and modify the html element to reflect the current counrt.
function increment() {
    count++; 
    countEl.innerText= count; 
    console.log(count); 
}

// Save the current count to a log entry.
// Currently all it does is logs out the current count.
// 15/4/2022 Issue - No space for the first entry. Can't add space since 
// it'll add space for each entry. Only want space for the first entry.
// let entryLog = document.getElementById("entry-log");
// function save() {
//     entryLog.innerText += `${count}-`;
//     console.log(count);
// }

// 19/4/2022 // 
// Creating Save Feature 
// .innerText returns the text content of an element without CSS hidden text spacing and tags
// .textContent returns content of the element with spacing and CSS hiddent text. 
let saveEl = document.getElementById("save-el");
function save() {
    saveEl.textContent += ` ${count} -`;
    console.log(count);
    //Setting the count to 0 Everytime we hit save.
    count = 0; 
    countEl.innerText = count;
}
// When the decrement button is clicked 
// It will call the function to subtract the count by 1
// and modify the html element to reflect the current count. 
// potential issue: Can you have negative numbers ?
//                  How to prevent getting negative numbers 

function decrement() {
    count--;
    if (count < 0) {
        count = 0; 
    } else {
        countEl.innerText = count;
        console.log(count)
    }
    // countEl.innerText = count;
    // console.log(count)
}

// Save Current Entry 
// when the function is called it will 
// Save the entries made with date and time included for the day it was saved.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement#examples
// https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
// const currentDate = new Date().toLocaleDateString(
//     'en-GB', {hour: "numeric",
//               minute: "numeric"});
// console.log(currentDate);