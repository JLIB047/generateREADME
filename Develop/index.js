// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateReadme = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if(titleInput){
                    return(true);
                } else {
                    console.log('Please enter a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: projectDesc => {
                if(projectDesc){
                    return(true);
                } else {
                    console.log('I need value to continue.');
                    return false;
                }
                }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your app?',
            validate: installDesc => {
                if(installDesc){
                    return(true);
                } else {
                    console.log('I need a value to continue.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please enter instuctions on how to use your app.',
            validate:  usageDesc => {
                if(usageDesc){
                    return(true);
                } else {
                    console.log('I need value to continue.');
                    return false;
                }
            }
        },
        {
            type: 'rawlist',
            name: 'liscense',
            message: 'What liscense was used in this app?"',
            choices: ['MIT', 'Apache', 'Boost'],
            validate: liscenseName => {
                if(liscenseName){
                    return(true);
                } else {
                    console.log('I need value to continue.');
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'contributions',
           message:  'Who made contributions to this project?',
           validate: contName => {
            if(contName){
                return(true);
            } else {
                console.log('I need value to continue.');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: "Please enter a link to your Github",
            validate: gitName => {
                if(gitName){
                    return(true);
                } else {
                    console.log('I need value to continue.');
                    return false;
                }
                }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email address.",
            validate: emailName => {
                if(emailName){
                    return(true);
                } else {
                    console.log('I need value to continue.');
                    return false;
                }
                }
        },
    ]);
}   

promptUser()
    .then(data =>{
        return generateReadme(data);
    })

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
