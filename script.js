const myLibrary = [""];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function (){
        let wasRead;

         if(this.read){
            wasRead = "was read"
        } else {
            wasRead = "was not read yet";
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${wasRead}` ;

    }
}


function addBookToLibrary() {
  
}
