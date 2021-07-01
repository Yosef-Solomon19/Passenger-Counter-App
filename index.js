
let countEl= document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0; 

function increment() {
    count += 1;
    countEl.textContent = count;
    return;
}

function save() {
    let countstr = count + " - "; 
    saveEL.textContent += countstr;
}