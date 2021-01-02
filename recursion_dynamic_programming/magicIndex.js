/**
 * Given a sorted array of integers with no duplicates,
 * finds index of an element that is equal to the index itself
 * @param array
 * @param indexShift
 * @returns {number|*}
 */
function findMagicIndex(array, indexShift = 0) {
	const lengthIsEven = array.length % 2 === 0;
	const middleIndex = Math.floor(array.length / 2);
	const value = array[middleIndex];

	if (value === middleIndex + indexShift) return value;
	if (array.length === 1) return -1;

	else if (value > middleIndex + indexShift) {
		// Look on the left side of the array
		return findMagicIndex(array.slice(0, middleIndex), indexShift);
	} else {
		let shift = indexShift + middleIndex + 1;
		if (lengthIsEven) shift++;
		// Look on the right side of the array
		return findMagicIndex(array.slice(middleIndex + 1), shift);
	}
}

/**
 * Finds index of an element that is equal to the index itself
 * (Different approach)
 * @param array
 * @param start
 * @param end
 * @returns {number|*}
 */
function findMagicIndex2(array, start = 0, end) {
	if (end === undefined) end = array.length - 1;
	if (end < start) return -1;

	const midIndex = Math.floor((start + end) / 2);
	const midValue = array[midIndex];

	if (midValue === midIndex) {
		return midIndex;
	}

	else if (midValue > midIndex) {
		return findMagicIndex(array, start, midIndex - 1);
	} else if ( midValue < midIndex) {
		return findMagicIndex(array, midIndex + 1, end);
	}

}

const array = [ -100, -40, -5, 0, 4, 6, 10, 15, 16, 17, 40, 50, 100];
const res = findMagicIndex(array);
const res2 = findMagicIndex2(array);
console.log('res is ', res, ' res2 is ', res2);

/**
 * Given a sorted array of integers WITH POSSIBLE DUPLICATES,
 * finds index of an element that is equal to the index itself
 * @param array
 * @param start
 * @param end
 * @returns {number}
 */
function findMagicIndexWithDuplicates(array, start = 0, end) {

	if (end === undefined) end = array.length - 1;

	if (end < start) return -1;

	const midIndex = Math.floor((start + end) / 2);
	const midValue = array[midIndex];

	if (midValue === midIndex) {
		return midIndex;
	}

	const leftIndex = Math.min(midIndex - 1, midValue);
	const left = findMagicIndexWithDuplicates(array, start, leftIndex);
	if (leftIndex >= 0) {
		return left;
	}

	const rightIndex = Math.max(midIndex + 1, midValue);
	const right = findMagicIndexWithDuplicates(array, rightIndex, end);
	return right;
}

const array2 = [-10, -5, 2, 2, 2, 3, 4, 5, 9, 12, 13];
const res3 = findMagicIndexWithDuplicates(array2)
console.log('res3 is ', res3);
