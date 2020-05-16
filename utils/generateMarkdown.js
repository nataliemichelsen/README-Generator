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
# ${data.questions}
# ${data.githubProfilePicture}
# ${data.githubEmail}

`;
}

module.exports = generateMarkdown;
