const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

let location = 'RSA'; // Default values for location, shipping, currency, and customer count
let shipping = 0;
let currency = 'R';
let customers = 1;

if (location === 'RSA') {  // Determine shipping cost and currency based on the location
    shipping = 400;
    currency = 'R';
} else if (location === 'NAM') {
    shipping = 600;
} else {
    shipping = 800;
}


let shoes = 300 * 1;  // Calculate the cost of each item
let toys = 100 * 5;
let shirts = 150 * (NONE_SELECTED === '0' ? 0 : NONE_SELECTED);
let batteries = 35 * 2;
let pens = 5 * (NONE_SELECTED === '0' ? 0 : NONE_SELECTED);

// Calculate the total cost of items
let total = shoes + toys + shirts + batteries + pens;

// Check if the total cost exceeds 1000 and adjust shipping cost based on conditions
if (total > 1000) {
    if (location === 'NAM' && customers < 2) {
        shipping = 0; // Free shipping for NAM if there is only one customer and total exceeds 1000
    } else if (location === 'RSA') {
        shipping = 0; // Free shipping for RSA if total exceeds 1000
    }
}

// Display a warning message if shipping is free and there is only one customer
if (shipping === 0 && customers === 1) {
    console.log(FREE_WARNING);
}

// Display a banned shipping message if the location is 'NK'
if (location === 'NK') {
    console.log(BANNED_WARNIN);
} else {
        // Display the final price including shipping
    console.log('price', currency, total + shipping);
}