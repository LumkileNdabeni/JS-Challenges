const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'


// Function to format numbers with a thousand separator
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Only change below this line

const owed = Math.abs(parseFloat(leoBalance) + parseFloat(sarahBalance)); // Use Math.abs() for a positive total
const formattedOwed = formatNumber(owed.toFixed(2)); // Format to two decimal places and add thousands separator
const leo = `${leoName} ${leoSurname} Owed R${sarahBalance}`;
const sarah = `${sarahName} ${sarahSurname} Owed R${sarahBalance}`;
const total = `Total amount owed: R${formattedOwed}`;
const result = `${leo}\n${sarah}\n${divider}\n${divider}\n${total}\n${divider}`;

console.log(result);
