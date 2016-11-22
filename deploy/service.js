'use strict';

//Never generated
module.exports =  function deployService (config, logger) {
    return {
        "deploy": function (deployCtx) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    //fake business logic
                    var fail = Math.floor(Math.random() * (10 - 1) + 1);
                    logger.info("fail is " + fail );
                    if (fail % 2 === 0) {
                        return reject(new Error("failed"));
                    }
                    return resolve(deployCtx);
                }, 500);
            });
        }
    }
}