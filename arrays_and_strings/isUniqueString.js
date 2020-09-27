// Using set
function isUniqueString(str) {
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
	if (str.length > 128) return false;
	// sequence of 32 chars where 1 represents the fact that there was a letter at its index
	let checker = 0;
	for (let i = 0; i < str.length; i++) {
		console.log('str[i] - \'a\' ', str.charCodeAt(i) - 97);
		let value = 1 << (str.charCodeAt(i) - 97); // converts letter to number and puts it in correct index
		console.log('value is ', value, 'checker is ', checker);
		if (checker || value) return false;
		checker = checker || value;
	}
	return true;
}

console.log(isUniqueString2('abcdefghi'));
console.log(isUniqueString2('hello'));
