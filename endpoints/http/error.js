// generated or could be put in place by yeoman.
'use strict';
module.exports = function errorHandler(err, req, res, next) {
    var responseData;
    if (err.name === 'JsonSchemaValidation') {

        // Log the error however you please 
        console.log(err.message);
        // logs "express-jsonschema: Invalid data found" 

        // Set a bad request http response status 
        res.status(400);

        // Format the response body 
        responseData = {
            statusText: 'Bad Request',
            jsonSchemaValidation: true,
            validations: err.validations // All of your validation information 
        };

        res.json(responseData);

    } else {
        // pass error to next error middleware handler 
        if (err instanceof Error) {
            var error = {};

            Object.getOwnPropertyNames(err).forEach(function (key) {
                if (key !== 'stack'){
                    error[key] = err[key];
                }
            });

            return res.status(err.code || 500).json(error);
        }
        return res.status(err.code || 500).json(err);

        
    }
};