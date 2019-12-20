const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./manager.js');

class Employee {

    // SETUP CONSTRUCTOR TO RECEIVE ANSWERS FROM PROMPTS
    constructor() {
        this.name = null;
        this.email = null;
        this.id = null;
        this.role = null;
        this.roleInfo = null;
    }

    promptUser() {
        return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of the new employee?'
        }]).then(({ name }) => {

                // SET CONSTRUCTOR NAME EQUAL TO ANSWER FROM PROMPT ABOVE
                this.name = name;

                // BRING IN THE NAME FROM PROMPT ABOVE TO MAKE FOLLOWING QUESTIONS DYNAMIC
                inquirer.prompt([{
                        type: 'input',
                        name: 'email',
                        message: `What is ${name}'s email?`
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: `What is ${name}'s id?`
                    },
                    {
                        type: 'list',
                        name: 'role',
                        message: `What is ${name}'s role?`,
                        choices: ['Manager','Engineer','Intern']
                    }

                ]).then(({ email, id, role }) => {
                    
                    // SET CORRESPONDING CONSTRUCTOR KEYS EQUAL TO ANSWERS ABOVE
                    this.email = email;
                    this.id = id;
                    this.role = role;

                    // CREATE PROMPT THAT DYNAMICALLY ASKS QUESTIONS BASED ON ROLE SELECTED ABOVE
                    inquirer.prompt([
                    {
                        type: 'input',
                        name: 'roleInfo',
                        message: 

                            ( role == 'Manager' ? `What is ${name}'s office number?`
                            : role == 'Engineer' ? `What is ${name}'s github username?`
                            : role == 'Intern' ? `Which school does ${name} attend?`
                            : 'This is not a valid response.' )
                    }

                ]).then(({ roleInfo }) => {

                    // SET CONSTRUCTOR ROLE EQUAL TO ANSWER FROM ABOVE PROMPT
                    this.roleInfo = roleInfo;
                    this.managerHtmlRender();
                    
                }
                )})

            }

            
        )
    }

    managerHtmlRender() {
        // console.log('THIS WORKS');
        return manager.createManager(this);
        // let test = () => {
            // console.log(this);
        // }
        
        // test();
    }

    engineerHtmlRender() {}

    internHtmlRender() {}
}

var newEmployee = new Employee;
newEmployee.promptUser();

// console.log(newEmployee.name);


module.exports = Employee;

// exports.Employee;