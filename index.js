// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const generateMarkdown = ({title, description, installation, usage, contributing, tests, gitHub}) =>
`# ${title}
  
## Description 

${description}

## Table of Contents

*[Installation](#Installation)
*[Usage](#Usage-information)
*[Contributing](#Contribuitng-guidelines)
*[Tests](#Tests)
*[Questions](#Questions)

## Installation

${installation}

## Usage information

${usage}

## Contributing guidelines

${contributing}

## Tests

${tests}

## Questions

${gitHub}`;

    inquirer.prompt([
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
        }    
    ])
    .then((answers) => {
        const readMePage = generateMarkdown(answers);
        console.log('Made ReadMe.md!')  
        fs.writeFileSync('ReadMe.md', readMePage, (err) =>
            err ? console.log(err) : console.log('Successfully created ReadMe.md!'))
    })
