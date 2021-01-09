const _ = require('lodash');
const GRID_SIZE = 8;

/**
 * Places 8 queens on an 8x8 chessboard so that none of them is in the same row, column or diagonal
 * @param row
 * @param columns: an array of integers where index represents a row and value a column
 * @param results
 * @returns {*}
 */
function placeEightQueens(row, columns, results) {
	if (row === GRID_SIZE) {
		results.push(_.clone(columns));
	} else {
		for (let col = 0; col < GRID_SIZE; col++) {
			if (isValid(columns, row, col)) {
				columns[row] = col;
				placeEightQueens(row + 1, columns, results);
			}
		}
	}
	return results;
}

/**
 * Checks whether a given queen placement is valid -if there are no other queens on same column or diagonal
 * (Check for the row is unnecessary because the algorithm only traverses one row at a time)
 * @param columns
 * @param targetRow
 * @param targetCol
 * @returns {boolean}
 */
function isValid(columns, targetRow, targetCol) {
	for (let row = 0; row < targetRow; row++) {
		const col = columns[row];
		// Checks if they are in same column
		if (col === targetCol) {
			return false;
		}
		// Checks if they are in same diagonal
		const colDiff = Math.abs(targetCol - col);
		// Math.abs unnecessary since row is always smaller than targetRow
		const rowDiff = targetRow - row;

		if (rowDiff === colDiff) return false;
	}
	return true;
}

// [ 0, 4, 7, 5, 2, 6, 1, 3 ],
// 92
const res = placeEightQueens(0, [], []);
console.log('res is ', res);
console.log('res.length ', res.length);
