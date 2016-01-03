Codecademy - SQL Notes [RDBMS: SQLite] http://www.w3schools.com/sql/

-- Creating a table with 3 columns

CREATE TABLE celebs (id INTEGER, name TEXT, age INTEGER);

-- Inserting rows into a talbe

INSERT INTO celebs (id, name, age) VALUES (1, 'Justin Bieber', 21);
SELECT * FROM celebs;

-- Updating a row in  a table

UPDATE celebs 
SET age = 22 
WHERE id = 1; 

SELECT * FROM celebs; 

-- Adding a new column to the table

ALTER TABLE celebs 
ADD twitter_handle TEXT; 

ADD (twitter_handle TEXT,
     twitter_feetle TEXT);

SELECT * FROM celebs;

-- Delete all rows that have a NULL value in a certain column

DELETE FROM celebs WHERE twitter_handle IS NULL;

-- Delete column from table

ALTER TABLE table_name
DROP COLUMN column_name

-- Change datatype of column

ALTER TABLE Persons
ALTER COLUMN DateOfBirth year

-- Rename column

ALTER TABLE table_name
  RENAME COLUMN old_name TO new_name;

-- Rename table

ALTER TABLE table_name
  RENAME TO new_table_name;

[Summary]

- CREATE TABLE creates a new table
- INSERT INTO adds a new row to a table
- SELECT queries data FROM a table
- UPDATE edits a row in a table
- ALTER TABLE changes an existing table
- DELETE FROM deletes rows FROM a table

[Extracting Data]

- LIKE != !!! RegEx !!!
  + SQL is NOT case sensitive
  + '_' wildcard for any single character
  + '%' is a wildcard character that matches zero or more missing letters in the pattern
  + '[charlist]' sets and ranges of characters to match
  + '[^charlist]' or '[!charlist]' matches only a character NOT specified within the brackets

SELECT * FROM movies
WHERE name BETWEEN 'A' and 'J'; 
# This statement filters the result set to only include movies with names that begin with letters "A" through "J"

SELECT * FROM movies
ORDER BY imdb_rating DESC
LIMIT 5;

[Aggregate Functions]

SELECT COUNT(*) FROM fake_apps; # where row is not NULL

SELECT MAX(downloads) FROM fake_apps; 

SELECT name, category, MAX(downloads) FROM fake_apps
GROUP BY category;

SELECT price, ROUND(AVG(downloads), 2) FROM fake_apps
GROUP BY price;

- Aggregate functions combine multiple rows together to form a single value of more meaningful information.
- COUNT takes the name of a column(s) as an argument and counts the number of rows where the value(s) is not NULL.
- GROUP BY is a clause used with aggregate functions to combine data from one or more columns.
- SUM() takes the column name as an argument and returns the sum of all the values in that column.
- MAX() takes the column name as an argument and returns the largest value in that column.
- MIN() takes the column name as an argument and returns the smallest value in that column.
- AVG() takes a column name as an argument and returns the average value for that column.
- ROUND() takes two arguments, a column name and the number of decimal places to round the values in that column.

[JOINs]

CREATE TABLE artists(id INTEGER PRIMARY KEY, name TEXT);

By specifying that the id column is the PRIMARY KEY, SQL makes sure that:
- None of the values in this column are NULL
- Each value in this column is unique

A table can not have more than one PRIMARY KEY column.

SELECT albums.name, albums.year, artists.name FROM albums, artists

- One way to query multiple tables is to write a SELECT statement with multiple table names separated by a comma. This is also known as a cross join. Here, albums and artists are the different tables we are querying.
- When querying more than one table, column names need to be specified by table_name.column_name. Here, the result set includes the name and year columns from the albums table and the name column from the artists table.

SELECT
  *
FROM
  albums
JOIN artists ON
  albums.artist_id = artists.id;