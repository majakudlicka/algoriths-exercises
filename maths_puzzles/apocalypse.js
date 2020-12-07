function simulateOneFamily() {
	let numberOfGirls = 0;
	let numberOfBoys = 0;
	const random = Math.random();
	if (random > 0.5) numberOfGirls++;
	else numberOfBoys++;

	while(!numberOfGirls) {
		if (Math.random() > 0.5) {
			numberOfGirls++;
		} else {
			numberOfBoys++;
		}
	}

	return { numberOfGirls, numberOfBoys };
}

function simulatePopulation(n) {
	let boys = 0;
	let girls = 0;
	for (let i = 0; i < n; i++) {
		let { numberOfGirls, numberOfBoys } = simulateOneFamily();
		girls+=numberOfGirls;
		boys+=numberOfBoys;
	}
	const ratio = boys/(boys + girls);
	return ratio;
}

const res = simulatePopulation(1000);
console.log('ratio is ', res);
