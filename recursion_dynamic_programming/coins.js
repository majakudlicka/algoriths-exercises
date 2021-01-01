const denominations = [25, 10, 5, 1];

/**
 * Calculates the number of ways n cents can be represented using typesOfCoin
 * Assumes unlimited supply of each type of coin
 * @param total
 * @param index
 * @param cache
 */
function makeChange(total, index, cache) {
	if (!cache) cache = makeCache();

	if (cache[index][total]) {
		return cache[index][total];
	}

	if (index === denominations.length - 1) {
		return 1;
	}

	const coin = denominations[index];
	let ways = 0;

	for (let amount = 0; amount <= total; amount += coin) {
		const newIndex = index + 1;
		const newAmount = total - amount;
		ways += makeChange(newAmount, newIndex, cache);
	}

	cache[index][total] = ways;
	return ways;
}

function makeCache() {
	const cache = {};
	denominations.forEach((d, i) => cache[i] = {});
	return cache;
}

//2 for 5, 9 for 20, 121 for 77
const res = makeChange(300, 0);
console.log('res is ', res);
