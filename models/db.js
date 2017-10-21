/*
 * @Author: Jianjun ZU
 * @Date:   2017-10-20 16:22:46
 * @Last Modified by:   Jianjun ZU
 * @Last Modified time: 2017-10-20 21:23:17
 */
var settings = require('../settings');
        var Db = require('mongodb').Db;
        var Connection = require('mongodb').Connection;
        var Server = require('mongodb').Server;

        module.exports = new Db(settings.db, new Server(settings.host, 27017, {}),{ safe: true });