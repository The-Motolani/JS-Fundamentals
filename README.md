# JS-Fundamentals  
A collection of beginner-friendly JavaScript scripts from **Week 3 of the ALX Frontend program**.  
Each script demonstrates a core JavaScript concept such as variables, arguments, loops, conditionals, and functions.  

The repository also follows coding constraints like:  
- Avoiding `var`  
- Using `process.argv` for arguments  
- Keeping solutions clean and minimal  

---

## 📑 Table of Contents  
1. [First Constant, First Print](#0-first-constant-first-print)  
2. [3 Languages](#1-3-languages)  
3. [Arguments](#2-arguments)  
4. [Value of My Argument](#3-value-of-my-argument)  
5. [Create a Sentence](#4-create-a-sentence)  
6. [An Integer](#5-an-integer)  
7. [Loop to Languages](#6-loop-to-languages)  
8. [I Love C](#7-i-love-c)  
9. [Square](#8-square)  
10. [Add](#9-add)  
11. [Factorial](#10-factorial)  

---

## 0. [First Constant, First Print](./0-javascript_is_amazing.js)  
Prints the string: 

```$ node 0-javascript_is_amazing.js

JavaScript is amazing```   

**Requirements:**
- Avoid the use of `var`.

---

## 1. [3 Languages](./1-multi_languages.js)
Prints three lines:

```$ node 1-multi_languages.js 

C is fun

Python is cool  

JavaScript is amazing```

**Requirements:**
- No var.

---

## 2. [Arguments](./2-arguments.js)
Prints a message depending on the number of arguments passed:

```$ node 2-arguments.js

No argument 

$ node 2-arguments.js School

Argument found  

$ node 2-arguments.js School Best

Arguments found```

**Requirements:**
- No `var`.
- Used [process.argv](https://nodejs.org/api/process.html#process_process_argv) as a reference.

## 3. [Value of My Argument](./3-value_argument.js)
Prints the first argument, or "No argument" if none is passed:

```$ node 3-value_argument.js 

No argument

$ node 3-value_argument.js School   
School```

**Requirements:**
- No `var`.
- No `.length`.

---

## 4. [Create a sentence](./4-concat.js)
Concatenates two arguments with the word **“is”**:

``` $ node 4-concat.js C cool

C is cool ```

**Requirements:**
- Use `console.log(...)`.

- No `var`.

---

## 5. [An Integer](./5-to_integer.js)
Prints the first argument as an integer, or "Not a number" if invalid:

```
$ node 5-to_integer.js 12

My number: 12

$ node 5-to_integer.js hello

Not a number```

**Requirements:**
- No `var`, `try`, or `catch`.

---

## 6. [Loop to languages](./6-multi_languages_loop.js)
Prints three lines (like task 2), but uses an array and a loop:

```
$ node 6-multi_languages_loop.js

C is fun

Python is cool

JavaScript is amazing
```

**Requirements:**
- Use a loop (`for` or `while`).
- No `var`.
- Only one `console.log(...)`.

---

## 7. [I love C](./7-multi_c.js)
Prints "C is fun" x times, where x is the first argument:

```
$ node 7-multi_c.js 3

C is fun

C is fun

C is fun
```

**Requirements:**
- If `x` is not an integer, print `"Missing number of occurrences"`.
- Use a loop.
- Only two `console.log(...)`.
- No `var`.

---

## 8. [Square](./8-square.js)
Prints a square of "X" characters:

```
$ node 8-square.js 4

XXXX

XXXX

XXXX

XXXX
```

**Requirements:**
- Argument is the size of the square.
- Print `"Missing size"` if argument is invalid.
- Use a loop.
- No `var`.

---

## 9. [Add](./9-add.js)
Prints the sum of two integers:

```
$ node 9-add.js 3 5

8
```

**Requirements:**
- Define a function: `function add(a, b)`.
- Use `console.log(...)`.
- No `var`.

---

## 10. [Factorial](./10-factorial.js)
Computes and prints the factorial of a number recursively:

```
$ node 10-factorial.js 4

24
```

**Requirements:**
- Factorial of `NaN` is `1`.
- Must use recursion.
- No `var`.