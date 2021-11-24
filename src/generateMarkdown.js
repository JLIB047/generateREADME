function badge(license){
  return `![Badge](https://img.shields.io/badge/License-${license}-lightblue.svg)`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${badge(data.license)}

  ## Table on Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Questions](#questions)
  
  ## Description
    ${data.description}
  ## Installation
    ${data.installation}
  ## Usage
    ${data.usage}
  ## Contributions 
    ${data.contributions}
  ## Questions 
  Email me or reach out on Github 
    
  Find me on Github:(https://github.com/${data.username})
  
  Email me with any questions: ${data.email} 
  

`;
}

module.exports = generateMarkdown;
