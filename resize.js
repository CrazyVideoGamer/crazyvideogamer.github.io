const sharp = require('sharp');
const fs = require('fs');
const directory = './assets/images';

fs.readdirSync(directory).forEach(file => {
  if (file.indexOf('small') == -1) {
  	sharp(`${directory}/${file}`)
    	  .resize(100, 100) // width, height
    	  .toFile(`${directory}/${file}-small.png`);
  }
});
