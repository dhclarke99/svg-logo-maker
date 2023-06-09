const inquirer = require('inquirer');
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const generateSvg = require('./lib/generatesvg')
const fs = require('fs');
const shapes = require('./lib/shapes')

const questions = () => { 
  inquirer.registerPrompt('maxlength-input', maxLengthInputPrompt)
    return inquirer.prompt([
        {
            type: 'maxlength-input',
            name: 'characters',
            message: 'Enter three characters',
            maxLength: 3,
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
    .then((data) => {
      shapes.newCircle(data)

      generateSvg.setShape(data)
     const svgContent = generateSvg.generateFile(data);
     fs.writeFile("logo.svg", svgContent, (err) =>
     err ? console.log(err) : console.log("success!")
     );


     
  });

}
questions()