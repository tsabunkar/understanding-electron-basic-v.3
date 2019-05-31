const { remote } = require('electron');
const fs = require('fs');

const desktopPath = remote.app.getPath('desktop');

window.writeToMyFile = text => {
  console.log('text value is ', text);
  console.log(desktopPath);
  console.log(desktopPath + '/tejas.txt');
  fs.writeFile(desktopPath + '/tejas.txt', text, console.log);
};

window.versions = {
  node: process.versions.node,
  electron: process.versions.electron
};
