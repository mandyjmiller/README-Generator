// const fs = require('fs');
// const inquirer = require('inquirer');

import inquirer from "inquirer";
import { writeFile } from 'fs' 



// Create a command-line application that accepts user input.
// When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
// The title of my project
// Sections entitled:
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
// When a user enters the project title then it is displayed as the title of the README
// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
// When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README


// Prompts
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'The title of my project:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description:'
  },
  {
    type: 'input',
    name: 'contents',
    message: 'Table of Contents:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage:'
  },
  {
    type: 'list', 
    name: 'license',
    message: 'License:',
    choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None'] 
  },

  {
    type: 'input',
    name: 'contributing',
    message: 'Contributing:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Tests:'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Questions:'
  }
]).then(answers => {


  // README Answers:
  const READMEContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}
`;

  // Write Markdown content to file
  writeFile('README.md', READMEContent, err => {
    if (err) {
      console.error('Uh-oh. Something went wrong:', err);
    } else {
      console.log('README.md file has been created successfully!');
    }
  });
});



