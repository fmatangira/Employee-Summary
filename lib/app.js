const inquirer = require('inquirer');

class Employee {
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
                this.name = name;

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
                    this.email = email;
                    this.id = id;
                    this.role = role;

                    // console.log(this.email);
                    // console.log(this.id);
                    // console.log(this.role);
                    
                    
                    

                    inquirer.prompt([
                    {
                        type: 'input',
                        name: 'roleInfo',
                        message: 
                            ( role == 'Manager' ? `What is ${name}'s office number?`
                            : role == 'Engineer' ? `What is ${name}'s github username?`
                            : role == 'Intern' ? `Which school does ${name} attend?`
                            : 'test' )
                        
                    }

                ]).then(({ roleInfo }) => {
                    this.roleInfo = roleInfo;

                    console.log(this.name);
                    console.log(this.email);
                    console.log(this.id);
                    console.log(this.role);
                    console.log(this.roleInfo);
                    
                }
                )})
            }
        );
    }
}

var newEmployee = new Employee;
newEmployee.promptUser();
// console.log(this.name);