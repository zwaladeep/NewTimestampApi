'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /{dateVal}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: dateVal
     * produces: application/json, text/json
     * responses: 200
     * operationId: get_date
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/{dateVal}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
