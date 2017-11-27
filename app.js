var webpack = require('webpack');
var webpackBaseConfig = require('./config/webpack.dev.config.js');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var express = require('express');

var app = express();

// app.use(webpackDevMiddleware(webpack(webpackBaseConfig), {
// 	publicPath: webpackBaseConfig.output.publicPath,
//     noInfo: true,
//     stats: {
//         colors: true
//     }
// }));
//app.use(webpackHotMiddleware(webpack(webpackBaseConfig)));


var compiler = webpack(webpackBaseConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackBaseConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));


app.use('/', express.static(__dirname));

app.listen(3000);
// var http = require('http');
// var reload = require("reload");
// var server = http.createServer(app);
// reload(server, app);
// server.listen(3100, function () {
//     console.log('App (dev) is now running on port 3100!');
// });







