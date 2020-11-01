const Queue = require('./util/queue');

class Animal {
	constructor(name, type, order) {
		this.name = name;
		this.type = type;
		this.order = order;
	}

}
/**
 * Uses two different queues one for dogs and one for cats. Each entry is
 * assigned a unique identifier which allows dequeueAny to determine which of
 * the two queues to dequeue an item from.
 *
 * N = number of animals
 * Time: enqueue O(1), dequeue O(1), dequeueAny O(1)
 * Additional space: enqueue O(1), dequeue O(1), dequeueAny O(1)
 * Additional space required to hold unique order per animal.
 */
class AnimalShelter {
	constructor() {
		this.dogs = new Queue();
		this.cats = new Queue();
		this.order = 1;
	}

	add(name, type) {
		const animal = new Animal(name, type, this.order);
		if (type === 'dog') {
			this.dogs.add(animal);
			this.order++;
		}
		else if (type === 'cat') {
			this.cats.add(animal);
			this.order++;
		}
		else throw new Error('Type needs to dog or cat');
	}

	removeAny() {
		const lastDog = this.dogs.peek();
		const lastCat = this.cats.peek();
		if (lastDog?.order < lastCat?.order) return this.dogs.remove();
		return this.cats.remove();
	}

	remove(type) {
		if (type === 'dog') return this.dogs.remove();
		else if (type === 'cat') return this.cats.remove();
		else throw new Error('Type needs to dog or cat');
	}
}

const as = new AnimalShelter();
as.add('dog1', 'dog');
as.add('dog2', 'dog');
as.add('cat1', 'cat');
as.add('cat2','cat');

const removedDog1 = as.removeAny();
const removedCat1 = as.remove('cat');

console.log({ removedDog1 , removedCat1 });
