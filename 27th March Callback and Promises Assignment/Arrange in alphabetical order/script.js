const booksList = [
    {title: "The India Story",
    author: "Bimal Jalal",
    year: 2022},

    {title: "A Place Called Home",
    author: "Preety Shenoy",
    year: 2022},

    {title: "Queen Of Fire",
    author: "Devika Rangachari",
    year: 2022},
];

function logTitles (titles){
    titles.sort();
    console.log(titles.join(", "));
};

function extractTitles (booksList, callBack){
    const titles = booksList.map((book) => book.title);
    callBack(titles);
};

extractTitles(booksList, logTitles)