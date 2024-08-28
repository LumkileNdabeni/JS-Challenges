// alex.js

/* Changed variable definitions */
let firstname = "Alex"
let surname = "Naidoo"
export let role = "Head of Marketing" /*exported role*/

let display= firstname + " " + surname + " (" + role + ")"

document.querySelector('#alex').innerText = display

