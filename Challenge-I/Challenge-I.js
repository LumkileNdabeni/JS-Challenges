const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

let balance = 0;


if (hourOfDay === 0 && minuteOfDay === 0) {
    const taxAsDecimal = parseFloat(tax) / 100; // Converts taxt percentage to decimal
    const startingAfterTax = salary * (1 - taxAsDecimal); 
    const balance = startingAfterTax - transport - food - rent; // Calculates the remaining balance


    console.log(balance.toFixed(2)); 
}