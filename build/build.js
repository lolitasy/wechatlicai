// require('./check-versions')()

// process.env.NODE_ENV = 'production'

// var ora = require('ora')
// var rm = require('rimraf')
// var path = require('path')
// var chalk = require('chalk')
// var webpack = require('webpack')
// var webpackConfig = require('../config/webpack.prod.conf')

// var spinner = ora('building for production...')
// spinner.start()

// var distPath = path.resolve(__dirname, '../dist')
// console.log("dist:" + distPath)

// rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
//     if (err) throw err
//     webpack(webpackConfig, function (err, stats) {
//         spinner.stop()
//         if (err) throw err
//         process.stdout.write(stats.toString({
//             colors: true,
//             modules: false,
//             children: false,
//             chunks: false,
//             chunkModules: false
//         }) + '\n\n')

//         console.log(chalk.cyan('  Build complete.\n'))
//         console.log(chalk.yellow(
//             '  Tip: built files are meant to be served over an HTTP server.\n' +
//             '  Opening index.html over file:// won\'t work.\n'
//         ))
//     })
// })
var path = require("path")
var rm = require('rimraf')
var webpack = require('webpack')
var webpackConfig = require('../config/webpack.prod.config.js')

var distPath = path.resolve(__dirname, '../dist')
console.log("dist:" + distPath)
rm(distPath, err => {
    if (err) {
        throw err
    }
    console.log("clear build path success...");
    webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw err
        }
        //TODO：复制src/lib下所有js文件到发布目录dist/static/js/目录下
        var fs = require('fs');
        var path = require('path');

        var fileName = "flexible.js";

        var sourceFile = path.join(__dirname, "../src/lib", fileName);
        var destPath = path.join(__dirname, "../dist/static/js", fileName);
        console.log(sourceFile)
        console.log(destPath)
        var readStream = fs.createReadStream(sourceFile);
        var writeStream = fs.createWriteStream(destPath);
        readStream.pipe(writeStream);
        // console.log("移动完成")
        console.log("build success...")
    })
})
