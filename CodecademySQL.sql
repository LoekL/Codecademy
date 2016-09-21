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

    /* Top 10 Tips */ # https://blog.jooq.org/2016/04/25/10-sql-tricks-that-you-didnt-think-were-possible/

# Everything is a table

SELECT *
FROM (
  VALUES(1, 'a'),(2, 'b'),(3, 'c')
) t(a, texts)

SELECT *
FROM substring('abcde', 2, 3)

# Data Generation with Recursive SQL

== SQL: Analyzing Business Metrics ==

SELECT date(ordered_at), COUNT(1) # COUNT(1) counts the first column (date)
FROM orders

-- Return scalar in nested query..!

SELECT
  a.region,
  COUNT(*) / (SELECT 1.0 * COUNT(*) FROM smb_ad_account WHERE ds = '<LATEST_PARTITION,smb_ad_account>') AS percRows
FROM smb_ad_account a
WHERE a.ds = '<LATEST_PARTITION,smb_ad_account>'
GROUP BY 1

- 1.0 * COUNT(*) --> instead of casting as double

WITH sub_table_first AS (
  SELECT
    ad_account_id,
    quarter_start_segment
  FROM smb_ad_account
  WHERE ds = '<LATEST_PARTITION,smb_ad_account>'
  AND country_name = 'Netherlands'
),
sub_table_second AS (
  SELECT
    ad_account_id,
    market
  FROM smb_ad_account
  WHERE ds = '<LATEST_PARTITION,smb_ad_account>'
  AND country_name = 'Netherlands'
)
SELECT
  sub_table_first.ad_account_id,
  sub_table_first.quarter_start_segment,
  sub_table_second.market
FROM sub_table_first
JOIN sub_table_second
USING (ad_account_id) -- Same as: ON sub_table_first.ad_account_id=sub_table_second.ad_account_id

-- Calculating retention using a self-join

SELECT
  DATE(g1.created_at) as dt,
  ROUND(100 * COUNT(DISTINCT g2.user_id) / COUNT(DISTINCT g1.user_id)) AS retention
FROM gameplays AS g1
LEFT JOIN gameplays AS g2
ON g1.user_id = g2.user_id
AND DATE(g1.created_at) = DATE(DATETIME(g2.created_at, '-1 day'))
GROUP BY 1
ORDER BY 1
LIMIT 100;

== SQL: Table Transformations ==

A non-correlated subquery is a subquery that can be run independently
of the outer query and as we saw, can be used to complete a multi-step transformation.

SELECT a.dep_month,
       a.dep_day_of_week,
       AVG(a.flight_distance) AS average_distance
  FROM (
        SELECT dep_month,
              dep_day_of_week,
               dep_date,
               SUM(distance) AS flight_distance
          FROM flights
         GROUP BY 1,2,3
       ) a
 GROUP BY 1,2
 ORDER BY 1,2;

In a correlated subquery, the subquery can not be run independently of the outer query.
The order of operations is important in a correlated subquery:

1 - A row is processed in the outer query.
2 - Then, for that particular row in the outer query, the subquery is executed.

This means that for each row processed by the outer query, the subquery will also be processed for that row.
In this example, we will find the list of all flights whose distance is above average for their carrier.

# Example: Find the id of the flights whose distance is below average for their carrier.

-- Not supported yet by Presto I think

SELECT f.id
FROM flights AS f
WHERE distance < (
 SELECT AVG(distance)
 FROM flights
 WHERE carrier = f.carrier); # So only get the AVG for the specific carrier we are looking at in the outer-query.

It would also be interesting to order flights by giving them a sequence number based on time, by carrier.

For instance, assuming flight_id increments with each additional flight, we could use the following query to view flights by carrier,
flight id, and sequence number:

SELECT carrier, id,
    (SELECT COUNT(*)
FROM flights f
WHERE f.id < flights.id
AND f.carrier=flights.carrier) + 1
 AS flight_sequence_number
FROM flights;

Sometimes, in order to answer certain questions based on data,
we need to merge two tables together and then query the merged result.
Perhaps we have two tables that contain information about products in an ecommerce store that we would like to combine.

There are two ways of doing this:

1 - Merge the rows, called a join.
2 - Merge the columns, called a union.

SELECT brand FROM new_products
UNION
SELECT brand FROM legacy_products;

- UNION ALL : allows duplicates

-!- Not yet implemented in Presto (works in SQLite) -!-

On the opposite of UNION we have INTERSECT:

-- Which sold_to have aids in both Netherlands & Belgium:

SELECT
  a.sold_to_rollup_id
FROM smb_ad_account a
WHERE a.ds = '<LATEST_PARTITION,smb_ad_account>'
AND a.country_name = 'Netherlands'
INTERSECT
SELECT
  b.sold_to_rollup_id
