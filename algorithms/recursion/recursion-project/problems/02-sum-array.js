/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/
// input: array of integers
// output: sum of array integers
// edge cases: positive and negative integers

// base case: array.length = 0
// recursive case: first element + sum of the rest
function sumArray(array) {
	const num = array[0];
	if (array.length === 0) return 0;

	return num + sumArray(array.slice(1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = sumArray;
} catch (e) {
	module.exports = null;
}
