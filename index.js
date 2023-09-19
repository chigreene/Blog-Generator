const inquirer = require('inquirer')
const fs = require('fs');
const generateHTML = require('./generate')


const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name'
    },
    {
        type: 'input',
        name: 'location',
        message: 'What is your location'
    },
    {
        type: 'input',
        name: 'age',
        message: 'What is your age'
    },
    {
        type: 'list',
        name: 'education',
        message: 'What is the hightest education you have',
        choices: ['HighSchool', 'GED', 'Some college', 'Bachelors Degree', 'Masters Degree', 'PhD/Doctor']
    },
    {
        type: 'list',
        name: 'interests',
        message: 'Select 3 interests',
        choices: ['cooking', 'tech', 'beauty', 'travel']
    },

]



function runInquirer (){
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)
            const HTMLContent = generateHTML(answers)

            fs.writeFile('index.html', HTMLContent, (err) => err ? console.error(err) : console.log('Success!'))
    })
}
runInquirer()
