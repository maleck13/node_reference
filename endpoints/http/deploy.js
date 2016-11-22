//Initially generated but is yours aftewards 
'use strict';

const validate = require('express-jsonschema').validate;
const deplyCtx = require('../../context/deploy.js')


exports.deployEndpoint = function deployEndpoint(server, service){
    //bail at setup time 
    if (! service && ! service.deploy ==='function'){
        throw new Error("deployEndpoint expects a service that has a deploy function");
    }
    function endpoint(req,res,next){
        //req.body is now validated. More could be added to the context not sure what yet a logger maybe
        //service would be our business logic and not generated
        service.deploy(req.body)
        .then((response)=>{
            return res.status(201).json(response);
        })
        .catch((err)=>{
            //hand off to express error handler
            return next(err);
        });

    };

    server.post("/deploy",validate({body: deplyCtx.payloadJsonSchema}),endpoint);
    
};


/**
 *
 * Initial generation would look like this but user free to modify afterwards
const validate = require('express-jsonschema').validate;
const deplyCtx = require('../../context/deploy.js')


exports.buildDeployEndpoint = function deployEndpoint(server){
    function endpoint(req,res,next){
        //req.body is now validated
        //service would be our business logic and not generated
    };

    server.post("/deploy",validate({body: deplyCtx.payloadJsonSchema}),endpoint);
    
};
 */