FROM smb_ad_account b
WHERE b.ds = '<LATEST_PARTITION,smb_ad_account>'
AND b.country_name = 'Belgium'

-- EXCEPT is constructed in the same way, but returns distinct rows from the
-- first SELECT statement that aren’t output by the second SELECT statement.

SELECT column_name(s) FROM table1
EXCEPT
SELECT column_name(s) FROM table2;

-- https://prestodb.io/docs/current/sql/select.html

-!- Supported by Presto Again: -!-

-- GROUPING BY SETS

SELECT
  shipping.origin_state,
  shipping.origin_zip,
  shipping.destination_state,
  SUM(shipping.package_weight) AS sum_package_weight
FROM
(
VALUES
 ('California',94131,'New Jersey',8648,13),
 ('California',94131,'New Jersey',8540,42),
 ('New Jersey',7081,'Connecticut',6708,225),
 ('California',90210,'Connecticut',6927,1337),
 ('California',94131,'Colorado',80302,5),
 ('New York',10002,'New Jersey',8540,3)
 ) shipping (origin_state, origin_zip, destination_state, destination_zip, package_weight)
GROUP BY GROUPING SETS (
(shipping.origin_state),
(shipping.origin_state, shipping.origin_zip),
(shipping.destination_state),
() -- Group by nothing!
);

-- CUBE

-- The CUBE operator generates all possible grouping sets (i.e. a power set) for a given set of columns.

SELECT
  shipping.origin_state,
  shipping.origin_zip,
  shipping.destination_state,
  SUM(shipping.package_weight) AS sum_package_weight
FROM
(
VALUES
 ('California',94131,'New Jersey',8648,13),
 ('California',94131,'New Jersey',8540,42),
 ('New Jersey',7081,'Connecticut',6708,225),
 ('California',90210,'Connecticut',6927,1337),
 ('California',94131,'Colorado',80302,5),
 ('New York',10002,'New Jersey',8540,3)
 ) shipping (origin_state, origin_zip, destination_state, destination_zip, package_weight)
GROUP BY CUBE (shipping.origin_state, shipping.destination_state);

-- Equivalent to:

SELECT origin_state, destination_state, sum(package_weight)
FROM shipping
GROUP BY GROUPING SETS (
    (origin_state, destination_state),
    (origin_state),
    (destination_state),
    ());

-- The ROLLUP operator generates all possible subtotals for a given set of columns.

SELECT
  shipping.origin_state,
  shipping.origin_zip,
  SUM(shipping.package_weight) AS sumWeight
FROM
(
VALUES
 ('California',94131,'New Jersey',8648,13),
 ('California',94131,'New Jersey',8540,42),
 ('New Jersey',7081,'Connecticut',6708,225),
 ('California',90210,'Connecticut',6927,1337),
 ('California',94131,'Colorado',80302,5),
 ('New York',10002,'New Jersey',8540,3)
 ) shipping (origin_state, origin_zip, destination_state, destination_zip, package_weight)
GROUP BY ROLLUP (shipping.origin_state, shipping.origin_zip);

# You start off with combination of origin_state & origin_zip
# Then you ROLLUP to origin_state only
# Then you ROLLUP to nothing ()

-- Equivalent to:

SELECT origin_state, origin_zip, sum(package_weight)
FROM shipping
GROUP BY GROUPING SETS ((origin_state, origin_zip), (origin_state), ()); # You rollup from (origin_state, origin_zip), then to (origin_state) & then to nothing () --which in this case is just the total sum grouped by nothing--

--

CASE WHEN

-- If ELSE is not included, the result will be NULL

-!- SQLite Syntax -!- # Not sure about Presto

-- We'd like to know the number of baked_goods manufactured by day, and not by second. We can use the DATE() function to easily convert timestamps to dates and complete the following query:

SELECT DATE(manufacture_time), count(*) as count_baked_goods
FROM baked_goods
GROUP BY DATE(manufacture_time);

-- Similarly, we can query the time with

SELECT TIME(manufacture_time), count(*) as count_baked_goods
FROM baked_goods
GROUP BY TIME(manufacture_time);

DATETIME --> returns Date + Time (Timestamp)

-- Add 5h, 20m, 2d to delivery_time
-- delivery_time == date or timestamp data type

SELECT
  DATETIME(delivery_time, '+5 hours', '20 minutes', '2 days') AS package_time
FROM baked_goods;

-- MAX() can also act like a COALESCE, taking the larger -- SQLite
-- Not presto: https://prestodb.io/docs/current/functions/aggregate.html

SELECT
  id,
  MAX(cook_time, cool_down_time) -- MIN() works as well
FROM baked_goods;

-- SQLite + Presto --> Concatenation with ||

SELECT 'Loek' || ' ' || 'Landzaat'