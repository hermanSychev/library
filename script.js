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

function displayBooks() {
	const holder = document.querySelector("#library");
	holder.innerHTML = "";

	for (const book of myLibrary) {
		const card1 = document.createElement("p");
		const card2 = document.createElement("p");
		const card3 = document.createElement("p");
		const card4 = document.createElement("p");
		const item = document.createElement("div");
		item.setAttribute("id", crypto.randomUUID());
		const removeBtn = document.createElement("button");
		const switchBtn = document.createElement("button");
		item.classList.add("book");

		card1.textContent = book.title;
		card2.textContent = book.author;
		card3.textContent = `${book.pages} pages`;
		card4.textContent = book.info();
		switchBtn.textContent = "toggle";
		removeBtn.textContent = "remove";

		switchBtn.addEventListener("click", ()=>{
			book.toggleRead()
			card4.textContent = book.info();
		});

		removeBtn.addEventListener("click", () => {
			item.remove();
		});

		item.appendChild(card1);
		item.appendChild(card2);
		item.appendChild(card3);
		item.appendChild(card4);
		item.appendChild(switchBtn);
		item.appendChild(removeBtn);

		holder.appendChild(item);
	}
}

Book.prototype.toggleRead = function () {
	this.read = !this.read;
};

const dialogButton = document.querySelector("#dialog-button");
const dialog = document.querySelector("#dialog");

dialogButton.addEventListener("click", () => {
	dialog.showModal();
});

const bookForm = document.querySelector("#book-form");
const addButton = document.querySelector("#submit");

bookForm.addEventListener("submit", function (event) {
	event.preventDefault();
	const title = document.querySelector("#title");
	const author = document.querySelector("#author");
	const pages = document.querySelector("#pages");
	const read = document.querySelector("#read");

	let label = title.value;
	let creator = author.value;
	let amount = Number(pages.value);
	let study = read.checked;

	dialog.close();
	addBookToLibrary(label, creator, amount, study);
	displayBooks();
});
