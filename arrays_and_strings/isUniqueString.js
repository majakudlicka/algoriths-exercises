// Using set
function isUniqueString(str) {
	// ASCI basic set has 128 chars (extended- 258)
	if (str.length > 128) return false;
	const charSet = new Set();
	for (let i = 0; i < str.length; i++) {
		const current = str[i];
		if (charSet.has(current)) return false;
		charSet.add(current);
	}
	return true;
}

// Using bitwise operators
function isUniqueString2(str) {
	// ASCI basic set has 128 chars (extended- 258)
	if (str.length > 128) return false;
	// sequence of 32 chars where 1 represents the fact that there was a letter at its index
	let checker = 0;
	for (let i = 0; i < str.length; i++) {
		const charIndex = str.charCodeAt(i) - 'a'.charCodeAt(); // converts letter to number
		let value = 1 << charIndex; // Puts '1' at the correct index
		if (checker & value) return false;
		checker = checker | value;
	}
	return true;
}

// Other possible approaches: could use an object, could convert into array of chars, sort and traverse comparing neighbouring
// characters

console.log(isUniqueString('abcdefghi'));
console.log(isUniqueString('hello'));

console.log(isUniqueString2('abcdefghi'));
console.log(isUniqueString2('hello'));
