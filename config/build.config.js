const path = require('path')
const defaultConfig = require('./default.config.js')

const build = {
    ...defaultConfig.build,
    options: {
        ...defaultConfig.build.options,
        outputDir: path.join(__dirname, '../build'),
        imgDir: path.join(__dirname, '../img')
    }
}

// build.elementComponents['main-app'].children['login-view'].source = path.join(__dirname, '../src/components/login-view/login-view.js')

module.exports = build
