# The Secret to Solving Any Problem

what do you do when you come across a problem you don't know how to solve?

You're going to learn four steps to solve any problem. You read that right: You can apply these steps to ANY problem, from _whiteboard interviews_, to _building projects_, to r*efactoring legacy code*.

1. Understand the problem
2. Make a plan
3. Carry out the plan
4. Look back and improve your solution

Credit to mathematician [George Polya](https://en.wikipedia.org/wiki/How_to_Solve_It) for coming up with these steps.

## 1. Understand the problem

Seems obvious, right? Don't take this step lightly! This is the most important and usually the most difficult step. If you understand the problem, the plan becomes obvious. If you have a solid plan, the code is easy to write. First, you must understand the problem.

Let's say you're in a job interview and are given the following problem:

> Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
>
> Input: [0,1,0,3,12]
>
> Output: [1,3,12,0,0]
>
> You must do this in-place without making a copy of the array.
>
> You must minimize the total number of operations.

You have a limited amount of time so you may be tempted to start coding as soon as possible. Resist the temptation! Take a few minutes, read over the problem to make sure you understand.

- What is the problem asking you to do?
- Can you restate the problem in your own words?
- Do you understand all of the words in the problem?
- Do you have enough information to solve the problem?
- Are there any _constraints_ or _edge cases_ to consider?

## 2. Make a plan

Once you have a good understanding of the problem, you may again be tempted to start running commands in the terminal. Hang on! A few minutes spent planning can save you hours of going down the wrong path.

- Break down the problem into smaller steps
- Draw out the problem
- Solve a simpler version of the problem
- Look for patterns
- Work backwards
- Guess and check

In computer science, like any science, it's perfectly reasonable to come up with a hypothesis (guess) then test it out (check). Get creative!

Here's a plan for the zeroes problem:

1. Set a pointer to the last element in the array
2. Walk through each element of the array
3. If the element is zero, swap its position with the element at the pointer, then decrement the pointer.

Sounds good! Now you can start coding!

## 3. Carry out the plan

This is the easiest of all the steps but it's also the one where most people get stuck. The reason for that is usually from coding without a plan, or executing a flawed plan because they don't quite understand the problem. If you've put time into steps 1 and 2, step 3 is mostly remembering syntax.

```javascript
function moveZeroes(nums) {
	// 1. Set a pointer to the last element in the array
	// 2. Walk through each element of the array
	// 3. If the element is zero, swap its position with the element at the pointer,
	// then decrement the pointer.
}
```

Here, you can take your plan and drop it straight into your code via comments. Now, you just have to translate the comments into code.

```javascript
function moveZeroes(nums) {
	// 1. Set a pointer to the last element in the array
	let last = nums.length - 1;
	// 2. Walk through each element of the array
	for (let i = 0; i < last; i++) {
		// 3. If the element is zero,
		if (nums[i] == 0) {
			// swap its position with the element at the pointer
			[nums[i], nums[last]] = [nums[last], nums[i]];

			// then decrement the pointer
			last--;
		}
	}
	return nums;
}
```

## 4. Look back and improve your solution

Once you've come up with a solution, it's always good to revisit your code and make improvements. Sometimes that means _fixing bugs_ or _testing edge cases_. Sometimes it means optimizing your code for _readability_ or _efficiency_.

If you run your solution to move all zeroes to the right side of the array, you get this:

> moveZeroes([0,1,0,3,12])
> // [12, 1, 3, 0, 0]

Looks great! ...or does it? Upon closer inspection, you might realize that your code does not maintain the relative order of the non-zero elements, violating one of the problem constraints. Since you've taken the time to understand the problem up front, you are able to catch this error. So, how do you solve it? By following the problem-solving steps, of course!

Restart with understanding the problem. Walking through the test array manually shows that after seeing the first zero, the algorithm swaps the last element in the array, giving us `[12,1,0,3,0]`. Instead of swapping it, what if you remove the zero, then push it onto the end?

```javascript
function moveZeroes(nums) {
	// 1. Set a pointer to the last element in the array
	let last = nums.length - 1;

	// 2. Walk through each element of the array
	for (let i = 0; i < last; i++) {
		// 3. If the element is zero,
		if (nums[i] == 0) {
			// Remove the zero at i,
			nums.splice(i, 1);

			// push it onto the end of the array
			nums.push(0);

			// then decrement the pointer
			last--;
		}
	}

	return nums;
}
```

Now your code returns `[1, 3, 12, 0, 0]`. Wonderful! But are you done?

You could end here but your interviewer might point out that splice() can get rather expensive if the array is large. Although the code is perfectly functional, it is possible to improve the efficiency. After learning some more JavaScript, you'll be able to tackle a more efficient solution!

## Stuck? Take a step back

If you ever run into trouble while problem solving, take a step back. So, if your command isn't working, step back and re-examine your plan. Outline the plan in _comments_ or _pseudocode_. If you're having trouble coming up with a plan, take a step back and make sure you really understand the problem. Ask questions if you need to. Most people will get stuck on Step 3, but the problem usually lies in Step 1 or 2.

Keep in mind that if you've put the time into steps 1 and 2, step 3 should be easy. It also works in any language. Here's the exact same plan, executed in C#.

```C#
var result = MoveZeroes([0,1,0,3,12]);

Console.WriteLine($"[{string.Join(", ", result)}]"); // [1, 3, 12, 0, 0]

static List<int> MoveZeroes(List<int> nums) {
  // 1. Set A pointer to the last element in the array
  var last = nums.Count - 1;

  // 2. Walk through each element of the array
  for(int i = 0; i < last; i++) {
    // 3. If the element is zero
    if(nums[i] == 0) {
      // Remove the zero at i
      nums.RemoveAt(i);
      // push it onto the end of the array
      nums.Add(0);
      // then decrement the pointer
      last -= 1;
    }
  }
  return nums;
}

```

## What you've learned

You've learned 4 steps to solve any problem. Use them wisely!

1. Understand the problem
2. Make a plan
3. Carry out the plan
4. Look back and improve your solution

If (and when) you get stuck, take a deep breath, and remember to take a step back, and you should be able to come to a solution.
