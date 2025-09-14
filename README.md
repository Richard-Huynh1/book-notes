# Book Notes
This web application is used to store your book notes, reviews and ratings.
## How to Set up the Database
Open pgAdmin 4 and create a database called "books". Then run the following query commands:
```
DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  isbn TEXT,
  rating FLOAT NOT NULL,
  review TEXT NOT NULL,
  notes TEXT
);
```
## Things you may Have to Change
In the index.js file, you may have to change some or all of the following:
```
const db = new pg.Client({
  user: "postgres",     // May have to change the user
  password: "post111/", // May have to change the password
  host: "localhost",
  port: 5432,           // May have to change the port
  database: "books"
});
```
## How to Run the Server
```
npm i
node index.js
```
