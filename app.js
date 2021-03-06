let inquire = require("inquirer");
let manager = require("./assets/classes/managerclass");
let engineer = require("./assets/classes/engineerclass");
let intern = require("./assets/classes/internclass");
let employee = require("./assets/classes/employeeclass")
let fs = require("fs");

let teamArray = [];

let num = 0;
let id_num = 0;

let questions = [{
        name: 'role',
        message: 'Enter user role:',
        type: 'list',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    },
    {
        name: 'name',
        message: `Enter user's name:`,
        type: 'input'
    },
    {
        name: "email",
        message: "Enter email:",
        type: "input",
    },
    {
        name: 'github',
        message: 'Enter github username:',
        type: 'input'
    },
    {
        name: 'school',
        message: 'Enter the name of your school:',
        type: 'input'
    },
    {
        name: 'office_number',
        message: "Enter your office number",
        type: 'number'
    }
];
function add_employee() {
    inquire.prompt(questions).then(function(response) {
        if (response.questions === true) {
            getInfo(add_employee);
        } else {
            writeHTML();
        }
    });

function writeHTML() {
    let allCards = "";
 
    questions.forEach(item => {
       let cardString = item.createCard();
       allCards += cardString;
    });
 
    let fullHTML = `
    <!DOCTYPE html>
 <html lang="en">
    <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
       <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
       />
       <script
          src="https://kit.fontawesome.com/ab3fd93a87.js"
          crossorigin="anonymous"
       ></script>
       <title>My Team Roster</title>
    </head>
    <body>
       <div
          class="container-fluid bg-danger text-center d-flex align-items-center justify-content-center"
          style="height: 20vh"
       >
          <div class="h1 text-white" style="display: inline-block;">
             My Team
          </div>
       </div>
       <div class="container mt-5">
          <!-- start of card group -->
          <div class="card-deck d-inline-flex justify-content-center">
             ${allCards}
          </div>
          <!-- end of card group -->
       </div>
    </body>
 </html>
    `;
 
    fs.writeFile("./output/roster.html", fullHTML, function(err) {
       if (err) {
          return console.log(err);
       }
    });
 }
}

add_employee();
