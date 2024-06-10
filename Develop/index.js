// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// Initiate licenses array for license selection
const licenses = ['Apache 2.0',
'Boost Software License 1.0',
'BSD 3-Clause License',
'Eclipse Public License 1.0',
'GNU GPL v3',
'The MIT License',
'Mozilla Public License 2.0',
'The Perl License']
// TODO: Create an array of questions for user input
const questions =[
"Project Title?", 
"Description?",
"Installation Instructions?",
"Usage Information",
"Contribution Guidelines",
"Test Instructions",
"License"
];

inquirer
    .prompt([
    {
        type: "input",
        message: questions[0],
        name: "title"

    },
    {
        type:"input",
        message:questions[1],
        name:"description"
    },
    {
        type:"input",
        message:questions[2],
        name:"installation_instructions"
    },
    {
        type:"input",
        message:questions[3],
        name:"usage_information"
    },
    {
        type:"input",
        message:questions[4],
        name:"contribution_guidelines"
    },
    {
        type:"input",
        message:questions[5],
        name:"test_instructions"
    },
    {
        type:"list",
        message:questions[6],
        name:"license",
        choices:licenses
    }
])
        .then((response) => {
            return response
        })
        .then((data)=>{
           const markDownData = markDown.generateMarkdown(data);
           writeToFile("README.md",markDownData);
        })



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=>
        err ? console.error(err) : console.log('Success!'))
 };

// TODO: Create a function to initialize app
function init() { 

}

// Function call to initialize app
init();
