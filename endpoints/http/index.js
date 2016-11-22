//generated but only once. New endpoints would be hooked up manually after generation
"use strict";
var fhlogger = require('fh-logger');
var fhconfig = require('fh-config');


exports.buildEndpoints = function buildEndpoints(server){
//wire up the endpoints
  let deployService = require('../../deploy/service.js')(fhconfig,fhlogger.logger);
  let deploy = require('./deploy.js');
  deploy.deployEndpoint(server,deployService);

  let sys = require('./sys.js')
  sys.sysHealthEndpoint(server);
  sys.sysPingEndpoint(server);
};