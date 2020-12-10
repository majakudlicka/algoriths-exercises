const numberOfBottles = 10;
const numberOfStrips = 10;

// NumberOfBottles must be smaller than 2^numberOfStrips
function findPoisonedBottle() {
	// Drop poison on bottles in pattern representing a binary representation of each number
	for (let i = 0; i < numberOfBottles; i++) {
		const bottleNrInBinary = i.toString(2);
		for (let j = 0; j < numberOfStrips; j++) {
			if (bottleNrInBinary[j]) {
				// drop poison :)
			}
		}
	}
	const testResults = Math.round((Math.random() * 1000)).toString(2);
	const poisonedBottle = parseInt(testResults, 2);
	return poisonedBottle;
}

const res = findPoisonedBottle();
console.log('res is ', res);
