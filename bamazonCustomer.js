require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require('console.table');

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
});

//Prompt the user with messages regarding their product id and how many units they would like to purchase. 

inquirer
  .prompt([
    // Here we give the user a list of product IDs to choose from.
    {
      type: "list",
      message: "Which product are you interested in purchasing?",
 //  choices: query,
      name: "productID"
    },
{
      type: "input",
      message: ""
 //     name: ""
    },
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("You chose " + inquirerResponse.choices+ ".");
    }
    else {
console.log("Stuff no work")
    }
  });