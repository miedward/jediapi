//include the model (aka DB connection)
var db = require('../model/db.js');

//create class
var Jedi = {
  //function to query all items

  getItemById: function (req, res) { 
    //grab the site section from the req variable (/Jedis/)
    //{hostname}/jedi/id/:rowId
    //console.log(req) to see all the goodies
    let pathname = req._parsedUrl.pathname.split('/');
    //split makes an array, so pick the second row
    let section = pathname[1];
    //console.log("section: ", section, " rowId: ", req.params.rowId, "\n" );
    //query the DB using prepared statement
    //apparently ?? is a string and ? is a number.  This is not well documented.
    var results = db.query('SELECT * from ?? WHERE ID=?', [section, req.params.rowId], function (error, results, fields) {
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
  updateItemById: function (req, res) { },
  deleteItemById: function (req, res) { },
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
  updateItemByName: function (req, res) { },
  deleteItemByName: function (req, res) { },
  getAllItems: function (req, res) {
    //grab the site section from the req variable (/Jedis/)
    //console.log(req) to see all the goodies
    let pathname = req._parsedUrl.pathname.split('/');
    //split makes an array, so pick the second row
    let section = pathname[1];

    //query the DB using prepared statement
    var results = db.query('SELECT * from ??', [section], function (error, results, fields) {
      //if error, print blank results
      if (error) {
        // console.log(error);
        var apiResult = {};

        // apiResult.meta = {
        //   table: section,
        //   type: "collection",
        //   total: 0
        // }
        //create an empty data table
        apiResult.data = [];

        //send the results (apiResult) as JSON to Express (res)
        //Express uses res.json() to send JSON to client
        //you will see res.send() used for HTML
        res.json(apiResult);

      }

      //make results 
      var resultJson = JSON.stringify(results);
      resultJson = JSON.parse(resultJson);
      var apiResult = {};


      // create a meta table to help apps
      //do we have results? what section? etc
      // apiResult.meta = {
      //     table: section,
      //     type: "collection",
      //     total: 1,
      //     total_entries: 0
      // }

      //add our JSON results to the data table
      apiResult.data = resultJson;

      //send JSON to Express
      res.json(resultJson);
    });
  },
};
module.exports = Jedi;