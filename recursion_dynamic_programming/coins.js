const denominations = [25, 10, 5, 1];

/**
 * Calculates the number of ways n cents can be represented using typesOfCoin
 * Assumes unlimited supply of each type of coin
 * @param total
 * @param index
 * @param cache
 */
function makeChange(total, index, cache = {}) {
	const coin = denominations[index];
	if (index === denominations.length - 1) {
		return 1;
	}

	let ways = 0;
	for (let amount = 0; amount <= total; amount += coin) {
		const newIndex = index + 1;
		const newAmount = total - amount;
		let cached = cache[newIndex] && cache[newIndex][newAmount];
		if (cached) {
			ways += cached;
		} else {
			const newWays = makeChange(newAmount, newIndex, cache);
			ways += newWays;
			if (!cache[newIndex]) cache[newIndex] = {};
			cache[newIndex][newAmount] = newWays;
		}
	}

	return ways;

}

//2 for 5, 9 for 20, 121 for 77
const res = makeChange(20, 0);
console.log('res is ', res);
