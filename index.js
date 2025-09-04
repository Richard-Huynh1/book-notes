import express from "express";
// import pg from "pg";

const app = express();
const port = 3000;

app.use(express.static("public"));

let books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher’s Stone",
    isbn: 1408855895,
    rating: 10,
    review: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!"
  }, {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    isbn: 1408855666,
    rating: 10,
    review: "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike."
  }
]

app.get("/", (req, res) => {
  res.render("index.ejs", { books: books });
});

app.get("/reviews/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foundBook = books.find((book) => book.id === id);
  res.render("review.ejs", { book: foundBook });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})
