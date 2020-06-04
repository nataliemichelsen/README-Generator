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
https://img.shields.io/badge/<README Generator>-<Make Yours Today!>-<critical>


module.exports = generateMarkdown;