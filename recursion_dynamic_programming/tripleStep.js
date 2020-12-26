/**
 * Calculates the number of paths to n in steps of 1,2,or 3
 * @param n
 * @param cache
 * @returns {number}
 */
function calculatePaths(n, cache = [0,1,2,4]) {
	if (!cache[n-3]) cache[n-3] = calculatePaths(n-3, cache);
	if (!cache[n-2]) cache[n-2] = calculatePaths(n-2, cache);
	if (!cache[n-1]) cache[n-1] = calculatePaths(n-1, cache);
	cache[n] = cache[n-1] + cache[n-2] + cache[n-3];
	return cache[n];
}

const res = calculatePaths(10);
console.log('res is ', res);
