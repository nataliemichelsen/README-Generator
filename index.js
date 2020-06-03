// import using inquirer using require
// import fs using require
// import the 'generateMarkdown folder' using require
const generateMarkdown = require("./Develop/utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const axios = require("axios")

// Outlining the questions array
// Using 'type' as 'input' bc we need the user to input their own data
// Relating the questions to each category specified in the assignment's README
const questions  = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is in your table of contents?',
        name: 'tableOfContents'
    },
    {
        type: 'input',
        message: 'How do you install this application?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What can this application be used for?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Does this application come with installation instructions?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Were there any contributors to this application other than yourself?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'How do you test this application?',
       name: 'tests'
    },
    {
        type: 'input',
        message: 'How do you install this creation?',
        name: 'username'
    }
]

function init() {
    inquirer.prompt(questions).then(responses => {
        axios.get(
        `https://api.github.com/users/${responses.username}`
        )
        .then(({data}) => {
        writeToFile("README.md", generateMarkdown({...responses, ...data}))
        })
    });
}

function writeToFile(fileName, data) {
    return fs.writeFileSync( path.join ( process.cwd(), fileName ), data )
}

init()