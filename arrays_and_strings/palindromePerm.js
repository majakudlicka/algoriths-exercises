// using object as hash table
function isPalindromePerm(str) {
	str = str.toLowerCase();
	let unevenPairCount = 0
	const charFrequencies = {};
	for (let i = 0; i < str.length; i++) {
		if (/[a-z]/.test(str[i])) {
			if (!charFrequencies[str[i]]) charFrequencies[str[i]] = 1;
			else charFrequencies[str[i]]++;
		}
	}
	Object.values(charFrequencies).forEach(val=>{
		if (val % 2 !== 0 )unevenPairCount++;
	});

	return unevenPairCount <= 1;
}

// Using bitwise operators
function isPalindromePerm2(str) {
	str = str.toLowerCase();
	let mask = 0
	for (let i = 0; i < str.length; i++) {
		if (/[a-z]/.test(str[i])) {
			mask = mask ^ (1 << (str.charCodeAt(i) - ('a').charCodeAt()));
		}
	}
	// Bitboard has exactly one bit flipped if it is a power of 2
	// The below returns true if mask is a power of 2 or 0
	// https://stackoverflow.com/questions/600293/how-to-check-if-a-number-is-a-power-of-2
	return (mask & (mask -1)) === 0;
}

// Eva, can I see bees in a cave?
console.log(isPalindromePerm(', beescan I   ina seeveEvaca?'));
// not a palindrome
console.log(isPalindromePerm('kaeen oq kaeen'));

// Eva, can I see bees in a cave?
console.log(isPalindromePerm2(', beescan I   ina seeveEvaca?'));
// not a palindrome
console.log(isPalindromePerm2('kaeen oq kaeen'));
