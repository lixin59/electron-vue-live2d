module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: 'live2d-pc',
        asar: false,
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        // win: {
        //   icon: "D:/workplace/electron-vue3-live2d/public/favicon.ico"
        // }
      }
    }
  }
}
