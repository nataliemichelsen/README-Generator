function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.description}
# ${data.tableOfContents}
# ${data.installation}
# ${data.usage}
# ${data.license}
# ${data.contributing}
# ${data.tests}
# ${data.username}
`;
}

// Code for badge - write function
function badge() {
  inquirer.prompt(questions).then(responses => {
      axios.get(
      `https://api.github.com/users/${responses.username}`
      )
      .then(({data}) => {
      writeToFile("README.md", generateMarkdown({...responses, ...data}))
      })
  });
}
https://img.shields.io/badge/<README Generator>-<Make Yours Today!>-<critical>


module.exports = generateMarkdown;