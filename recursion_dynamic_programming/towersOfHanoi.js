/**
 * Moves disks of different sizes between towers
 * Disk cannot be placed on top of a smaller disk
 * @param n
 * @returns {[]}
 */
function moveDisks(n) {
	const tower1 = [];
	const tower2 = [];
	const tower3 = [];

	for (let i = 0; i < n; i++) {
		tower1.push(i);
	}

	moveDisksRecurse(n, tower1, tower2, tower3);
	return tower3;
}

/**
 * Helper to recursively reposition disks between towers
 * @param n
 * @param start
 * @param buffer
 * @param end
 */
function moveDisksRecurse(n, start, buffer, end) {
	if (n === 1) {
		end.push(start.pop());
	}
	else if (n === 2) {
		buffer.push(start.pop());
		end.push(start.pop());
		end.push(buffer.pop())
	}
	else {
		moveDisksRecurse(n - 1, start, end, buffer);
		moveDisksRecurse(1, start, buffer, end);
		moveDisksRecurse(n -1, buffer, start, end);
	}
}

const res = moveDisks(10);
console.log('res is ', res);
