let date = 2050; // Replaced colons with equel sign and added semi-colons to close of lines
let status = 'student';
let count = 0;

if (date === 2050) { 
	console.log("January", 'New Year’s Day'); // Closed off bracket and added semi-colons
	console.log("March", 'Human Rights Day');
	date = 'April';
	console.log(date, 'Family Day');
	console.log(date, 'Freedom Day');
	count = count + 4 // Removed "let"

	if (status === "student") { // Changed comparison sign
	  console.log('June', 'Youth Day');
	count = count + 1;
  }
}

	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');
	date = 'December';
	console.log(date, 'Day of Reconciliation');
	count = count + 3;

	if (status = "parent") {
	  console.log(date, 'Christmas Day');
	  count = count + 1;
  }

	console.log(date, 'Day of Goodwill')
	count = count + 1 // Removed "let"


console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);
