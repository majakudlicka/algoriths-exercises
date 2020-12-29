/**
 * Recursively multiplies two positive integers
 * @param int1
 * @param int2
 */
function recursiveMultiply(int1, int2) {
	// Base case
	if (int1 === 1) return int2;
	if (int2 === 1) return int1;

	const isInt1Even = int1 % 2 === 0;
	// >> 1 effectively divides by 2 and << 1 effectively multiplies by 2
	if (isInt1Even) return (recursiveMultiply(int1 >> 1, int2)) << 1;

	const isInt2Even = int2 % 2 === 0;
	if (isInt2Even) return (recursiveMultiply(int1, int2 >> 1)) << 1;

	return recursiveMultiply(int1, int2 + 1) - int1;
}

const res = recursiveMultiply(7,9);
console.log('res is ', res);


