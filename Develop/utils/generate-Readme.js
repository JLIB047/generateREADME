const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./dist/README.md", fileContent, err => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Copied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };