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
## Create an Environmental Variables File
You will have to create a .env file with the following variables:
```
PG_USER="your user here"
PG_PASSWORD="your password here"
PG_HOST="your host here"
PG_PORT="your port here"
PG_DATABASE="books"
```
## How to Run the Server
```
npm i
node index.js
```
