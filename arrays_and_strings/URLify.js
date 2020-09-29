function URLify(str, replacement) {
	const charArray = str.split('');
	charArray.forEach((char, index) => {
		if (/\s/.test(char)) charArray[index] = replacement;
	});
	return charArray.join('');
}

console.log(URLify('Mr John Smith', '%20'));
