var log4js = require('log4js');

log4js.loadAppender("dateFile");
log4js.addAppender(log4js.appenderMakers['dateFile']({  
    filename:"/home/u1/logs/webchat/webchat.log",  
    pattern: '.yyyy-MM-dd',alwaysIncludePattern: true,  
    layout: {
        type: 'pattern',
        pattern: '[%d %p %c] %m%n'
    }  
}), 'webchat');

module.exports = {
    getLogger:function() {
        return log4js.getLogger('webchat');
    },
    dscm:{
        dcuser:{
            addr:'192.168.100.23',
            port:5524
        },
        dcbusiness:{
            addr:'192.168.100.21',
            port:5522
        },
        activity:{
            addr:'192.168.100.26',
            port:5521
        },
        creditcenter:{
            addr:'192.168.100.36',
            port:4520
        },
        statistic:{
            addr:'192.168.100.9',
            port:5525
        },
        mcapp:{
            addr:'192.168.100.59',
            port:5519
        },
        loanbusiness:{
            addr:'192.168.100.23',
            port:5524
        },
        solr:{
            addr:'192.168.100.59',
            port:5526 
        }
    },
    uploadHost: {
        url: "http://adtp.cnaidai.com"
    },
    html:{
        
    }
}