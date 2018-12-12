const path = require('path');
const fs = require('fs');

const files = ['myfile1.txt', 'kk', 'myfile2.txt'];

files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log('File data is', data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found');
    } else {
      throw err;
    }
  }
});
