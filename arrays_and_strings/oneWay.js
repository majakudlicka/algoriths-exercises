// Checks is two strings are "one or no edit" away (add, remove or replace)
function oneWay(str1, str2) {
	let isEdited = true;
	if (str1.length === str2.length) {
		for (let i = 0; i < str1.length; i++) {
			if (str1[i] !== str2[i]) {
				if (!isEdited) return false;
				isEdited = false;
			}
		}
	} else {
		const larger = str1.length > str2.length ? str1 : str2;
		const smaller = str1.length < str2.length ? str1 : str2;
		if ((larger.length - smaller.length) > 1 ) return false;
		for (let i = 0, j = 0; i < larger.length; i++, j++) {
			if (larger[i] !== smaller[j]) {
				if (!isEdited) return false;
				isEdited = false;
				i++;
			}
		}
	}
	return true;
}

console.log(oneWay('pale', 'ple'));
console.log(oneWay('ple', 'pale'));
console.log(oneWay('pales', 'pale'));
console.log(oneWay('pale', 'bale'));
console.log(oneWay('pale', 'bae'));
console.log(oneWay('', ''));

// Other approaches:
// Could modularize into insert/delete and replace

// Could do in one pass like this

// export function isOneOrLessAway(str1, str2) {
// 	// if lengths differ by more than 1 then can't be true
// 	if (Math.abs(str1.length - str2.length) > 1) {
// 		return false;
// 	}
//
// 	let isEdited = false;
// 	for (let i = 0, j = 0; i < str1.length && j < str2.length; ++i, ++j) {
// 		if (str1[i] !== str2[j]) {
// 			if (isEdited) {
// 				// second edit
// 				return false;
// 			}
//
// 			if (str1.length > str2.length) {
// 				--j; // decrease j, we are deleting char from str1
// 			} else if (str1.length < str2.length) {
// 				--i; // decrease i, we are deleting char from str2
// 			}
// 			isEdited = true;
// 		}
// 	}
//
// 	return true;
// }
