// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table on Contents 
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Liscense](#Liscense)
  * [Contributions](#Contributions)
  * [Questions](#Questions)
  
  ## Description

  ## Installation

  ## Usage

  ## Liscenses

  ## Contributions 

  ## Questions 
  Email me or reach out on Github 
  <br/>
  Find me on Github: [](https://github.com())<br/>
  <br/>
  Email me with any questions: {} <br/><br/>
  

`;
}

module.exports = generateMarkdown;
