class OnlineLibrary {
	constructor() {
		this.books = [];
		this.members = [];

	}

	addBookToCollection() {}

	removeBookFromCollection() {}

	lendBook() {}

	acceptBookReturn() {}

	acceptNewMember() {}

	removeMember() {}

}

class Member {
	constructor(name, dob, etc) {
		this.name = name;
		this.books = [];
		//etc
	}

	rentBook() {}

	returnBook() {}
}

class Book {
	constructor(title, author, etc) {
		this.title = title
		// etc
		this.available = true;
		this.dueDate = null;
	}

	rentBook() {}
	returnBook() {}
	setDueDate() {}
	isOverdue() {}
}
