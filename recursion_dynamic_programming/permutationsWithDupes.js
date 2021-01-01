/**
 * Computes permutations of a string that might have duplicated chars
 * (returns unique permutations)
 * @param string
 * @returns {[]}
 */
function computePermutations(string) {
	const result = [];
	const map = buildFrequencyTable(string);
	printPerms(map, '', string.length, result);
	return result;
}

/**
 * Recursively computes permutations from frequency map

 */
function printPerms(map, prefix, remaining, result) {
	console.log({ map, prefix, remaining });
	if (remaining === 0) {
		result.push(prefix);
		return;
	}
	for (let char in map) {
		if (map[char] > 0) {
			map[char] = map[char] - 1;
			printPerms(map, prefix + char, remaining - 1, result);
			map[char] = map[char] + 1;
		}
	}
}

/**
 * Constructs a frequency hash object
 * @param string
 * @returns {{}}
 */
function buildFrequencyTable(string) {
	const count = {};

	for (let i = 0; i < string.length; i++) {
		if (count[string[i]]) count[string[i]]++;
		else count[string[i]] = 1;
	}

	return count;
}

const res = computePermutations('aabb');
console.log('res is ', res);
