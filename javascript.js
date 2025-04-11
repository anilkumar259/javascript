What is JavaScript?
A: A scripting language used to create and control dynamic content on websites.

What is the DOM?
A: The Document Object Model – a tree-like structure of HTML elements that JavaScript can interact with.

How can you select elements in the DOM?
A: Using methods like getElementById(), querySelector(), getElementsByClassName() getElementsByTagName(), querySelectorAll() etc.

How do you declare a variable in JavaScript?
A: Using var, let, or const.
	
Here are simple examples for var, let, and const — all in one place:
	🔹 var – function-scoped, can be redeclared & reassigned
			var x = 10;
			var x = 20; // ✅ redeclared
			x = 30;     // ✅ reassigned
			console.log(x); // 30
	🔹 let – block-scoped, cannot be redeclared, but can be reassigned
			let y = 10;
			// let y = 20; ❌ SyntaxError: Identifier 'y' has already been declared
			y = 25;      // ✅ reassigned
			console.log(y); // 25
  	🔹 const – block-scoped, cannot be redeclared or reassigned
			const z = 10;
			// z = 15;    ❌ TypeError: Assignment to constant variable
			console.log(z); // 10

What’s the difference between let and const?
A: let allows reassignment; const does not.

What are the data types in JavaScript?
A: String, Number, Boolean, Undefined, Null, Object, Symbol, BigInt.

	Type	  Description	Example
	String	Text data	"Hello", '123'
	Number	Numeric values (integers, floats)	42, 3.14, -7
	Boolean	True or false values	true, false
	Undefined	Variable declared but not assigned	let x; // x is undefined
	Null	Intentionally empty or no value	let y = null;
	Symbol	Unique, immutable identifiers	Symbol('id')
	BigInt	For very large integers	12345678901234567890n
	Object	Collections of key-value pairs	{ name: 'Alice', age: 25 }

Primitive types: String, Number, Boolean, Undefined, Null, Symbol, BigInt
Non-primitive type: Object (includes arrays, functions, etc

Array is not a data type 

Array.isArray(arr); // true ✅
This is the recommended way to check if something is an array.
	
typeof {};            // "object"
typeof [];            // "object"
typeof function(){};  // "function"
typeof null;          // "object" 😅 (quirk of JS)

What does typeof operator do?
A: Returns the type of a variable as a string (e.g., "number", "object").

What is the difference between == and ===?
A: == checks value with type coercion; === checks value and type.

'5' == 5     // true  ✅ because '5' is converted to number
'5' === 5    // false ❌ because string !== number

null == undefined   // true ✅
null === undefined  // false ❌

0 == false          // true ✅ (0 is falsy)
0 === false         // false ❌ (number !== boolean)


What is NaN?
A: It stands for "Not-a-Number". Example: parseInt('abc') returns NaN.
Anything → String	String(value) or `${value}`
Anything → Number	parseInt(), parseFloat(), or Number()
Anything → Boolean	Boolean(value)

What is hoisting?
A: JavaScript moves variable and function declarations to the top of the scope during compile time.

What is the difference between null and undefined?
A: undefined means a variable has been declared but not assigned a value; null is intentionally set as "no value".

 What is a callback function in JavaScript?
A callback function is a function that is passed as an argument to another function and is executed later, either synchronously or asynchronously, depending on how and when it's called.

What is a closure?
A closure is a function that can access variables from its outer function even after the outer function has finished running.

What is the difference between synchronous and asynchronous code?
	Synchronous Code - Runs step-by-step, one line at a time. Each step must finish before the next begins.
	Asynchronous Code The code doesn’t wait for the API to finish — it continues running the next lines, and handles the result later.
	
Array methods (map, forEach)	Synchronous	arr.map(x => x * 2)
setTimeout, setInterval	Asynchronous	setTimeout(() => {...}, 1000)
fetch, axios, I/O in Node.js	Asynchronous	fetch(...).then(callback)
Event Listeners (click, etc.)	Asynchronous	button.addEventListener('click', cb)
	



	
