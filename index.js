const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// node index

// array of questions for user
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Project title:'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Description:'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Installation:'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Usage:'
    },
    {
        name: 'license',
        type: 'list',
        message: 'License:',
        choices: [
            'None',
            'MIT',
            'GNU v3',
            'Creative Commons'
        ]
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Contributing:'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Tests:'
    },
    {
        name: 'username',
        type: 'input',
        message: 'Username:'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Email:'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data)
    fs.writeFileSync(fileName, markdown)
}

// function to initialize program
async function init() {
    const data = await inquirer.prompt(questions)
    writeToFile('NEW_README.md', data)
}

// function call to initialize program
init();
