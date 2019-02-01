//include the model (aka DB connection)
var db = require('../model/db.js');

//create class
var Wildcard = {
  //function to query all items
  getAllItems: function (req, res) { 
    //grab the site section from the req variable (/Jedis/)
    //{hostname}/jedi/id/:rowId
    //console.log(req) to see all the goodies
    let pathname = req._parsedUrl.pathname.split('/');
    //split makes an array, so pick the second row
    let section = pathname[1];
    //console.log("section: ", section, " rowId: ", req.params.rowId, "\n" );
    //query the DB using prepared statement
    //apparently ?? is a string and ? is a number.  This is not well documented.
    var results = db.query('SELECT * from ??', [section], function (error, results, fields) {
      //if error, print blank results
      if (error) {
        console.log(error);
        var apiResult = {};
        res.json(apiResult);
      } 
      //console.log(results);
      //make results 
      var resultJson = JSON.stringify(results);
     
      resultJson = JSON.parse(resultJson);
      var apiResult = {};

      //add our JSON results to the data table
      //apiResult.data = resultJson;
      console.log(resultJson);
      //send JSON to Express
      res.json(resultJson);
    });
  },
  getItemByName: function (req, res) { 
    //grab the site section from the req variable (/Jedis/)
    //{hostname}/jedi/id/:rowId
    //console.log(req) to see all the goodies
    let pathname = req._parsedUrl.pathname.split('/');
    //split makes an array, so pick the second row
    let section = pathname[1];
    //console.log("section: ", section, " rowId: ", req.params.rowId, "\n" );
    //query the DB using prepared statement
    //apparently ?? is a string and ? is a number.  This is not well documented.
    var results = db.query('SELECT * from ?? WHERE Name=?', [section,req.params.name], function (error, results, fields) {
      //if error, print blank results
      if (error) {
        console.log(error);
        var apiResult = {};
        res.json(apiResult);
      } 
      //console.log(results);
      //make results 
      var resultJson = JSON.stringify(results);
     
      resultJson = JSON.parse(resultJson);
      var apiResult = {};

      //add our JSON results to the data table
      //apiResult.data = resultJson;
      console.log(resultJson[0]);
      //send JSON to Express
      res.json(resultJson[0]);
    });
  },
  getItemByNames: function (req, res) { 
    //grab the site section from the req variable (/Jedis/)
    //{hostname}/jedi/id/:rowId
    //console.log(req) to see all the goodies
    let pathname = req._parsedUrl.pathname.split('/');
    //split makes an array, so pick the second row
    let section = pathname[1];
    //console.log("section: ", section, " rowId: ", req.params.rowId, "\n" );
    //query the DB using prepared statement
    //apparently ?? is a string and ? is a number.  This is not well documented.
    var results = db.query('SELECT * from ?? WHERE Name LIKE ?', [section,req.params.name+"\%"], function (error, results, fields) {
      //if error, print blank results
      if (error) {
        console.log(error);
        var apiResult = {};
        res.json(apiResult);
      } 
      //console.log(results);
      //make results 
      var resultJson = JSON.stringify(results);
     
      resultJson = JSON.parse(resultJson);
      var apiResult = {};

      //add our JSON results to the data table
      //apiResult.data = resultJson;
      console.log(resultJson);
      //send JSON to Express
      res.json(resultJson);
    });
  },
};
module.exports = Wildcard;