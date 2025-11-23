# How to Ask Great Questions

Knowing how to ask a good question is a VERY important skill.

## When should I ask a question?

Follow **the 15 minute rule**: If you are stuck for more than 15 minutes on a problem with no progress, you are REQUIRED to ask a question.

## What makes a good question?

1. It's specific.
2. It's clear and concise.
3. It shows that you've put work into it.

### Good questions are specific

Imagine you are the lead on an engineering team and you see a question like this:

"_Help! My code isn't working. What do I do?_"

How do you answer this? You have no idea if it requires a quick, 30 second fix or a 2 hour deep-dive. Because you're busy and don't know how big of a time commitment this requires, it's likely to go ignored.

Compare to a question like this:

"_I'm trying to get the last character in a string using `str[str.length]` but get `undefined`. What am I doing wrong?_"

This is an easy fix and is likely to get an answer very quickly.

How about something like this:

"_I've installed Python 3.8 on my Mac using Homebrew but python3 keeps opening up version 3.6. Can anyone help me?_"

Python environments are notorious for growing complicated over time and this issue might take some time to sort out. Because the question is specific, it can still be answered quickly. The specificity allows you to set aside an appropriate amount of time to help solve the problem at hand.

### Good questions are clear and concise

Let's take the previous question about string length and imagine it was written like this:

"_Oh my gosh, strings are driving me crazy! I've tried everything I can think of but nothing seems to work. Whoever invented this language must enjoy torturing poor, hapless engineers, LOL. Anyway, my problem is that I'm trying to get the last character in a string which sounds easy but nothing is ever easy in JavaScript, am I right? My idea was to find the length of the string, then use that number to get the last character, since the last character should be equal to the total number of characters in that string. Makes logical sense but JavaScript apparently doesn't follow logic and returns undefined instead. What do you mean, undefined?? It's defined right there!_"

You want people to know that you've spent a lot of time trying to figure this out and you're frustrated, but also that you're a fun person. Adding some personality will make people more likely to reach out, right?

Maybe, but it's more likely to start a casual discussion about the confusing nature of JavaScript. If you're a busy tech lead, you don't have time to engage in that conversation, or to read through a whole paragraph just to find out if there's a technical question somewhere inside. Keep it clean and concise!

### Good questions show the work you've put in

Let's say you've just learned about JavaScript division in class and you wonder, what happens if you try dividing a number by zero? Your instructor asks if there are any questions, so you ask:

"_What happens if you divide a number by zero?_"

Your instructor opens up a REPL (an interactive programming environment) and types in 10 / 0 which returns `Infinity`.

Now you ask:

"_What happens if you divide a negative number by zero?_"

Your instructor types -10 / 0 into the REPL which returns `-Infinity`. Feeling clever, you ask:

"_What happens if you divide zero by zero?_"

Your instructor types 0 / 0 which returns `NaN`.

Here's a better approach: Open your own REPL and try it out yourself. It will be faster than asking the instructor and doesn't take up the entire class's time. When you get to something you don't understand, try Googling it or searching the official documentation. If you still don't understand, then you can ask a question:

"_I tried dividing a number by zero and got Infinity, which makes sense. Then, I tried dividing 0 / 0 and got `NaN`, which according to Google stands for "Not a Number". If `NaN` isn't a number then what is it?_"

That's a great question! It turns out `NaN` actually is a number, which your instructor can demonstrate by typing `typeof(NaN)` which returns "`number`". This question shows that you understand how division and dividing by zero work, but that your confusion lies in the oddly named `NaN`.

Let's revisit our previous question:

"_I'm trying to get the last character in a string using `str[str.length]` but get undefined. What am I doing wrong?_"

This is easy to Google. Type "How do I get the last character in a JavaScript string" and you'll see many pages with detailed answers to this exact question.

## What you've learned

you will inevitably get stuck on a problem from time to time. Remember these tips on how to ask a great question:

- 15 minute rule: Ask a question if you've been stuck on a problem for more than 15 minutes
- Try it out in a REPL: If you are curious/unsure about how a line of code will execute, try it out in a REPL
- Take time formulating your question: A good question is specific, clear, concise, and shows you put work into it
- Use a search engine: Look up your question to see if someone else asked a similar question to you and got an answer
- Use official documentation: Explore documentation like MDN ([Mozilla Developer Network](https://developer.mozilla.org/en-US/)) for questions about syntax or usage of an operation or function
