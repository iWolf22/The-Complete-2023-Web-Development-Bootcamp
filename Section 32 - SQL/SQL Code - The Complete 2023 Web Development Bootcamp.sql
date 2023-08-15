/* -----===== SQL Code - The Complete 2023 Web Development Bootcamp =====----- */
/* Joshua Dierickse */

/*
Online SQL Code Editor
https://sqliteonline.com/

W3Schools SQL
https://www.w3schools.com/sql/

C.R.U.D.
Create
Read
Update
Delete
*/

/* -----===== Create =====----- */

/* Creates Table */
/* https://www.w3schools.com/sql/sql_create_table.asp */
CREATE TABLE products (
 	id INT NOT NULL,
 	name STRING,
 	price MONEY,
 	PRIMARY KEY (id)
)

/* Inserts Products */
/* https://www.w3schools.com/sql/sql_insert.asp */
INSERT INTO products
VALUES (1, "Pen", 1.20)

/* Inserts A Product Without A Price */
/* https://www.w3schools.com/sql/sql_insert.asp */
INSERT INTO products (id, name)
VALUES (2, "Pencil")

/* -----===== Read =====----- */

/* Shows The Table */
/* https://www.w3schools.com/sql/sql_select.asp */
SELECT * FROM products 


/* Show Just Two Items From The Table */
/* https://www.w3schools.com/sql/sql_select.asp */
SELECT name, price FROM 'products';

/* Isolates Just 1 ID */
/* https://www.w3schools.com/sql/sql_where.asp */
SELECT * FROM products WHERE id=1

/* -----===== Update =====----- */

/* Update A Value */
/* https://www.w3schools.com/sql/sql_update.asp */
UPDATE products
SET price = 0.80
WHERE id = 2


/* Adding Another Column */
/* https://www.w3schools.com/sql/sql_alter.asp */
ALTER TABLE products
ADD stock INT


/* -----===== Delete =====----- */

/* Delete A Row */
/* https://www.w3schools.com/sql/sql_delete.asp */
DELETE FROM products
WHERE id = 2


/* -----===== Shopping Store Database Project =====----- */

/* Creating Orders Table */
/* https://www.w3schools.com/sql/sql_primarykey.asp */
/* https://www.w3schools.com/sql/sql_foreignkey.asp */
CREATE TABLE orders (
 	id INT NOT Null,
 	order_number INT,
 	customer_id INT,
 	product_id INT,
 	PRIMARY KEY (id),
 	FOREIGN KEY (customer_id) REFERENCES customer (id),
 	FOREIGN KEY (product_id) REFERENCES products (id)
 )

/* Adds 2 Orders */
INSERT INTO orders
VALUES (1, 4362, 2, 1)

INSERT INTO orders
VALUES (2, 3254, 1, 1)


/* Creates Customers Table */
CREATE TABLE customers (
 	id INT NOT NULL,
 	first_name STRING,
 	last_name STRING,
 	address STRING,
 	PRIMARY KEY (id)
)


/* Adds 2 Customers */
INSERT INTO customers
VALUES (1, "John", "Doe", "32 Cherry Blvd")
INSERT INTO customers
VALUES (2, "Angela", "Yu", "12 Sunset Drive")


/* Joins Multiple Tables (Combines Orders Table with Customers Table) */
/* https://www.w3schools.com/sql/sql_join_inner.asp */
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers_id


/* Joins Multiple Tables (Combines Orders Table with Customers Table and Products Table) */
SELECT orders.order_number, customers.id, customers.first_name, customers.last_name, customers.address, products.id, products.name, products.price, products.stock
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id
INNER JOIN products ON orders.product_id = products.id