let countDrops = 0;
let breakingPoint = Math.random() * 100;

function drop(floor) {
	countDrops++;
	return floor > breakingPoint;
}

function findBreakingPoint(floors) {
	let interval = 14;
	let previousFloor = 0;
	let egg1Height = interval;

	while (!drop(egg1Height) && egg1Height <= floors) {
		interval--;
		previousFloor = egg1Height;
		egg1Height += interval;
	}

	let egg2Height = previousFloor + 1;
	while (egg2Height < egg1Height && egg2Height <= floors && !drop(egg2Height)) {
		egg2Height++;
	}

	return egg2Height > floors ? -1 : egg2Height;
}

const res = findBreakingPoint(100);

console.log({ breakingPoint });
console.log('res is ', res);
console.log({ countDrops });
