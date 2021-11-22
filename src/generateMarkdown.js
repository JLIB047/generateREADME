// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//const generateBadgeLink = badgeText =>{
  
  /*if(promptUser.license = 'MIT'){
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
  renderLicenseSection(badgeLink = badgeLink, licenseLink = licenseLink);*/

  //if liscense = MIT 
    //call appropriate liscense code 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection() {
 //console.log(badgeLink);
 //console.log(licenseLink);
//}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![badge](https://ing.shield.io/badge/License-${data.license}-brightgreen)]
  
  # Table on Contents 
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Liscense](#Liscense)
  * [Contributions](#Contributions)
  * [Questions](#Questions)
  
  ## Description
    ${data.description}
  ## Installation
    ${data.instllation}
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
