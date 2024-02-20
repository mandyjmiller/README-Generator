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


//Function to return license badges
const getLicenseURL = license => {
  // Map license names to badge URLs
  const licenseURLs = {
    'Apache': 'https://choosealicense.com/licenses/apache-2.0/',
    'BSD': 'https://choosealicense.com/licenses/bsd-2-clause-patent/',
    'Creative Commons': 'https://choosealicense.com/licenses/cc-by-4.0/',
    'GNU GPL v3': 'https://choosealicense.com/licenses/gpl-3.0/',
    'MIT': 'https://www.https://choosealicense.com/licenses/mit/.com',
  };
  return licenseURLs[license];
};



//WRITE A SIMILAT FUNCTION FOR TECHNOCLOGIES USED. JAVASCRIPT ETC...//


// Prompts
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'Project Title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description:'
  },
  //DON'T NEED TOC - IT'S AUTOMATICALLY GENERATED
  // {
  //   type: 'input',
  //   name: 'contents',
  //   message: 'Table of Contents:'
  // },
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
    name: 'github',
    message: 'Please enter your GitHub user name:'
  },

  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:'
  }


]).then(answers => {

  // Generate license badge
  const licenseBadgeURL = getLicenseBadge(answers.license);

  // Generate license URL
  const licenseURLs = getLicenseURL(answers.license);


  // README Answers:
  const READMEContent = `
# ${answers.title}
<a href = ${licenseURLs}> ![License Badge](${licenseBadgeURL})</a> 

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
For more information please view the <a href = ${licenseURLs}> ${answers.license}</a> license description.


## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions

For further infomation, please follow me on <a href ="${answers.github}">GitHub ${answers.github}</a>
or contact me via email at ${answers.email}


`;

  // Write README content to file
  writeFile('README.md', READMEContent, err => {
    if (err) {
      console.error('Uh-oh. Something went wrong:', err);
    } else {
      console.log('README.md file has been created successfully!');
    }
  });
});



