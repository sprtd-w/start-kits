// file system API  proxy
const FileSystemProxy = require('./fsProxy');
const fileSystemAPI = require('fs');
const path = require('path');

const fs = new FileSystemProxy(fileSystemAPI);

// exmples
const file1 = path.join(__dirname, 'file1.txt');
const file2 = path.join(__dirname, 'file2.exe');

fs.readFile(file1, 'UTF-8', (error, data) => {
    if (error) {
        console.log(`got: ${error}`);
        process.exit(0);
    }

    console.log(`file read: ${data}W`);
});
