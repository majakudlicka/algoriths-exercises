const directions = {
	LEFT: 'left',
	RIGHT: 'right',
	UP: 'up',
	DOWN: 'down'
}

const colors = {
	WHITE: 'white',
	BLACK: 'black'
}

// Should only have one instance - singleton pattern
class Game {
	constructor() {
		this.rows = 10;
		this.columns = 10;
		this.board = new Board(this.rows, this.columns);
		this.players = [new Player(colors.WHITE), new Player(colors.BLACK)];
	}
}

class Board {
	constructor(rows, columns) {
		this.blackCount = 0;
		this.whiteCount = 0;
		this.board = new Array(rows).fill(new Array(columns));
	}

	initialize() {
		// Initialize center with black and white pieces
	}

	placeColor(row, column, color) {
		// Attempt to place a piece of color at (row, col). Return true if successful
	}

	flipSection(row, column, color, direction) {
		// Flips pieces starting at (row, column) and proceeding in given direction
	}

	getScoreForColor(color) {
		// Returns white or black count
	}

	updateScore(newColor, newPieces) {
		// Update board with additional pieces of newColor. Decrease score of the opposite color
	}
}

class Piece {
	constructor(color) {
		this.color = color;
	}

	flip() {
		if (this.color === colors.BLACK) this.color = colors.WHITE;
		else this.color = colors.BLACK;
	}
}

class Player {
	constructor(color) {
		this.color = color;
	}

	getScore() {
		// Obtains Player score
	}

	playPiece(row, column) {
		// Calls placeColor method on the Board
	}
}

const game = new Game();
Object.freeze(game);
export default game;
