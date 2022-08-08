const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/wedding-plan/',

  pwa: {
    msTileColor: '#F8F7F7',
    manifestOptions: {
      background_color: '#F8F7F7'
    }
  }
})
