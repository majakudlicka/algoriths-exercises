class BT {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	addLeft(data) {
		this.left = new BT(data);
		return this.left;
	}

	addRight(data) {
		this.right = new BT(data);
		return this.right;
	}
}

class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left === null) {
				this.left = new BST(value);
			} else {
				this.left.insert(value);
			}
		} else {
			if (this.right === null) {
				this.right = new BST(value);
			} else {
				this.right.insert(value);
			}
		}
	}
}

module.exports = { BST, BT } ;
