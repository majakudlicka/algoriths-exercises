const states = { hidden: 0, visible: 1 }

class MineSweeper {
	constructor(N) {
		this.rows = N;
		this.columns = N;
		this.grid = new Array(N).fill(new Array(N).fill(new Cell()));
		this.winner = null;
	}

	initiateBombs() {
		// Initiate bombs randomly (could pick a random row/column number or could use card shuffle algorithm
		// - place N bombs in first N cells and then reshuffle the entire board. Safer if there are many bombs
		// because with the first approach we could be getting the cells that already have bombs and have to repeat
		// the process many times to allocate all bombs)
		// For each of 'bombs' neighbours, set the count to 1 or increment count if it exists
	}

	uncoverCell(address) {
		// Set cell state to visible
		// If cell contains a bomb, this.winner is computer
		// If all cells are visible, this.winner is player
		// If cell is blank, uncover its neighbours
	}
}

class Cell {
	constructor() {
		this.state = states.hidden;
		this.value = null;
		this.flagged = false;
	}

	setValue(value) {
		this.value = value;
	}

	uncover() {
		if (this.state === states.hidden) {
			this.state = states.visible;
		} else {
			this.state = states.hidden;
		}
	}

	flag() {
		this.flagged = true;
	}
}
