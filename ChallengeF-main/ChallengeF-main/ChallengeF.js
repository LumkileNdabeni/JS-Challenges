// Initialize variables
let date = 2050; // Replaced colons with equel sign and added semi-colons to close of lines
let status = 'student';
let count = 0;

// Check if the year is 2050
if (date === 2050) { 

	// Log holidays for the year 2050
	console.log("January", 'New Year’s Day'); // Closed off bracket and added semi-colons
	console.log("March", 'Human Rights Day');
	date = 'April';
	console.log(date, 'Family Day');
	console.log(date, 'Freedom Day');
	count = count + 4 // Removed "let"

	// Check if the status is 'student'
	if (status === "student") { // Changed comparison sign
	  console.log('June', 'Youth Day');
	count = count + 1;
  }
}

// Print holidays for the remaining months
	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');

	// Change the date to 'December' and log December's holiday
	date = 'December';
	console.log(date, 'Day of Reconciliation');
	count = count + 3;

	// Check if the status is incorrectly set to 'parent'
	if (status = "parent") {
	  console.log(date, 'Christmas Day');
	  count = count + 1;
  }

  // Print another December holiday and update the count
	console.log(date, 'Day of Goodwill')
	count = count + 1 // Removed "let"

// Output final results
console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);
