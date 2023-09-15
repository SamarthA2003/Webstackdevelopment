document.addEventListener("DOMContentLoaded", function () {
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookListDiv = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", function () {
        const xhr = new XMLHttpRequest();
        const url = "books.json";
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const books = JSON.parse(xhr.responseText);
                displayBooks(books);
            }
        };
        xhr.send();
    });

    function displayBooks(books) {
        bookListDiv.innerHTML = "";
        const ul = document.createElement("ul");
        books.forEach(function (book) {
            const li = document.createElement("li");
            li.textContent = book.title + " by " + book.author + "Genre is" + book.genre + "published in" + book.publication_year + "rating is" + book.rating;
            ul.appendChild(li);
        });
        bookListDiv.appendChild(ul);
    }
});
