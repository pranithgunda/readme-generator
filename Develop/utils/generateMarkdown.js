// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let readmeLicenses = [{
  license: 'Apache 2.0',
  badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
  link: 'https://opensource.org/licenses/Apache-2.0'
},
{
  license: 'Boost Software License 1.0',
  badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
  link: 'https://www.boost.org/LICENSE_1_0.txt'
},
{
  license: 'BSD 3-Clause License',
  badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
  link: 'https://opensource.org/licenses/BSD-3-Clause'
},
{
  license: 'Eclipse Public License 1.0',
  badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
  link: 'https://opensource.org/licenses/EPL-1.0'
},
{
  license: 'GNU GPL v3',
  badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  link: 'https://www.gnu.org/licenses/gpl-3.0'
},
{
  license: 'The MIT License',
  badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  link: 'https://opensource.org/licenses/MIT'
},
{
  license: 'Mozilla Public License 2.0',
  badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
  link: 'https://opensource.org/licenses/MPL-2.0'
},
{
  license: 'The Perl License',
  badge: 'https://img.shields.io/badge/License-Perl-0298c3.svg',
  link: 'https://opensource.org/licenses/Artistic-2.0'
}]
// Initiate readmeLicenseIndex variable to reuse across functions
let readmeLicenseIndex = "";

// function to return license badge if available else retrun an empty string
function renderLicenseBadge(license) {
  readmeLicenseIndex = readmeLicenses.findIndex(p => p.license === license);
  if (readmeLicenseIndex >= 0) {
    return readmeLicenses[readmeLicenseIndex].badge
  } else {
    return ""
  }
}

// function to return License Link if available, else return empty string
function renderLicenseLink(license) {
  readmeLicenseIndex = readmeLicenses.findIndex(p => p.license === license);
  if (readmeLicenseIndex >= 0) {
    return readmeLicenses[readmeLicenseIndex].link
  }
  else {
    return ""
  }

}

// function to return license section of readme file
function renderLicenseSection(license) {
  readmeLicenseIndex = readmeLicenses.findIndex(p => p.license === license);
  if (readmeLicenseIndex >= 0) {
    return `## License
Licensed under the [${license}](${renderLicenseLink(license)}) license.`
  } else {
    return ""
  }
}
//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} [![${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#contributing)
- [License](#license)
## Installation
${data.installation_instructions}
## Usage
${data.usage_information}
## Contributing
${data.contribution_guidelines}
## Tests
${data.test_instructions}
${renderLicenseSection(data.license)}
`}
module.exports = {
  generateMarkdown,
  renderLicenseSection
} 
