import express from "express";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  password: "post111/",
  host: "localhost",
  port: 5432,
  database: "books"
});

db.connect();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

let books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher’s Stone",
    isbn: 1408855895,
    rating: 10,
    review: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    notes: "Harry Potter and the Sorcerer’s Stone is the U.S. title of a 1997 novel by J. K. Rowling that is known elsewhere as Harry Potter and the Philosopher’s Stone. It is a seminal work in contemporary fiction, laying the foundation for the immensely popular Harry Potter series. The novel follows the eponymous protagonist, a young orphan living with his cruel aunt and uncle, who discovers on his eleventh birthday that he is a wizard. Harry is soon admitted to Hogwarts School of Witchcraft and Wizardry, where he begins to learn about his past, make lifelong friends, and face the mysteries surrounding the Sorcerer’s Stone.\nThe book not only introduces the protagonist, Harry Potter, but also establishes the magical world of witches and wizards in which Harry’s character develops. By introducing Harry, a reluctant hero and “nobody,” at the outset, Rowling is able to describe his journey of self-discovery, exploring how the notion of identity is shaped by one’s choices.\nSet in a magical realm parallel to the non-magical world, the story encompasses themes of friendship, bravery, and the battle between good and evil. Rowling’s rich and imaginative narrative introduces readers to a host of memorable characters, including Hermione Granger, Ron Weasley, and the enigmatic Professor Dumbledore. Harry Potter and the Sorcerer’s Stone became a cultural phenomenon. Its success led to the creation of a globally beloved book series that Rowling continued with Harry Potter and the Chamber of Secrets in 1998. The 2001 film version of Harry Potter and the Sorcerer’s Stone launched an equally popular series of Harry Potter film adaptations."
  }, {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    isbn: 1408855666,
    rating: 10,
    review: "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.",
    notes: "Harry Potter and the Chamber of Secrets begins when Harry is spending a miserable summer with his only remaining family, the Dursleys. During a dinner party hosted by his uncle and aunt, Harry is visited by Dobby, a house-elf. Dobby warns Harry not to return to Hogwarts, the magical school for wizards that Harry attended the previous year. Harry politely disregards the warning, and Dobby wreaks havoc in the kitchen, infuriating the Dursleys. The Dursleys angrily imprison Harry in his room for the rest of the summer. Luckily, Harry's friend Ron Weasley steals Harry away in a flying car, and Harry happily spends the rest of the summer at the Weasley home.\nWhile shopping for school supplies with the Weasleys, Harry has two unfortunate encounters. He first encounters Lockhart, one of his teachers, who demands to be in a photo shoot with Harry. Harry then encounters Lucius Malfoy, the evil father of one of Harry's enemies, who almost starts a fight with Mr. Weasley. As Harry prepares to return to Hogwarts, he finds that he and Ron are unable to enter the magically invisible train platform, so they fly the Weasley car to Hogwarts. They land messily, and both boys are given detentions. Lockhart, who believes Harry flew the car to get attention, lectures Harry.\nQuidditch practices begin and Draco Malfoy is the new Slytherin seeker. On the field, he calls Hermione a 'mudblood,' insulting her Muggle heritage. After taunting Hermione, Draco is the suspect when, on Halloween night, someone petrifies the school caretaker's cat and writes a threatening message. Before the cat is attacked, Harry twice hears an eerie voice. He hears it first during his detention and second during a party, moments before the cat is attacked. Everybody in the school is alarmed. By doing some research, Harry, Ron, and Hermione learn that fifty years ago a chamber at Hogwarts was opened and a student was killed.\nPlaying for Gryffindor, Harry wins the Quidditch match against Slytherin. During the game, an enchanted ball hits Harry and causes him to lose the bones in his arm. Dobby, a house elf, has enchanted the ball in an effort to have Harry injured and sent home. That night, Harry sees the body of a first-year who has been petrified arrive at the hospital. Soon after, Lockhart begins a dueling club. During the first meeting, Harry terrifies his fellow students by speaking in Parseltongue to a snake. Harry's ability frightens the others because only the heir of Slytherin, who is responsible for opening the chamber, would have the ability to converse with snakes. Harry comes under further suspicion when he stumbles upon the petrified bodies of Justin Finch-Fletchley and Nearly- Headless Nick.\nDetermined to catch the culprit, Ron, Harry and Hermione brew a potion called Polyjuice. The potion allows them to assume the bodies of Slytherins and question Malfoy on the Chamber of Secrets. They find out that Malfoy is not the heir of Slytherin. No more attacks occur for a while, and right before Valentine's Day, Harry finds a diary in the broken toilet. The diary belongs to a ghost named Moaning Myrtle who haunts the girls' restroom. Harry writes in the diary, which responds by writing back. Through this dialogue, Harry meets Tom Riddle, a boy who many years before had accused Hagrid of opening the Chamber of Secrets.\nHermione and a Ravenclaw girl are mysteriously petrified. Harry and Ron venture out of the castle to question Hagrid. Before they reach Hagrid, the Minister of Magic, Cornelius Fudge, and Lucius Malfoy remove Dumbledore and Hagrid from Hogwarts. As Hagrid is led away, he instructs the boys that by following the spiders, they can find out about the Chamber monster. Several nights later, Harry and Ron sneak into the Forbidden Forest to follow the spiders. They discover the monster who killed the girl fifty years before was not a spider, that the girl's body was found in a bathroom, and that Hagrid is innocent. The boys are almost killed by a colony of giant spiders. As they escape, Harry and Ron decide that Moaning Myrtle must have been the girl killed by the monster.\nA few days later, Ron and Harry discover a piece of paper with a description of a basilisk on it in Hermione's frozen hand. They deduce the Chamber monster is a basilisk. Before the boys can act on their knowledge, the teachers announce that Ginny Weasley has been taken into the chamber. Ron, Harry, and Lockhart slide down a secret passage in Myrtle's bathroom to underground tunnels. When Lockhart accidentally curses himself, Ron helps him and Harry leaves them behind. Harry enters the Chamber of Secrets and encounters Ginny's still body and Tom Riddle. Tom turns out to be a younger version of Voldemort, who has been enchanting Ginny through his journal. Harry calls for help from Dumbledore. A phoenix and a magic hat arrive. Tom summons a basilisk, but the phoenix punctures its eyes. The hat produces a sword, which Harry uses to kill the giant snake. Harry sticks a basilisk fang through the diary, destroying Tom. Ginny wakes up.\nHarry explains his adventure to Dumbledore. Lucius Malfoy storms into the office with his house-elf, Dobby, and Harry frees Dobby from by tricking Lucius into giving Dobby a sock. All is well in the castle as the students leave for their summer vacations."
  }
];

