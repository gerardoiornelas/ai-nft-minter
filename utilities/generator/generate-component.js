require('colors');
const fs = require('fs');
const templatesSrc = require('./templates');

const componentName = process.argv[2];
const componentType = process.argv[3] || 'components';
const componentDirectory = `./src/${componentType}/${componentName}`;
const generatedSrcTemplates = templatesSrc.map((template) => template(componentName));
const indexFile = `
export { default as ${componentName} } from './${componentName}'
`;

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

console.log('Creating Component Templates with name: ' + componentName.blue);

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

fs.writeFileSync(`${componentDirectory}/index.js`, indexFile);

generatedSrcTemplates.forEach((template) => {
  fs.writeFileSync(`${componentDirectory}/${componentName}${template.extension}`, template.content);
});

console.log('Successfully created component under: ' + componentDirectory.green);
