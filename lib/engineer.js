const fs = require('fs');

function createEngineer(employee) {

    let html = `

    <tr>
        <td>${employee.name}</td>
        <td>${employee.role}</td>
        <td>${employee.id}</td>
        <td>${employee.email}</td>
        <td>${employee.roleInfo}</td>
    </tr>`

    let appendEngineer = () => {
        if ( employee.role === 'Engineer') {
            fs.appendFile('../templates/engineer.html',html, function (err) {
                if (err) throw err;
                console.log('The engineer profile has been added!');
              })
        }
        
    }
    
    appendEngineer();
    
    
}

module.exports = {
    createEngineer
 }