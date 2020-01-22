CREATE TABLE IF NOT EXISTS orders(
id SERIAL    PRIMARY KEY,
count  INTEGER      NOT NULL,
name       CHAR(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
type CHAR(255) NOT NULL);

CREATE TABLE IF NOT EXISTS tables(
id SERIAL    PRIMARY KEY,
orderid INTEGER REFERENCES orders(id)
);

CREATE TABLE IF NOT EXISTS products(
id SERIAL    PRIMARY KEY,
name       CHAR(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
type CHAR(255) NOT NULL);

INSERT INTO products (name, price, type)
    VALUES('Café com Leite',7,'breakfast');

INSERT INTO orders (count, name, price, type)
    VALUES(1,'Misto Quente',10,'breakfast')