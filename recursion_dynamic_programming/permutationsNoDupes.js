/**
 * Computes all permutations of a string of chars without duplicates
 * @param string
 * @returns {[]|*[]}
 */
function computePermutations(string) {
	if (string.length === 1) return [string];
	else {
		const prevPerms = computePermutations(string.substring(0, string.length - 1));
		const lastChar = string[string.length - 1];
		const newPerms = [];
		prevPerms.forEach(permutation => {
			for (let i = 0; i <= permutation.length; i++) {
				newPerms.push(`${permutation.slice(0, i)}${lastChar}${permutation.slice(i)}`);
			}
		});
		return newPerms;
	}
}

const res = computePermutations('abcd');
console.log('res is ', res);
