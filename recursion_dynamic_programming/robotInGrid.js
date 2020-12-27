/**
 * Finds path from beginning to the end of the grid avoiding cells with "x" values using dynamic programming
 * @param row
 * @param col
 * @param grid
 * @param pathsCache
 * @returns {boolean|*}
 */
function findPath(row, col, grid, pathsCache = { '00': '00' }) {
	if (pathsCache[`${row}${col}`]) return pathsCache[`${row}${col}`];

	if (row < 0 || col < 0 || !grid[row][col]) {
		return false;
	}

	if (grid[row][col] === 'x') {
		return false;
	}

	const validPath = findPath(row -1, col, grid, pathsCache) || findPath(row, col -1, grid, pathsCache);

	if (validPath) {
		pathsCache[`${row}${col}`] = validPath + ` ${row}${col}`;
		return pathsCache[`${row}${col}`];
	} else {
		return false;
	}
}

const grid = [
	['0', '0', '0', '0'],
	['0', 'x', '0', 'x'],
	['x', '0', '0', '0'],
];

const res = findPath(2, 3, grid);
console.log('res is ', res);

/**
 * Finds path from beginning to the end of the grid avoiding cells with "x" values using dynamic programming
 * (Alternative approach using failed points array) - based on the solution from the book
 * @param maze
 * @returns {null|[]}
 */
function getPath(maze) {
	if (maze === null || maze.length === 0) return null;
	const path = [];
	const failedPoints = new Set();
	if (isPath(maze, maze.length - 1, maze[0].length -1, path, failedPoints)) {
		return path;
	}
	return null;
}

function isPath(maze, row, col, path, failedPoints) {
	if (col < 0 || row < 0 || !maze[row][col]) {
		return false;
	}
	const p = `${row}${col}`;

	if (grid[row][col] === 'x') {
		failedPoints.add(p);
	}

	// If we've already visited this cell, return
	if (failedPoints.has(p)) {
		return false;
	}

	const isAtOrigin = (row === 0) && (col === 0);

	// If there is a path from start to my current location, add my location
	if (isAtOrigin || isPath(maze, row, col -1,path, failedPoints) || isPath(maze, row -1, col, path, failedPoints)) {
		path.push(p);
		return true;
	}

	failedPoints.add(p); // Cache result
	return false;
}

const res2 = getPath(grid);
console.log('res is ', res2);

