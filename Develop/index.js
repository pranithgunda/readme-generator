const inquirer = require('inquirer');
// Initialize markdown and fs variables
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
// Array to prompt user with questions
const questions = [
    "Project Title?",
    "Description?",
    "Installation Instructions?",
    "Usage Information",
    "Contribution Guidelines",
    "Test Instructions",
    "License",
    "Github Username",
    "Email",
];
// Function to prompt user with questions for README.md file generation
function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "title"

            },
            {
                type: "input",
                message: questions[1],
                name: "description"
            },
            {
                type: "input",
                message: questions[2],
                name: "installation_instructions"
            },
            {
                type: "input",
                message: questions[3],
                name: "usage_information"
            },
            {
                type: "input",
                message: questions[4],
                name: "contribution_guidelines"
            },
            {
                type: "input",
                message: questions[5],
                name: "test_instructions"
            },
            {
                type: "list",
                message: questions[6],
                name: "license",
                choices: licenses
            },
            {
                type: "input",
                message: questions[7],
                name: "github_username"
            },
            {
                type: "input",
                message: questions[8],
                name: "email"
            }
        ])
        .then((response) => {
            const markDownData = markDown.generateMarkdown(response);
            // Generate README file
            writeToFile("README.md", markDownData)
        })
        .catch((error) => {
            // Handle errors that occur in promise chain
            console.error(error);
        })
}

// function to write README file
async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(fileName, data, () => {
            console.log('README.md file generated successfully');
        });
    }
    catch (error) {
        console.error('Error generating README file:', error);
    }
};

// function to initialize app
function init() {
    // Call function promptUser for README Generation
    promptUser();
}

// Function call to initialize app
init();
