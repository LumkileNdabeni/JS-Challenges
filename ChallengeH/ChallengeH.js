const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

// Check if primaryPhone is a valid numerical string
const primaryValid = !isNaN(parseInt(primaryPhone)) && typeof primaryPhone === 'string';

// Check if secondaryPhone is a valid numerical string
const secondaryValid = !isNaN(parseInt(secondaryPhone)) && typeof secondaryPhone === 'string';

// Log the validation results to the console
console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )
 