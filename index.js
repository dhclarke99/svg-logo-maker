const inquirer = require('inquirer');
const generateSvg = require('./lib/generatesvg')
const fs = require('fs');

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
    .then((data) => {

      console.log(generateSvg)
     const svgContent = generateSvg.generateFile(data.shape);
     fs.writeFile("logo.svg", svgContent, (err) =>
     err ? console.log(err) : console.log("success!")
     );

     
  });

}
questions()