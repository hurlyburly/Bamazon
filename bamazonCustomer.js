require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

//Set up connection to mySQL database, passwords can be loaded in .env files that will pull in.
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  // Your port
  port: 3306,
  // Your username
  user: process.env.DB_USER,
  // Your password
  password: process.env.DB_PASS,
  // Your database
  database: "bamazon"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
});

//function that queries the database
function readProducts() {
  console.log("Selecting all products from Bamazon \n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    displayTable(res);
  });

  //Function that displays SQL table in command line using console.table package.
  function displayTable(res) {
    var table = cTable.getTable(res);
    console.log(table);
  }
  //Prompt the user with messages regarding their product id and how many units they would like to purchase.
  inquirer
    .prompt([
      // Here we give the user a list of product IDs to choose from.
      {
        type: "input",
        message: "Which product are you interested in purchasing?",
        name: "productID"
      },
      {
        type: "input",
        message: "How many units of the product would you like to purchase?",
        name: "quantity"
      }
    ])
    .then(function(inquirerResponse) {
      // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      if (inquirerResponse.confirm) {
        console.log("You chose " + inquirerResponse.choices + ".");
      } else {
        console.log("Stuff no work");
      }
    });
}
