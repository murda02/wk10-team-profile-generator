
const inquirer = require('inquirer');
const fs = require('fs');
var output = []

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// Initialize a new Employee object
const employee = new Employee();

const decisionPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'decision',
                message: `Do you want to add another employee?`,
                choices: ["Yes", "No"],
                validate: (value) => { if (value) { return true } else { return 'Please enter the managers name.' } }
            },
        ]).then(response => {
            // console.log(response)
            switch (response.decision) {
                case ("Yes"):
                    startPrompt()
                    break
                case ("No"):
                    finished(output)
                    break
            }
        })
}

const startPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'empType',
                message: `What type of employee are you adding?`,
                choices: ["Manager", "Engineer", "Intern"],
                validate: (value) => { if (value) { return true } else { return 'Please enter the managers name.' } }
            },
        ]).then(response => {
            // console.log(response)
            switch (response.empType) {
                case ("Manager"):
                    managerPrompt()
                    break
                case ("Engineer"):
                    engineerPrompt()
                    break
                case ("Intern"):
                    internPrompt()
                    break
            }
        })
}

const managerPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managername',
                message: 'Please enter the team manager’s name:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the team manager’s name.' } }
            },
            {
                type: 'input',
                name: 'managerid',
                message: 'Please enter the managers employee ID:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the manager’s employee ID.' } }
            },
            {
                type: 'input',
                name: 'manageremail',
                message: 'Please enter the managers email:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the manager’s email.' } }
            },
            {
                type: 'input',
                name: 'managerofficenum',
                message: 'Please enter the managers office number:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the manager’s office number.' } }
            }
        ]).then(response => {
            // console.log(response);
            // console.log
            let manager = new Manager(response.managername, response.managerid, response.manageremail, response.managerofficenum)
            output.push(manager);
            console.log("manager name: ", output[0].getName());
            decisionPrompt()
        })
}

const engineerPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineername',
                message: 'Please enter the engineer’s name:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the engineer’s name.' } }
            },
            {
                type: 'input',
                name: 'engineerid',
                message: 'Please enter the engineer’s employee ID:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the engineer’s employee ID.' } }
            },
            {
                type: 'input',
                name: 'engineeremail',
                message: 'Please enter the engineer’s email:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the engineer’s email.' } }
            },
            {
                type: 'input',
                name: 'engineergithub',
                message: 'Please enter the engineer’s GitHub username:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the engineer’s username.' } }
            }
        ]).then(response => {
            // console.log(response);
            // console.log
            let engineer = new Engineer(response.engineername, response.engineerid, response.engineeremail, response.engineergithub)
            output.push(engineer);
            console.log("engineer name: ", output[0].getName());
            decisionPrompt()
        })
}

const internPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internname',
                message: 'Please enter the intern’s name:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the intern’s name.' } }
            },
            {
                type: 'input',
                name: 'internid',
                message: 'Please enter the intern’s employee ID:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the intern’s employee ID.' } }
            },
            {
                type: 'input',
                name: 'internemail',
                message: 'Please enter the intern’s email:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the intern’s email.' } }
            },
            {
                type: 'input',
                name: 'internschool',
                message: 'Please enter the intern’s school:',
                validate: (value) => { if (value) { return true } else { return 'Please enter the intern’s school.' } }
            }
        ]).then(response => {
            // console.log(response);
            // console.log
            let intern = new Intern(response.internname, response.internid, response.internemail, response.internschool)
            output.push(intern);
            console.log("intern name: ", output[0].getName());
            decisionPrompt()
        })
}

function feeder() {
    let divs = []
    for (let i = 0; i < output.length; i++) {
        divs.push(
            `<div class="card-header">${output[i].getName()}<br>${output[i].getRole()}</div>
            <div class="card-body">
            <p class="card-text">ID: ${output[i].getId()}</p>
            <br>
            <p class="card-text">Email: ${output[i].getEmail()}</p>
            </div>`)
        // divs.push(`<div><h2>employee id: ${output[i].getId()} </h2></div>`)
        // divs.push(`<div><h2>employee email: ${output[i].getEmail()} </h2></div>`)

        switch (output[i].getRole()) {
            case ("Manager"):
                divs.push(`<div class="card-body"><p class="card-text">Manager's office number: ${output[i].getOfficeNum()}</p></div>`)
                divs.join('')
                break
            case ("Engineer"):
                divs.push(`<div><a href="https://github.com/${output[i].getGithubUsername()}?tab=repositories" target="_blank">GitHub Repo's</a></div>`)
                break
            case ("Intern"):
                divs.push(`<div><h2>Intern's school: ${output[i].getSchool()} </h2></div>`)
                break
        }
    }
    return divs
}

function finished(output) {
    console.log("output ", output);
    const filename = `index.html`;
    let htmlContent =
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./assets/css/reset.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            <link rel="stylesheet" href="./assets/css/style.css">
            <title>Team Profile Generator</title>
        </head>
        <body>
            <div class="text-center">
            <div class="card-header-main">
                My Team
            </div>
                <div class=threecardmax>
                <div class="card text-white bg-primary mb-3">
                    ${feeder()}
                </div>
        </body>
        </html>`;

    fs.writeFile(filename, htmlContent, (error) => { /* handle error */ });
}


startPrompt()
