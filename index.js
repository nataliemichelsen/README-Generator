// import using inquirer using require
// import fs using require
// import the 'generateMarkdown folder' using require
const generateMarkdown = require("./Develop/utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "generateMarkdown.js");

// .prompt .then .catch(errors)
// var name = object then export (call by .x)


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

// const answers = inquirer.prompt(questions)
const answers = async () => {
    const { title, description, tableOfContents, installation, usage, license, contributing, tests, username } = await inquirer.prompt(questions);

}

// ask a bunch of questions using inquirer.prompt() passing questions in as an array
// questions are passed to prompt func as array 
// create obj for each question & for each have name of question & value from user input
// hold [objects of variations]
// each obj would have a name of variation & true/false attribute 
const init = async () => {
    const { newREADME } = await inquirer.prompt({
        type: 'confirm',
        message: 'Would you like to generate a new README?',
        name: 'newREADME'
    })
}

// pass userInput[] into write to file as data parameter
// add another attributes to each obj in userInput[] 
// * merge inquirer answers with github data
const userInput = 

// .then() make an axios call to github api with username to get github data
// use username to make an API call for github profile picture and email
axios({
    method: 'GET',
    url: '',
    data: {

    }
});

const data = new Promise((resolve,reject) => {
    const response = axios.get("/axios/users")
    if (response.length > 0) {
        resolve(response)
    } else {
        reject()
    }
})

// call generateMarkdown with combined data  - inside this function, format your document with dynamic data
// within write to file, determine how it will be parsed

// save markdown file to a folder in your repo fs.writeFile()
// fs to write file (fs.writeFile) - create md file 
// use escape characters to format
// access md file & change it
// fs.writeToFile
function writeToFile(fileName, data) {

    generateMarkdown(data)

}

// parse data into dif obj .dotenv package 
// init(data.parse);

// create a badge = https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

// call the init function
init();