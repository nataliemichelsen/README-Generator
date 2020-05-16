// import using inquirer - set var name = require("package name") 
// .prompt .then .catch(errors)
// var name = object then export (call by .x)

const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const questionsArray  = [
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

// use username to make an API call for github profile picture and email
//  * ask a bunch of questions using inquirer.prompt() passing questions in as an array
// questions are passed to prompt func as array 
// create obj for each question & for each have name of question & value from user input
// hold [objects of variations]
// each obj would have a name of variation & true/false attribute 
// inquirer.prompt(array).then(answers => {
//     answers.title
//     answers.description
//     answers.tableOfContents
//     answers.installation
//     answers.usage
//     answers.license
//     answers.contributing
//     answers.tests
//     answers.username
// })

const answers = inquirer.prompt(questionsArray)

// const userInput = [title]
// pass userInput[] into write to file as data parameter
// add another attributes to each obj in userInput[] 
const userInput = [title]
const userInput = [description]
const userInput = [tableOfContents]
const userInput = [installation]
const userInput = [usage]
const userInput = [license]
const userInput = [contributing]
const userInput = [tests]
const userInput = [username]

// * merge inquirer answers with github data


// * .then() make an axios call to github api with username to get github data
axios({
    method: 'GET',
    url: '',
    data: {

    }
});


// * call generateMarkdown with combined data  - inside this function, format your document with dynamic data
// within write to file, determine how it will be parsed
function writeToFile(fileName, data) {

    generateMarkdown(data)

}

function init() {

}
// parse data into dif obj .dotenv package 
// init(data.parse);


// * save markdown file to a folder in your repo fs.writeFile()
// fs to write file (fs.writeFile) - create md file 
// use escape characters to format
// access md file & change it
// fs.writeToFile


// create a badge = https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>