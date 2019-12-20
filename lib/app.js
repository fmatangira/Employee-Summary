const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./manager');
const engineer = require('./engineer');
const intern = require('./intern');

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

        // read file main
        // var main

        // read file main 2
        // var main2

        // var file = main + 'made html' + main2

        //write file

        
        manager.createManager(this);

        this.engineerHtmlRender();
    }

    engineerHtmlRender() {

        engineer.createEngineer(this);

        this.internHtmlRender();

    }

    internHtmlRender() {

        intern.createIntern(this);

        function renderEmployeeHTML() {

            let read = fs.readFile;
            let append = fs.appendFile;
            // let write = fs.writeFileSync;
            let unlink = fs.unlink;
            // let truncate = fs.truncateSync;
            var files = ['main.html','engineer.html','manager.html','intern.html','main2.html'];
            
            // truncate('../templates/index.html', 0, function(err){if (err) throw err;});            

            
            for (var  i = 0; i < files.length;) {
                
                (i === 0) ? unlink('../templates/index.html', function(err){if (err) throw err;}) : ''

                read(`../templates/${files[i]}`, 'utf-8', function (err,data) {
                    if (err) throw err;

                    var promise1 = new Promise(function(resolve, reject) {
                        setTimeout(function() {
                          resolve(data);
                        }, 300);
                      });
    
                    promise1.then(append('../templates/index.html', data, function (err) {
                        if (err) throw err;
                      }));
                });

                i++
            }
            
            // read('../templates/main2.html', 'utf-8', function (err,data) {
            //     if (err) throw err;

            //     append('../templates/index.html', data, function (err) {
            //         if (err) throw err;
            //       });
            // });

            // let managerHtml = read('../templates/manager.html','utf8');
            // let internHtml = read('../templates/intern.html','utf8');
            
            // let mainHtmlEnd = read('../templates/engineer.html','utf8');
        
            // console.log(mainHtmlBeg+engineerHtml+managerHtml+internHtml+mainHtmlEnd);
            
            
            // console.log(test);
            
        }

        renderEmployeeHTML();
    }
}

// function runProgram() {

    var newEmployee = new Employee;
    newEmployee.promptUser();

// }



// runProgram();

// console.log(newEmployee.name);


module.exports = Employee;