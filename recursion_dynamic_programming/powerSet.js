const _ = require('lodash');

/**
 * Generates a list of all subsets of a set
 * @param set
 * @returns {*[]|*[]}
 */
function powerSet(set) {
	if (set.length === 1) return [set];

	const prevArray = set.slice(0, set.length - 1);
	const lastElement = set[set.length - 1];

	const prevSets = powerSet(prevArray);
	const cloned = _.cloneDeep(prevSets);
	cloned.forEach(s => {
		s.push(lastElement);
	})
	return prevSets.concat([[lastElement]]).concat(cloned);
}

const arr = [15, 4, 1, 5];

const res = powerSet(arr);
console.log('res is ', res);
