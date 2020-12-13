// Respondent, Manager and Director could also have their own classes (extending CallCenterEmployee class if they
// were to have some other distinguishing characteristics
class CallCenterEmployee {
	constructor(type) {
		if (!['respondent', 'manager', 'director'].includes(type)) {
			throw new Error('Invalid employee type');
		}
		this.type = type;
		this.isAvailable = true;
	}

	pickUpPhone() {
		console.log(this.type, ' picks up the phone');
		this.isAvailable = false;
	}

	endCall() {
		this.isAvailable = true;
	}
}

class CallCenter {
	constructor(employees) {
		this.employees = employees;
		this.respondents = [];
		this.managers = [];
		this.directors = [];
		this.employees.forEach(employee=>{
			if (employee.type === 'respondent') {
				this.respondents.push(employee);
			} else if (employee.type === 'manager') {
				this.managers.push(employee);
			} else {
				this.directors.push(employee);
			}
		});
	}

	getAvailableRespondents() {
		return this.respondents.filter(r => r.isAvailable);
	}

	getAvailableManagers() {
		return this.managers.filter(m => m.isAvailable);
	}

	getAvailableDirectors() {
		return this.directors.filter(d => d.isAvailable);
	}

	dispatchCall() {
		if (this.getAvailableRespondents().length) return this.getAvailableRespondents()[0].pickUpPhone();
		if (this.getAvailableManagers().length) return this.getAvailableManagers()[0].pickUpPhone();
		if (this.getAvailableDirectors().length) return this.getAvailableDirectors()[0].pickUpPhone();
		console.log('Line busy');
	}
}

const R1 = new CallCenterEmployee('respondent');
const R2 = new CallCenterEmployee('respondent');
const R3 = new CallCenterEmployee('respondent');

const M1 = new CallCenterEmployee('manager');
const M2 = new CallCenterEmployee('manager');
const M3 = new CallCenterEmployee('manager');

const D1 = new CallCenterEmployee('director');
const D2 = new CallCenterEmployee('director');
const D3 = new CallCenterEmployee('director');

const CC = new CallCenter([R1, R2, R3, M1, M2, M3, D1, D2, D3]);

CC.dispatchCall();
CC.dispatchCall();
CC.dispatchCall();
CC.dispatchCall();
CC.dispatchCall();
CC.dispatchCall();
CC.dispatchCall();
CC.dispatchCall();
CC.dispatchCall();
CC.dispatchCall();
