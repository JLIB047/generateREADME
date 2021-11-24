// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateReadme = require('./src/generateMarkdown.js');
const { writeFile } = require('./utils/generate-Readme.js');

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
            name: 'usage',
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
            name: 'license',
            message: 'What license was used in this app?"',
            choices: ['MIT', 'Apache_2.0', 'Boost_1.0'],
            
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
            message: "Please enter your Github user name.",
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
    .then(data => {
        return generateReadme(data);
    })
    .then(readMe => {
        return writeFile(readMe);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
    

    


