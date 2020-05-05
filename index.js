// import using inquier - set var name = require("package name") 
// .prompt .then .catch(errors)
// var name = object then export (call by .x)
// questions are passed to prompt func as array prompt(array).then(anwers => {
//     answers.titleName 
// });
// const userInput = [title]
// create obj for each question & for each have name of question & value from user input
// pass userInput[] into write to file as data parameter
// should always be standarized
// add another attributs to each obj in userInput[] 
// hold [objects of variations]
// each obj would have a name of variation & true/false attribute 
// create a badge = https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

const generateMardown = require("./utils/generateMarkdown");


//  * ask a bunch of questions using inquirer.prompt() passing questions in as an array
const questions = [

];

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

    generateMardown(data)

}

function init() {

}
// parse data into dif obj .dotenv package 
init(data.parse);


// * save markdown file to a folder in your repo fs.writeFile()
// fs to write file (fs.writefile) - create md file 
// use escape charachters to format
// access md file & change it