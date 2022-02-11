// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide description.'
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Please provide table of contents.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Installation guidelines.'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Usage information.'
    },
    {
        type: 'list',
        name: 'License',
        message: 'What licenses do you have?',
        choices: ['MIT','UCSD','SDSU','UCBerkley']
    },
    {
        type: 'input',
        name: 'Contributing',
        message: '.'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Test instructions.'
    },
    {
        type: 'input',
        name: 'Questions',
        message: '.'
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
