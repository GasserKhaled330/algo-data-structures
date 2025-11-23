# Debugging Basics

Bugs, or code errors, are unavoidable. Great programmers don't write perfect, bug-free code every time. In fact, it's usually the opposite. Great coders have created, and fixed, thousands and thousands of bugs. This provides the experience and practice to make them expert debuggers.

Debugging can be frustrating but here are three simple techniques you can use to squash those pesky bugs!

- Read the error message (if there is one)
- Use `console.log()` to debug malfunctioning code
- Write tests that cover common use and edge cases

## Read the error message

Let's say we're writing a function to see if a number is smaller than ten.

```javascript
function numberSmallerThanTen(number) {
 if (num < 10) {
  return true;
 } else {
  return false;
 }
}

numberSmallerThanTen(5);
```

We run this to see if 5 is smaller than 10 and get this:

```bash
/tmp/file.js:2
  if (num < 10) {
  ^

ReferenceError: num is not defined
    at numberSmallerThanTen (/tmp/file.js:2:3)
    ...
```

This error message tells us exactly what's wrong with the code! We are trying to call `num` without defining it. This number should be defined as a parameter in the function. Looking there, you can see that we accidentally named our parameter `number` instead of `num`. Changing that fixes our bug.

## Use `console.log()` to debug malfunctioning code

You learned how to use `console.log()` to print things out in your code. This is very useful for debugging! Take this example:

```javascript
function removeOranges(fruitArray) {
 for (let i = 0; i < fruitArray.length; i++) {
  // If the item at the ith position is "orange"
  if (fruitArray[i] == "orange") {
   // Remove 1 item from the ith position
   fruitArray.splice(i, 1);
  }
 }
 return fruitArray;
}
```

This function will iterate through an array and remove any oranges. Let's try it out.

> removeOranges(["apple", "banana", "orange", "peach", "orange", "pear"])
>
> ["apple", "banana", "peach", "pear"]

Looks good! On further inspection though, we see a problem.

> removeOranges(["orange", "apple", "banana", "orange", "orange", "pear", "apple"])
>
> ["apple", "banana", "orange", "pear", "apple"]

We're still seeing an orange leftover. What's going on here? We can use `console.log()` to figure that out.

```javascript
function removeOranges(fruitArray) {
 for (let i = 0; i < fruitArray.length; i++) {
  console.log("Checking index " + i + ": " + fruitArray[i]);
  if (fruitArray[i] == "orange") {
   fruitArray.splice(i, 1);
  }
 }

 return fruitArray;
}
```

```bash
> removeOranges(["orange", "apple", "banana", "orange", "orange", "pear", "apple"])
Checking index 0: orange
Checking index 1: banana
Checking index 2: orange
Checking index 3: pear
Checking index 4: apple
["apple", "banana", "orange", "pear", "apple"]
```

Tracing through the loop with `console.log()`, we can see that we're skipping a few fruits. We never check the first apple, which should be at index 1, and we also skip one of the oranges. Another clue is that we're only checking 5 items, when there are 7 fruit in our original list.

It turns out, whenever we delete an orange, everything else in the array shifts over by one. So, when we delete that first orange from index 0, now apple shifts into index 0, banana shifts into index 1, and so on. Since we move on to the next item, we never end up checking that index again. We can solve this by lowering the index by 1 every time we splice out an orange from the array.

```javascript
function removeOranges(fruitArray) {
 for (let i = 0; i < fruitArray.length; i++) {
  console.log("Checking index " + i + ": " + fruitArray[i]);

  if (fruitArray[i] == "orange") {
   fruitArray.splice(i, 1);
   i--;
  }
 }
 return fruitArray;
}
```

Now we get the proper behavior:

```bash
> removeOranges(["orange", "apple", "banana", "orange", "orange", "pear", "apple"])
Checking index 0: orange
Checking index 0: apple
Checking index 1: banana
Checking index 2: orange
Checking index 2: orange
Checking index 2: pear
Checking index 3: apple
["apple", "banana", "pear", "apple"]
```

Don't forget to remove the `console.log()` when the bug is fixed!

## Write tests that cover common use and edge cases

In the previous example, you might have written the first `removeOranges()` function, successfully tested with just one orange and moved on. It's only when you try an array with two oranges in a row that you find the bug.

Here is a function that counts down from a starting number then stops when it hits zero. It seems to work just fine for our test case of 5 but there is a serious bug here. Can you find it?

```javascript
function countdown(num) {
 while (num !== 0) {
  console.log(num);
  num--;
 }
}

countdown(5);
```

If you try testing with a decimal (also known as a float) or a negative number, you'll find that the function keeps counting forever. You can fix this by changing the while condition to run while the number is greater than 0.

```javascript
function countdown(num) {
 while (num > 0) {
  console.log(num);
  num--;
 }
}
```

Much better!

## What you learned

No programmer writes perfect code the first time through, which is why debugging is a crucial skill to practice. If your code isn't working and you're not sure why, follow these steps and you'll be able to squash even the most elusive bugs!

Some quick tips:

- Error messages are your friend! They will give you valuable hints where your bugs are located.
- Make sure you know how your code **should** be working, then use `console.log()` to identify where the actual behavior differs.
- Good testing will help you find sneaky bugs before they are live in production.
