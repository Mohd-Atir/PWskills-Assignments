const books = [
  { 
    title: "Rich Dad and Poor Dad", 
    author: "robert t. kiyosaki", 
    year: 1997 
  },
  {
    title: "The India Story",
    author: "bimal jalal",
    year: 2023,
  },
  {
    title: "Pride and Prejudice",
    author: "jane austen",
    year: 1813,
  },
  {
    title: "The Rule Breakers",
    author: "preeti shenoy",
    year: 2018,
  },
  {
    title: "The Little Book of Encouragement",
    author: "dalai lama",
    year: 2020,
  },
  {
    title: "The Hunger Games",
    author: "suzanne collins",
    year: 2008,
  },
  {
    title: "The Hobbit",
    author: "j.r.r. tolkie",
    year: 1937,
  },
];

const filteredBooks = books.filter(book => book.year >= 2010).map(book => {
  return{
    title: book.title,
    author: book.author.split(' ').map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join(' '),
    year: book.year
  };
});

console.log(filteredBooks);