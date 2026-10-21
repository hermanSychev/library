const myLibrary = [];
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.id = crypto.randomUUID();

	this.info = function () {
		let wasRead;

		if (this.read) {
			wasRead = "was read";
		} else {
			wasRead = "was not read yet";
		}
		return wasRead;
	};
}

function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read);
	myLibrary.push(book);
}

addBookToLibrary("The Master and Margarita", "Mikhail Bulgakov", 384, true);
addBookToLibrary("The Master and Margarita", "Mikhail Bulgakov", 384, false);
console.log(myLibrary);

function displayBooks() {
	const holder = document.querySelector("#library");

	for (const book of myLibrary) {
		const card1 = document.createElement("p");
		const card2 = document.createElement("p");
		const card3 = document.createElement("p");
		const card4 = document.createElement("p");
		const item = document.createElement("div");
        item.classList.add("book")

		card1.textContent = book.title;
		card2.textContent = book.author;
		card3.textContent = `${book.pages} pages`;
		card4.textContent = book.info();

		item.appendChild(card1);
		item.appendChild(card2);
		item.appendChild(card3);
		item.appendChild(card4);
		holder.appendChild(item);
	}
}

displayBooks();
