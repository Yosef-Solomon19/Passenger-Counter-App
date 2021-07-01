
let countEl= document.getElementById("count-el");
let saveEl = docume.getElementById("save-el");

let count = 0; 

function increment() {
    count += 1;
    countEl.textContent = count;
    return;
}