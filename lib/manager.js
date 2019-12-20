const fs = require('fs');

function createManager(employee) {

    let html = `

    <tr>
        <td>${employee.name}</td>
        <td>${employee.role}</td>
        <td>${employee.id}</td>
        <td>${employee.email}</td>
        <td>Office Number: ${employee.roleInfo}</td>
    </tr>`

    let appendManager = () => {
        if ( employee.role === 'Manager') {
            fs.appendFile('../templates/manager.html',html, function (err) {
                if (err) throw err;
                console.log('The manager profile has been added!');
              })
        }
        
    }
    
    appendManager();
    
    
}

module.exports = {
    createManager
 }