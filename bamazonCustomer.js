require("dotenv").config();
var mysql = require("mysql");
var cTable = require("console.table");
var inquirer = require("inquirer");
var bodyParser = require('body-parser')



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
})

//function that queries the database
function readProducts() {
  console.log("Selecting all products from Bamazon \n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    displayTable(res,promptUser);
  });

  //Function that displays SQL table in command line using console.table package.
  function displayTable(res, promptUser) {
    var table = cTable.getTable(res);
    console.log(table);
    promptUser(table);
  }
  function checkProducts(response) {
  console.log("Checking inventory in Bamazon. \n");
var query=connection.query("SELECT * FROM products WHERE ??",{item_id:response.productID},function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log("There are currently "+ res.stock_quantity+ " units of " + res.product_name+".");
  });
  console.log(query.sql);
}
//Prompt the user with messages regarding their product id and how many units they would like to purchase.
  function promptUser(table){
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
    .then(function(response,checkProducts) {
      // If the response confirms, we displays the response's username and pokemon from the answers.
      if (response.productID) {
        console.log("You've chosen to purchase "+response.quantity+" unit(s) of product #" + response.productID + ".");
        checkProducts(response);
      } else {
        console.log("Stuff no work");
      }
    });
  }
}


