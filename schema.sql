DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR (256) NOT NULL,
    department_name VARCHAR (256) NOT NULL,
    price DECIMAL NOT NULL,
    stock_quantity INT NOT NULL
    );


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Harry Potter and the Prisoner of Azkaban","Books",25,50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("If You Care Pretentious Coffee Filters","Beverages/Beverage Accessories",4.50,15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone X","Technology",1000,5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Forest Green Bomber Jacket","Clothing",50,3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("15.4 Inch 2012 MacBook Pro","Technology",1300,1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Specialized Brand Bicycle","Sports/Fitness",600,2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Potted Marigolds","Home/Garden",10,5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Women's Denim Jacket Size Medium","Clothing",55,3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Twins Baseball Cap","Clothing",25,4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Men's Fossil Watch with Leather Band","Clothing",100,3);

SELECT * FROM products;