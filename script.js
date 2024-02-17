// const fs = require('fs');
// const inquirer = require('inquirer');

import inquirer from "inquirer";
import { writeFile } from 'fs' 


//Function to return license badges
const getLicenseBadge = license => {
  // Map license names to badge URLs
  const badgeURLs = {
    'Apache': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'BSD': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    'Creative Commons': 'https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg',
    'GNU GPL v3': 'https://img.shields.io/badge/License-GPL-blue.svg',
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
  };
  return badgeURLs[license];
};

//WRITE A SIMILAT FUNCTION FOR TECHNOCLOGIES USED. JAVASCRIPT ETC...//


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
    choices: ['Apache', 'BSD', 'Creative Commons', 'GNU GPL v3', 'MIT'] 
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

  // Generate license badge and notice
  const licenseBadgeURL = getLicenseBadge(answers.license);


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
![License Badge](${licenseBadgeURL})
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



