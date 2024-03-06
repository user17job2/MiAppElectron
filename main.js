const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu.js')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 700,
    height: 550,
    minHeight: 450,
    minWidth: 450,
    webPreferences: {
      preload: path.join(__dirname, './preload.js')
    }
  })

  mainWindow.loadFile('index.html')
  // window.loadURL('https://portfolio-user17job.netlify.app/')

  setMainMenu(mainWindow)
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'win32') {
    app.quit()
  }
})
// app.whenReady().then(createWindow)
// app.whenReady().then(createWindow)
// app.whenReady().then(createWindow)
// app.whenReady().then(createWindow)

// app.whenReady().then(() : void => {
//     createWindow()
// })
