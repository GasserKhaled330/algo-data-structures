# Introduction to Pseudocode

You might read through the problem and have a good idea about how to approach the problem logically, but maybe you're not quite sure how to translate that logical plan into working code.

In this reading, you'll learn how to use **pseudocode** to help bridge the gap between your logical plan and your code implementation. You will learn:

1. What pseudocode is (and what it isn't)
2. How to use pseudocode within the first three steps of Polya's Problem Solving Framework
3. Tips and Tricks for writing effective pseudocode

## What is Pseudocode?

Pseudocode can be thought of as a "fake" version of your code. When you write pseudocode, you are writing a plan for a solution that includes the logic, but not necessarily the syntax or methods. For example, let's say you are given the following problem:

Define a function `isPrime(number)` that returns `true` if number is prime. Otherwise, `false`. A number is prime if it is only divisible by 1 and itself.

You remember the basics of prime and composite numbers from math class, but how do you implement this into code? You can start by using pseudocode and the steps of Polya's Problem Solving framework.

## 1. Understand the Problem

After thinking about what you learned in math class, you can type out a few short comments summarizing your understanding of the problem. For example, you can jot down what you know about prime numbers, some details about the problem, and start thinking about the data types involved and any potential edge cases you might have to account for.

```javascript
// definition of prime: a number is prime if it has only two factors, itself and 1
// goal: return a boolean of whether a given number is prime or not
// input: number (integer)
// output: true or false (boolean)
// edge cases: 0? 1? does it have to be larger than one to be prime?
```

You've just completed step 1 of Polya, in pseudocode.

## 2. Make a Plan

Next, you can make a plan for solving the problem. Your pseudocode will focus on the logic you will use to solve the problem, and will not focus on specific methods and syntax. It can be helpful to write out a series of steps you will take to solve the problem. However, it's also ok to get your basic ideas down first and re-order them once you have everything figured out. For example:

```javascript
// 1. Check if number is greater than 2
//  - if not, return false (edge cases - not prime)

// 2. Iterate from 2 up to number (exclusive)
//   - Check if i is a divisor of the number (use %)
//      - if it is, return false (not prime)

// 3. After loop completes, return true
```

## 3. Carry Out the Plan

Next, you're ready to write your code. Now is the time to turn your logical plan into JavaScript methods and syntax. You can do this by typing code between the lines of your pseudocoded notes as you follow your plan. This is when you will work out the important details, such as the exact range of the while loop and how/where you will have to increment your counter.

```javascript
function isPrime(number) {
	// 1. Check if number is greater than 2
	//  - if not, return false (edge cases - not prime)
	if (number < 2) {
		return false;
	}

	// 2. Iterate from 2 up to number (exclusive)
	//   - Check if i is a divisor of the number (use %)
	//      - if it is, return false (not prime)
	let i = 2;
	while (i < number) {
		if (number % i === 0) {
			return false;
		}
		i++;
	}

	// 3. After loop completes, return true
	return true;
}
```

## What is NOT Pseudocode?

Pseudocode is a great tool to help you break down problems, plan out a logical solution, and then implement that solution into working code. But when pseudocode is used incorrectly, it can lead to some bad habits that are difficult to correct. As you practice your pseudocode, watch out for these two potential pitfalls.

### Pitfall #1: Taking the "pseudo" out of pseudocode

Coming back to the definition, pseudocode is fake code, and it's important to keep it that way! If you find yourself starting to make comments that focus more on syntax and methods, then you are no longer pseudocoding. This is a problem because it means you are skipping the first few steps of Polya and jumping right to a solution instead of taking the time to fully understand the problem and make a plan first.

What does this pitfall look like?

```javascript
// Pitfall #1: Taking the "pseudo" out of pseudocode
// DON'T DO THIS!!!

//  if number < 2
// return false

//  while i < number
// if number % i === 0
// return false

// return true
```

What's wrong with this? It's basically just JavaScript code, in the form of comments! While the plan might be an effective one, it is dangerous because you have taken a shortcut and have probably not fully thought through the logic and brainstormed potential edge cases. This approach might work with some easier problems, but will break down when you encounter more challenging problems.

### Pitfall #2: Overdoing It

It's important to remember that pseudocode is a planning tool - it helps you get to a solution, but is not part of the solution itself. As such, it's fine for the pseudocode to be a little messy, and you can think of it as a "first draft" of your work. You don't need perfect grammar or spelling (unless you are using specific variable names), and it's best to use short phrases instead of sentences and paragraphs. When you spend too much time explaning the minor details or perfecting the formatting of your plan, you risk running out of time for implementing the actual solution.

What does this pitfall look like?

```javascript
// Pitfall #2: Overdoing It
// DON'T DO THIS!!!

// A number is prime if it has only two factors, itself and 1.
// So I will need to check all of the integers between the number and zero to see if the integer is a factor of my given number.
// But 0 might be problematic, because it doesn't have any factors. And 1 is definitely not prime.

// So first, I'll check to see if the number is greater than 2, and if it is....
```

Would this long narrative help you tranlate your plan into working JavaScript? Probably not! While all of these ideas might be running through your head, you will need to organize and summarize them to write effective pseudocode.

## What You've Learned

In this article you've learned how to use pseudocode comments, or "fake" code, to help you move through the first three steps of Polya's Problem Solving Framework. This helps you move from a solid logical plan into working JavaScript.

When pseudocoding, it's important to make short notes focusing on the logic, and not jumping right into the code. It's also important to focus on the major steps of the solution, and not every minor detail. As you start practicing your pseudocode, you'll come up with a consistent style that works for you.
