const path = require("path");
const fs = require("fs");

const readFileText = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf8');

readFileText.on('data', (data) => {
  console.log(data);
})

