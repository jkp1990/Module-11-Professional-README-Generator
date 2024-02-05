// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const badges = {
  MIT: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  'GNU v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'Creative Commons': '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
}

// function to generate markdown for README
function generateMarkdown(data) {

  let badge = badges[data.license] || ''


  return (
`# ${data.title}

${badge}

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#auestions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${
  data.license === "None" ? 
  "This project is not covered by a license." :
  `This project is covered by the ${data.license} license.`
}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

### Who is the original creator of this project?

${data.username}
[Link to profile](https://github.com/${data.username})

### How can I contact them?

Send an email to ${data.email}
`
  );
}

module.exports = generateMarkdown;
