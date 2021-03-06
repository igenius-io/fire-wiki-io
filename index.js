/*!
 * Copyright(c) 2016 Adam Johnstone - adamjohnstone.co
 * MIT Licensed
 */

'use strict';

//module.exports = require('./lib/firewiki.js');
var rebootjs = require('reboot-js');

var rebootConfig = {
    "port" : 7000,
    "env" : "development",
    "reboot-apps-directory" : "node_modules/fire-wiki-io/lib/apps",
    "reboot-www-directory" : "node_modules/fire-wiki-io/lib/apps/www",
    "default-layout" : "layout",
    "default-viewfile" : "index",
    "partials-directory" : "views/partials/",
    "layouts-directory" : "views/layouts/"
};

rebootjs.go(rebootConfig);