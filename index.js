// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation guidelines.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses do you have?',
        choices: ['MIT','UCSD','SDSU','UCBerkley']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions.'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please input your GitHub URL.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {
        console.log('Making ReadMe');
        fs.writeFileSync('ReadMe.md', inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
