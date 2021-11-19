// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadgeLink(data) {
  //take lisence type as argument
  //send the data structure to this function 
  //add the correct badge an license link to the data structure 
  //return the entire structure back 
  if(data.license = 'MIT'){
    const badgeLink = 'https://img.shields.io/badge/License-MIT-yellow.svg';
    const licenseLink = 'https://opensource.org/licenses/MIT';
  }
  else if (license = 'Apache'){
    const badgeLink = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
    const licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  } 
  else if (license = 'Boost'){
    const badgeLink = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
    const licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';

  }
  renderLicenseSection(badgeLink = badgeLink, licenseLink = licenseLink);
}
  //if liscense = MIT 
    //call appropriate liscense code 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
 console.log(badgeLink);
 console.log(licenseLink);
}

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

  ## Licenses

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
