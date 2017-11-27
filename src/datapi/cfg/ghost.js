var log4js = require('log4js'); 

// log4js.loadAppender("dateFile");
// log4js.addAppender(log4js.appenderMakers['dateFile']({  
//     filename:"D:/dev/webfile/logger/webchat.log",  
//     pattern: '.yyyy-MM-dd',alwaysIncludePattern: true,  
//     layout: {
//         type: 'pattern',
//         pattern: '[%d %p %c] %m%n'
//     }  
// }), 'webchat'); 

module.exports = {
    getLogger:function() {
        return log4js.getLogger('webchat');
    },
    dscm:{
        dcuser:{
            addr:'192.168.18.198',
            port:5524
        },
        dcbusiness:{
            addr:'192.168.18.198',
            port:5522
        },
        activity:{
            addr:'192.168.18.198',
            port:5521
        },
        creditcenter:{
            addr:'192.168.18.197',
            port:4520
        },
        statistic:{
            addr:'192.168.18.198',
            port:5528
        },
        mcapp:{
            addr:'192.168.18.197',
            port:5520
        },
        loanbusiness:{
            addr:'192.168.18.198',
            port:5526
        },
        solr:{
            addr:'192.168.18.198',
            port:5526 
        }
    },
    webchatHost:{
        url: "http://pc.cnaidai.com:8001/webchat"
    },
    uploadHost: {
        url: "http://192.168.18.248:881"
    },
    html:{
        
    }
}
