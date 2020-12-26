/**
 * Builds permutations of requested number of valid parens
 * @param permutations
 * @param remainingLeft
 * @param remainingRight
 * @param currentString
 * @param index
 * @returns {*[]}
 */
function buildParensPerms(permutations = [], remainingLeft, remainingRight, currentString, index) {

	if (remainingLeft < 0 || remainingRight < 0 || remainingRight < remainingLeft) return;

	if (remainingLeft === 0 && remainingRight === 0) {
		permutations.push(currentString.join(''));
	} else {
		currentString[index] = '(';
		buildParensPerms(permutations, remainingLeft - 1, remainingRight, currentString, index + 1);
		currentString[index] = ')';
		buildParensPerms(permutations, remainingLeft, remainingRight -1, currentString, index + 1);
	}
	return permutations;
}

const res = buildParensPerms([], 2, 2, [], 0 );

console.log('res is ', res);
