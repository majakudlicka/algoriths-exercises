const _ = require('lodash');

/**
 * Sorts boxes and initiates the recursive call
 * @param boxes
 * @returns {number}
 */
function initStackBoxes(boxes) {
	const sorted = boxes.sort((box1, box2)=>{
		return box2.height - box1.height;
	})
	const stackMap = new Array(sorted.length).fill(0);
	return stackBoxes(sorted, null, 0, stackMap);
}

/**
 * Creates the stack with the highest height given an array of boxes
 * Each box in the stack has to have each dimension (height, width, length) smaller than the previous one
 * @param boxes
 * @param bottom
 * @param offset
 * @param stackMap
 * @returns {number}
 */
function stackBoxes(boxes, bottom, offset, stackMap) {
	if (offset >= boxes.length) return 0;
	const newBottom = boxes[offset];
	let heightWithBottom = 0;
	if (bottom === null || canBeAbove(newBottom, bottom)) {
		if (stackMap[offset] === 0) {
			stackMap[offset] = stackBoxes(boxes, newBottom, offset + 1, stackMap);
			stackMap[offset] += newBottom.height;
		}
		heightWithBottom  = stackMap[offset];
	}

	const heightWithoutBottom = stackBoxes(boxes, bottom, offset + 1, stackMap);
	return Math.max(heightWithBottom, heightWithoutBottom);
}

/**
 *
 * @param newBottom
 * @param bottom
 * @returns {boolean}
 */
function canBeAbove(newBottom, bottom) {
	return (newBottom.height < bottom.height) && (newBottom.width < bottom.width) && (newBottom.depth < bottom.depth);
}

// Simple test
const box1a = {
	id: 'box1a',
	width: 1,
	height: 1,
	depth: 1
};
const box2a = {
	id: 'box2a',
	width: 3,
	height: 3,
	depth: 3
};
const box3a = {
	id: 'box3a',
	width: 2,
	height: 2,
	depth: 2
};

const simpleRes = initStackBoxes([box1a, box2a, box3a]);
console.log('simpleRes ', simpleRes);

// More advanced test
const box1b = {
	id: 'box1b',
	width: 1,
	height: 10,
	depth: 1
}

const box2b = {
	id: 'box2b',
	width: 2,
	height: 11,
	depth: 2
}

const box3b = {
	id: 'box3b',
	width: 50,
	height: 9,
	depth: 50
}

const box4b = {
	id: 'box4b',
	width: 45,
	height: 8,
	depth: 45
}

const box5b = {
	id: 'box5b',
	width: 40,
	height: 7,
	depth: 40
}

const box6b = {
	id: 'box6b',
	width: 35,
	height: 6,
	depth: 35
}

const advancedRes = initStackBoxes([box1b, box2b, box3b, box4b, box5b, box6b]);
console.log('advanced ', advancedRes);
