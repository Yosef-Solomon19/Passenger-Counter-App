"use strict";



// Store count as 0 
// listen for clicks on the inc button
// increment the count variable when the butoon is clicked
// change the count-el in the HTML to reflect the new count
let count = 0; 
let countEL= document.getElementById("count-el");

// When the increment button is clicked 
// It will call the function to add the count by 1
// and modify the html element to reflect the current counrt.
function increment() {
    count++; 
    countEL.innerText= count; 
    console.log(count); 
}

// Save the current count to a log entry.
// Currently all it does is logs out the current count.
// 15/4/2022 Issue - No space for the first entry. Can't add space since 
// it'll add space for each entry. Only want space for the first entry.
let entryLog = document.getElementById("entry-log");
function save() {
    entryLog.innerText += `${count}-`;
    console.log(count);

}
