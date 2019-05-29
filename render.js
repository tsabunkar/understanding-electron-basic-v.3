const { dialog, BrowserWindow, app } = require('electron').remote;
const remote = require('electron').remote;

/*  dialog.showMessageBox({
  message: 'Messagebox opened from renderer process!!'
}); */
dialog.showMessageBox(
  {
    message: 'Messagebox opened from renderer process!!',
    buttons: ['Quit', 'Cancel']
  },
  buttonIndex => {
    if (buttonIndex == 0)
      // first btn -> quit
      app.quit();
  }
);

let wind = new BrowserWindow({ width: 800, height: 400 });

wind.loadURL('https://github.com/tsabunkar');

console.log('App version is :', remote.getGlobal('app_version'));
