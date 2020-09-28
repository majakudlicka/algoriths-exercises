// Assumption: comparison is case-sensitive and whitespace matters

// Using object with char frequencies
function checkPermutation(str1, str2) {
	if (str1.length !== str2.length) return false;

	const frequencies = {};
	// Increase frequencies as we loop through first string
	for (let i = 0; i < str1.length; i++){
		let char = str1[i];
		if(!frequencies[char]) frequencies[char] = 1;
		else frequencies[char]++;
	}

	// Decrease frequencies as we loop through second string
	// If we manage to loop through all of them than it means that frequencies has only 0s left (since strings have same
	// length so the sum of increases must equal sum of decreases
	for (let i = 0; i < str2.length; i++){
		let char = str2[i];
		if (!frequencies[char]) return false;
		frequencies[char]--;
	}

	return true;

}

// By sorting and comparing strings
function checkPermutation2(str1, str2) {
	if (str1.length !== str2.length) return false;

	const sorted1 = str1.split('').sort().join('');
	const sorted2 = str2.split('').sort().join('');

	return sorted1 === sorted2;
}

console.log(checkPermutation('lala malowana', 'malowana lala'));
console.log(checkPermutation('Kajak', 'kajak'));

console.log(checkPermutation2('lala malowana', 'malowana lala'));
console.log(checkPermutation2('Kajak', 'kajak'));
