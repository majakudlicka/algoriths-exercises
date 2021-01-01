/**
 * Fills the screen with given color
 * @param screen
 * @param row
 * @param col
 * @param newColor
 * @returns {boolean|*}
 */
function fillWithColor(screen, row, col, newColor) {
	if (row < 0 || col < 0 || row >= screen.length || col >= screen[0].length) return false;
	if (screen[row][col] === newColor) return false;
	screen[row][col] = newColor;
	// top
	fillWithColor(screen, row - 1, col, newColor);
	// left
	fillWithColor(screen, row, col - 1, newColor);
	// right
	fillWithColor(screen, row, col + 1, newColor);
	// bottom
	fillWithColor(screen, row + 1, col, newColor);

	return screen;

}

const screen = [[1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1]]

const res = fillWithColor(screen, 2, 3, 0);
console.log('res is ', res);
