'use strict';
var dataProvider = require('../data/{dateVal}.js');
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
     */
    get: function get_date(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var dateVal = req.params.dateVal;
  
        var dateFormattingOptions = {
          year : 'numeric',
          month :'long',
          day :'numeric'
          };
        
        if(isNaN(dateVal)){
          var naturalDate = new Date(dateVal);
          naturalDate = naturalDate.toLocaleDateString("en-us",dateFormattingOptions);
          var unixDate = new Date(dateVal).getTime()/1000;
          
        }
        else{
          var unixDate = dateVal;
          var naturalDate = new Date(dateVal*1000);
          naturalDate = naturalDate.toLocaleDateString("en-us",dateFormattingOptions);
          }
        res.json({unix: dateVal,natural: naturalDate});
    }
};
