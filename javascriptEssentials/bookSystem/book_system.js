let books = []; // books array
const submitBtn = document.getElementById("submitBtn"); //submit btn

submitBtn.addEventListener('click',addBook);
// adding book 
function addBook(){
    // getting user input
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pageNumber = document.getElementById('pageNumbers').value;

    // checking for empy fields
    if (bookName && authorName && bookDescription && !isNaN(pageNumber)){
        // object to store data
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pageNumber
        };
        // adding book to books array
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// showing books
function showbooks(){

    if(books.length >= 1){
        const booksDiv = books.map((book,index)=>{
            return (
                `<h1>book Number: ${index + 1}</h1>
                 <p><strong>Book Name: </strong>${book.name}</p>
                 <p><strong>Author Name: </strong>${book.authorName}</p>
                 <p><strong>Book Description: </strong>${book.bookDescription}</p>
                 <p><strong>No. of Pages: </strong>${book.pageNumber} pages(s)</p>
                 <button onclick="deletebook(${index})">Delete</button>`
            )
        });
        document.getElementById('books').innerHTML = booksDiv.join('');
    } else {
        document.getElementById('books').innerHTML = "<p><strong>No books</strong></p>"
    }
}

// clear inputs
function clearInputs(){
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pageNumbers').value = '';
}

// delete book
function deletebook(index){
    books.splice(index,1);
    showbooks()
}