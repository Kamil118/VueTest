const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    configureWebpack:{
    }, 
    devServer:{
      host: 'localhost',
      hot:true,
      port: 8080,  
      open: 'Chrome',
      proxy: { //https://cli.vuejs.org/guide/html-and-static-assets.html#disable-index-generation
        '/*':{ //everything from root
          target: 'http://localhost:5173',
          secure: false,
          ws: false,
        },
        '/api':{ //except root, which is served by webpack's devserver, to faciliate instant updates
          target: 'http://localhost:5174/',
          secure: false,
          ws: false
        }
      }
    }
})