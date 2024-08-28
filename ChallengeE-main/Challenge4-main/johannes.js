// johannes.js

/* Changed variable definitions */
let firstname = "Johannes" 
let surname = "Potgieter"
 export let role = "Intern" /*exported role*/

let display= firstname + " " + surname + " (" + role + ")"

document.querySelector('#johannes').innerText = display
