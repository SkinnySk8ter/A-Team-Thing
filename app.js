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
        if (response.new_employee === true) {
            getInfo(add_employee);
        } else {
            writeHTML();
        }
    });
}

add_employee();