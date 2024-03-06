const { Menu } = require('electron')

const setMainMenu = (mainWindow) => {
  const template = [
    {
      label: 'MI1raApp',
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
        {
          label: 'View',
          submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' },
            {
              label: 'Yo',
              submenu: [
                { role: 'front' },
                { type: 'separator' },
                { role: 'services' }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Themes',
      submenu: [
        {
          label: 'light',
          click: () => {
            console.log('select light theme')
            mainWindow.webContents.send('update__theme', 'light')
          }
        },
        {
          label: 'dark',
          click: () => {
            console.log('select dark theme')
            mainWindow.webContents.send('update__theme', 'dark')
          }
        }
      ]
    },
    {
      label: 'Contact',
      submenu: [
        {
          label: 'CV',
          click: () => {
            console.log('CV')
            // quise redireccionar con una url
            // mainWindow.webContents.send('url', 'https://upyy-unprogramayyo-appdetarea.netlify.app/')
          }
        },
        {
          label: 'portafolio',
          click: () => {
            console.log('portafolio')
          }
        },
        {
          label: 'formulario',
          click: () => {
            console.log('formulario')
          }
        }
      ]
    }
  ]

  // {
  //     label: 'fuera de aqui',
  //     click: () => { app.quit() }
  //   }
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

module.exports = {
  setMainMenu

}
