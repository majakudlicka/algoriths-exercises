PuzzleEdgeTypeEnum = {
	flat: 0,
	typeA : 1,
	typeB : 2,
	typeC : 3,
	typeD : -1,
	typeE : -2,
	typeF : -3,

}
class JigsawPuzzle {
	constructor(pieces) {
		this.loosePuzzlePieces = pieces;
		this.size = Math.sqrt(pieces);
		this.solution = [];
		for (let i = 0; i < this.size ; i++) {
			this.solution[i] = new Array(this.size).fill('placeholder');
		}
	}

	solve() {
		// Iterate over rows and columns of the puzzle matching shape with either its neighbours or flat edge
		for (let row = 0; row < this.solution.length; row++) {
			for (let col = 0; col < this.solution[0].length; col++) {
				let leftNeighbour = this.solution[row][col - 1];
				let topNeighbour = this.solution[row - 1][col];
				let rightNeighbour = this.solution[row][col + 1];
				let bottomNeighbour = this.solution[row + 1][col];
				const criteria = [
					leftNeighbour ? leftNeighbour.right : PuzzleEdgeTypeEnum.flat,
					topNeighbour ? topNeighbour.bottom : PuzzleEdgeTypeEnum.flat,
					rightNeighbour ? null : PuzzleEdgeTypeEnum.flat,
					bottomNeighbour ? null : PuzzleEdgeTypeEnum.flat
				]
				const matchingPuzzle = this.loosePuzzlePieces.find(puzzle => puzzle.matchWithRotation(...criteria));
				if (!matchingPuzzle) throw new Error('Puzzle cannot be solved');
				else {
					// Remove matching puzzle piece from this.loosePuzzlePieces
					const matchingPuzzleIndex = this.loosePuzzlePieces.findIndex(puzzle => puzzle.matchWithRotation(...criteria));
					this.loosePuzzlePieces.splice(matchingPuzzleIndex, 1);
					// Add matching puzzle piece to solution matrix
					this.solution[row][col] = matchingPuzzle;
				}
			}
		}
		return this.solution;
	}

}

class PuzzlePiece {
	constructor(edgeLeft, edgeTop, edgeRight, edgeBottom) {
		this.left = edgeLeft;
		this.top = edgeTop;
		this.right = edgeRight;
		this.bottom = edgeBottom;
	}

	matchWithRotation(edge1, edge2, edge3, edge4) {
		if(this.match(edge1, edge2, edge3, edge4)) return true;
		this.rotate(90);
		if(this.match(edge1, edge2, edge3, edge4)) return true;
		this.rotate(90);
		if(this.match(edge1, edge2, edge3, edge4)) return true;
		this.rotate(90);
		if(this.match(edge1, edge2, edge3, edge4)) return true;
		this.rotate(90);
		return false;
	}

	match(edge1, edge2, edge3, edge4) {
		return !!(this.left.matches(edge1) && this.top.matches(edge2)
			&& this.right.matches(edge3) && this.bottom.matches(edge4));
	}

	// Rotate by 90 degrees
	rotate() {
			let temp = this.left;
			this.left = this.bottom;
			this.bottom = this.right;
			this.right = this.top;
			this.top = temp;
	}

}

class Edge {
	constructor(type) {
		this.type = type;
	}

	matches(edge) {
		if (!edge) return true;
		return this.type = - edge.type;
	}

}
