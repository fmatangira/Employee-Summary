const fs = require('fs');

function createIntern(employee) {

    let html = `

    <tr>
        <td>${employee.name}</td>
        <td>${employee.role}</td>
        <td>${employee.id}</td>
        <td>${employee.email}</td>
        <td>${employee.roleInfo}</td>
    </tr>`

    let appendIntern = () => {
        if ( employee.role === 'Intern') {
            fs.appendFile('../templates/intern.html',html, function (err) {
                if (err) throw err;
                console.log('The intern profile has been added!');
              })
        }
        
    }
    
    appendIntern();
    
    
}

module.exports = {
    createIntern
 }