app.get("/", async (req, res) => {
  const sort = req.query.sort;
  let result;
  try {
    switch (sort) {
      case "newest":
        result =  await db.query("SELECT * FROM notes ORDER BY id DESC");
        break;
      case "oldest":
        result = await db.query("SELECT * FROM notes ORDER BY id ASC");
        break;
      case "best":
        result = await db.query("SELECT * FROM notes ORDER BY rating DESC")
        break;
      case "worst":
        result = await db.query("SELECT * FROM notes ORDER BY rating ASC");
        break;
      default:
        result = await db.query("SELECT * FROM notes");
    }
    books = result.rows;
  } catch (err) {
    console.log(err.stack);
  }
  res.render("index.ejs", { books: books });
});

app.post("/", async (req, res) => {
  try {
    await db.query("INSERT INTO notes (title, isbn, rating, review, notes) VALUES ($1, $2, $3, $4, $5)",
      [req.body.title, parseInt(req.body.isbn), parseInt(req.body.rating), req.body.review, req.body.notes]
    )
  } catch (err) {
    console.log(err.stack);
  }
  res.redirect("/");
});

app.get("/reviews/:id", async (req, res) => {
  try {
    const result = await db.query("SELECT * from notes");
    books = result.rows;
  } catch (err) {
    console.log(err.stack);
  }
  const id = parseInt(req.params.id);
  const foundBook = books.find((book) => book.id === id);
  res.render("review.ejs", { book: foundBook });
});

app.post("/reviews/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await db.query("UPDATE notes SET title = $1, isbn = $2, rating = $3, review = $4, notes = $5 WHERE id = $6",
      [req.body.title, parseInt(req.body.isbn), req.body.rating, req.body.review, req.body.notes, id]
    );
  } catch (err) {
    console.log(err.stack);
  }
  res.redirect(`/reviews/${id}`);
});

app.post("/delete", async (req, res) => {
  const id = parseInt(req.body.id);
  try {
    await db.query("DELETE FROM notes WHERE id = $1", [id]);
  } catch (err) {
    console.log(err.stack);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})
