const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([

        {
        type: 'input',
        name: 'name',
        message: "Enter employee name:",
        },
        {
        type: 'input',
        name: 'id',
        message: "Enter employee id:",
        },
        {
        type: 'input',
        name: 'email',
        message: "Enter employee email:",
        },
        {
        type: 'list',
        name: 'role',
        message: "Choose employee role:",
        choices: ['Engineer', 'Intern', 'Manager', 'Employee'],
        },
        {
        type: 'input',
        name: 'github',
        message: "Enter github username:",
        when: (answers) => {
            if (answers.role === 'Engineer') {
                return true;
            };
        }
        },
        {
        type: 'input',
        name: 'school',
        message: "Enter current school attending:",
        when: (answers) => {
            if (answers.role === 'Intern') {
                return true;
            }
        }
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: "Enter manager's office number:",
        when: (answers) => {
            if (answers.role === 'Manager') {
                return true;
            }
        }
        },
    ]);
};