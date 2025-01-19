function compare(a: any, b: any): number {
  // Check if both are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0; 
    }
  } else {
    // Handle non-number cases as needed; throw error or provide default comparison
    console.warn('Comparing non-numbers. Providing default comparison.');
    return String(a).localeCompare(String(b));
  }
}

let arr = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr = [5, 4, 3, 2, 1];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr = [1, '2', 3, '4', 5];
arr.sort(compare); 
console.log(arr); // Output: [1, 3, 5, '2', '4'] (Or similar, showing string vs number handling)

// Example with error handling:
function compareStrict(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Can only compare numbers!'); 
  }  
  // ... rest of the numerical comparison logic ...
}
