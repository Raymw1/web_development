// CALCULATE
//      Number of categories
//      Number of authors
//      Display Augusto Cury's books
//      
//      
//      

const booksByCategory = [
    {
        category: "Finanças",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Letcher"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]

let categories = booksByCategory.length;
console.log("The total of categories is " + categories)
for (let category of booksByCategory) {
    let books = category.books.length
    console.log(`The number of books in the category of ${category.category} is ${books}`)
}

function countAuthors() {
    let authors = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author);
            } 
        }
    }
    console.log("The number of authors is " + authors.length);
}

function countBooksAuthor(author) {
    let books = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author == author) {
                books.push(book.title);
            } 
        }
    }
    console.log(`The number of books of ${author} is ${books.length}. These books are ${books.join(", ")}`);
}

countAuthors();
countBooksAuthor("Augusto Cury");