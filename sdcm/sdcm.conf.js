/**
 * Copyright 2015-2115 the original author or authors.
 *
 * Licensed under the MIT Licensed
 *
 * @email   dragonmail2001@163.com
 * @author  jinglong.zhaijl
 * @date    2015-10-24
 * @Source: https://github.com/dragonmail2001
 *
 */
var path = require('path');

var config  = {   
    cluster: false,
    httpport: 8001,
    timeout: 20000,
    umfs: 2097152,                                   //上传文件总大小上限2m(2 * 1024 * 1024)
    debug: true, 
    ldir: '/Users/estelle/work/webfile/logger',                  //日志文件目录  
    fext: {
        'jpg': true,
        'jpeg': true,
        'png': true,
        'JPG':true,
        'JPEG':true,
        'PNG':true
    },  
    cftp:{
	    host: "192.168.18.251",
        port: 21,
        user: "testftp",
        password: "aidaitest",
        keepalive: 10000,
        path: ""
    },
    //  cftp:{
    //     host: "192.168.18.251",
    //     port: 21,
    //     user: "devftp",
    //     password: "aidaidev",
    //     keepalive: 10000,
    //     path: ""
    // },
    cach:[
    // {
    //     host: "127.0.0.1",
    //     port: 6379
    // }
        {
            port: 6390,
            host: '192.168.18.205'     
        }, {
            port: 6390,
            host: '192.168.18.206'
        }, {
            port: 6390,
            host: '192.168.18.207'    
        }
    ],
    ccps:{
        enabled: false,
        cluster: true,
        namespace:"sdcmnp",
        link:"sdcmlk",
        chat:"dscm",
        sync:{
            addr:"192.168.3.204",
            port:5520,
            iurl:"/imApp?actn=talk"
        },
        auth:{
            name:"auth",
            addr:"192.168.18.254",
            port:5524,
            iurl:"/userApp?actn=auth"
        }
    },
    cacl:{
    },
    sess:{
        //domain: '.cnaidai.com',
        domain: [
            // ["*.abc.com", ".abc.com"],
            // ["*.abc.com:*", ".abc.com"],//开发环境
            // ["*.cnaidai.com", ".cnaidai.com"],
            // ["*.cnaidai.com:*", ".cnaidai.com"],//开发环境
            // ["*.laixiangke.com", ".laixiangke.com"],
            // ["*.laixiangke.com:*", ".laixiangke.com"]//开发环境
        ],
        key: 'sdcm keyboard',
        name: 'sdcm.sid',
        //cluster: false,
        cluster: true,
        time: 60*24*60*60*1000                             //10分钟
    },
    code: {
        path: '/verifyService?actn=code',
        hostname: '192.168.18.198',
        port: '5524',
        type: 'dscm'
    }, 
    fdir:'/Users/estelle/work/webfile/upload',                 //前端上传文件保存的临时目录
    dcfg:'/Users/estelle/work/webroot'                 //前端请求资源文件本地存放路径
};

module.exports = config;
