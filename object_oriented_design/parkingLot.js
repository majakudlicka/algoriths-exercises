class ParkingLot {
	constructor(capacity, fee) {
		// true if occupied, false if unoccupied
		this.spaces = new Array(capacity).fill(false);
		this.fee = fee;
		this.feesCollected = 0;
	}

	collectFee() {
		this.feesCollected+=this.fee;
	}

	findSpace() {
		if (this.getCurrentCapacity() === 0) {
			console.log('Sorry, no parking spaces left');
			return null;
		}
		let i = 0;
		while (this.spaces[i] === true) {
			i++;
		}
		return i;
	}

	parkCar(car) {
		const spaceIndex = this.findSpace();
		if (spaceIndex === null) return;
		console.log('parking car');
		this.collectFee();
		car.park(spaceIndex);
		this.spaces[spaceIndex] = true;
	}

	unParkCar(car) {
		console.log('car is leaving...');
		const spaceIndex = car.unPark();
		this.spaces[spaceIndex] = false;
	}

	getCurrentCapacity() {
		return this.spaces.reduce((acc, curr) => {
			return acc + !curr;
		}, 0);
	}

}

class Car {
	constructor(model, color, registration) {
		this.model = model;
		this.color = color;
		this.registration = registration;
		this.parkingSpaceIndex = null;
	}

	park(spaceIndex) {
		this.parkingSpaceIndex = spaceIndex;
	}

	unPark() {
		const originalParkingSpace = this.parkingSpaceIndex;
		this.parkingSpaceIndex = null;
		return originalParkingSpace;
	}


}

const PL = new ParkingLot(7, 5);

const Fiat = new Car('fiat', 'red', '123456');
const Opel = new Car('opel', 'blue', 'abflnr');
const Rover = new Car('rover', 'white', 'bwdfmds');

PL.parkCar(Fiat);
PL.parkCar(Opel);
PL.parkCar(Rover);
PL.unParkCar(Opel);
const cap = PL.getCurrentCapacity();
console.log('capacity is ', cap);
