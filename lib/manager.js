const fs = require('fs');
let Employee = require('./app');
// let newEmployee = new Employee;



function createManager(employee) {
    // const manager = new Employee();
    let html = `

    <tr>
        <td>${employee.name}</td>
        <td>${employee.role}</td>
        <td>${employee.id}</td>
        <td>${employee.email}</td>
        <td>${employee.roleInfo}</td>
    </tr>`

    let test = () => {
        if ( employee.role === 'Manager') {
            fs.appendFile('../templates/manager.html',html, function (err) {
                if (err) throw err;
                console.log('The manager profile has been added!');
              })
        }
        
    }
    
    test();
    
}

module.exports = {
    createManager
 }