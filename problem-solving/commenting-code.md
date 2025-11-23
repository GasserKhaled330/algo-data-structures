# Commenting Code

you will learn:

1. How to use comments to walkthrough, debug, and optimize a solution
2. How to decide which comments to keep and which to remove from a completed project
3. How to use comments to explain your code to your teammates

## Using Comments to Walkthrough, Debug and Optimize a Solution

Once you have a solution in place, it is important to walk through the solution with a few potential inputs to check whether the code behaves as intended. You can use comments in your code to track key variables as you step through the code, line by line. This is the fourth step of Polya: Looking back to improve your solution.

For example, you could use comments to track the variables in the `isPrime(number)` function from the intro to pseudocode reading. Let's walkthrough the code to check whether _5_ is a prime number:

```javascript
function isPrime(number) {
	// number = 5
	if (number < 2) {
		// false
		return false;
	}

	let i = 2; // i = 2
	while (i < number) {
		// true
		if (number % i === 0) {
			// 5 % 2 === 0   false
			return false;
		}
		i++; // i = 3
	}

	return true;
}
```

As the example above shows, you can use end-of-line comments to track your variables as you step through each section of code. As you move on to a new iteration of the while loop, you can update the values of each variable. If there is a bug in your logic or a syntax error in your code, the comments from this walkthrough should help you to find and fix the bug.

Likewise, this process will also help you to find any inefficiencies or redundancies in your code, and will help you see where you could make changes to optimize your code.

## Keeping or Deleting Comments?

So far, in working through the `isPrime(number)` problem, you've written a lot of comments in planning, coding out, and walking through the solution.

If you kept all of those comments, your code might look like this:

```javascript
// definition of prime: a number is prime if it has only two factors, itself and 1
// goal: return a boolean of whether a given number is prime or not
// input: number (integer)
// output: true or false (boolean)
// edge cases: 0? 1? does it have to be larger than one to be prime?

function isPrime(number) {
	// number = 5
	// 1. Check if number is greater than 2
	//  - if not, return false (edge cases - not prime)
	if (number < 2) {
		// false
		return false;
	}

	// 2. Iterate from 2 up to number (exclusive)
	//   - Check if i is a divisor of the number (use %)
	//      - if it is, return false (not prime)
	let i = 2; // i = 2
	while (i < number) {
		// true
		if (number % i === 0) {
			// 5 % 2 === 0   false
			return false;
		}
		i++; // i = 3
	}

	// 3. After loop completes, return true
	return true;
}
```

When you are happy with a solution, it might be tempting to delete all of your planning and walkthrough notes so you can focus on your clean code. Although the example above looks pretty overwhelming, try to resist the temptation to just delete ALL of your comments!

Instead, take a minute or two to clean up those comments. Rather than including all of your planning and walkthrough notes, only include notes that help to **explain** your completed code. This could include a short description of what the code does, plus an explanation of why you chose to implement code in a certain way if it might be unclear to others.

For the `isPrime(number)` example, your cleaned-up code might look like this:

```javascript
function isPrime(number) {
  // Base case: any numbers less than 2 are not prime
  if (number < 2) {
    return false;
  }

  let i = 2;  // start from base case
  while (i < number) {   // do not include the number itself
    if (number % i === 0) {   // check if i is a factor of the number
      return false;
    }
    i++;
  }

  // number must be prime if it has not met any of the above conditions
  return true;
}
```

In this example, minimal comments are included to explain WHAT certain lines of code do, and WHY the programmer made certain choices. This approach is helpful for you to understand your code quickly when you look back at it in the future, and more importantly, will help your future teammates.

## Comments as a Form of Documentation

While commenting your code is an important skill for learning, it is even more important once you are working as a developer on an engineering team. On the job, you will continuously work with code written by others, and they will be working with your code. It is your responsibility to make sure that the code you write will be easily understood by your teammates, so that they can quickly jump in and collaborate.

For example, you might choose to write a function in a certain way so that it can be called from multiple places within a large application. In order for this to work, you may need to add an optional argument that is used in some function calls, but not others. Adding a comment to explain why there is an optional argument, and when it is used, can be incredibly helpful for your current and future teammates. This will help them to quickly understand how a change they make in one place could affect other parts of the application. As you start to work on larger project with larger teams, this form of documentation becomes more and more important.

## Lessons Learned

Including comments in your code is an important learning tool, and is equally important in collaborating with others as a professional web developer. Pseudocode can be used to help plan your solutions, while commenting can also be used to debug and optimize solutions. When you finish coding, it is important to take the time to clean up your comments and make sure you include comments that will explain your code and your approach to others.
