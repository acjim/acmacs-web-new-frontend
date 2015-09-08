// to use nconf check nconf documentation and
// for example use this: http://code.runnable.com/Ve4mUV6JXP1uW9sg/-learning-using-nconf-file-config-node-js
// nconf looks only relevant if you want to merge different config objects @current implementation looks neat

/*
 USAGE:
 var config = require('./config.js');
 config.server_name
 */


var config = {}

config.store = {};
config.debug = {};
config.api = {};

config.server_name =  'ACJIM';
config.api.location = '/Users/rohan/Desktop/';
config.api.file = '';
config.store.path = './data/';

module.exports = config;