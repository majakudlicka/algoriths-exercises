class CircularArray {
	constructor(data) {
		this.data = data;
		this.headIndex = 0
	}

	convert(index) {
		let newIndex = this.headIndex + index;
		if (newIndex > this.data.length - 1) newIndex -= this.data.length;
		return newIndex;
	}

	rotate(shiftRight) {
		let newIndex = this.headIndex - shiftRight % this.data.length;
		if (newIndex < 0) {
			newIndex+= this.data.length;
		}
		this.headIndex = newIndex;
	}

	get(index) {
		return this.data[this.convert(index)];
	}

	set(index, value) {
		this.data[this.convert(index)] = value;
	}

	forEach(callback) {
		return this.data.forEach((item, index) => {
			let newIndex = this.convert(index)
			callback(this.data[newIndex], newIndex);
		});
	}
}

const ca = new CircularArray([1,2,3,4,5]);
ca.rotate(7);
// ca.set(0, 8);
// [4,5,1,2,3]
console.log('rotated ', ca.get(0));

ca.forEach(item => {
	console.log('item ', item);
})
