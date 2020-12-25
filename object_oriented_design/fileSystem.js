const emptyFolderSize = 10;

class FileSystem {
	constructor(memorySize) {
		this.folders = [];
		this.memorySize = memorySize;
		this.memoryUsage = 0;
	}

	createFolder(name) {
		// Check if there is enough memory to create a folder - error if not
		// Check if name exists and append "copy" if it does
		this.folders.push(new Folder(name));
		this.memoryUsage-=emptyFolderSize;
	}

	removeFolder() {
		// Find folder by name and remove.
		// Decrease the memory usage
	}
}

class Folder {
	constructor(name) {
		this.name = name;
		this.files = [];
		this.subFolders = [];
		this.memoryUsage = emptyFolderSize;
	}

	addFile(name, size, type) {
		// Check if there is enough memory to create a folder - error if not
		// Check if name exists and append "copy" if it does
		const file = new File(name, size, type);
		this.files.push(file);
		this.memoryUsage += file.size;
	}

	removeFile(id) {
		// Find file by id
		// Remove the file
		// Decrease memory usage by file.size
	}

	addSubFolder() {

	}

	removeSubFolder() {

	}
}

class File {
	constructor(name, size, type) {
		this.name = name;
		this.size = size;
		this.type = type;
		this.created = new Date();
		this.content = {};
	}

	editFile(newContent) {
		// Edit content, save if enough memory
		// Adjust file size
	}

}
