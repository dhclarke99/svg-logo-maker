const inquirer = require('inquirer');


const questions = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'Enter three characters',
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color',
          },
          {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape',
            choices: ["circle", "square", "triangle"]
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a shape color',
          },
        


    ])

}
questions()