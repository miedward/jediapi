//include the model (aka DB connection)
var db = require('../model/db.js');
const jwt = require('jsonwebtoken');

var star='ID, Name, Sense, Control, `Alter`, CareerNumber, TraditionNumber, SecondNumber, SkillPoints, Quest1';
//create class
var Jedi = {
    //function to call to log in
    doLogin: function (req, res) {
        var thisJedi = {};
        var thisName = req.body.Name;
        var thisPass = req.body.Password;
        console.log('wut data: ' + thisName + ", " + thisPass);
        var someJedi = db.query('SELECT '+star+' from jedi WHERE Name=?', [thisName], function (error, results) {
            //if error, print blank results
            if (error) {
                console.log(error);
                var apiResult = {};
                res.json(apiResult);
            }
            //console.log(results);
            //make results
            var resultJson = JSON.stringify(results);
            console.log(resultJson);
            resultJson = JSON.parse(resultJson);
            thisJedi = resultJson[0];

            //send JSON to Express
            if (!thisJedi) {
                console.log("401: No Jedi with name " + thisName);
                res.status(401).send('Invalid User');
            } else if (thisJedi.Password !== thisPass) {
                console.log("401: " + thisJedi.Password + ", " + thisPass);
                res.status(401).send('Invalid Password');
            } else {
                console.log("200: " + thisJedi.Password + ", " + thisPass);
                //This simple yes/no seems to be good enough?
                //let payload = {subject: someJedi.ID};
                //let token = jwt.sign(payload, 'MGNiZTc2MTAxZDg2MzJmMzNhYjY5NmZkODIzMjQ2OTA3NDI3MDFjMiAgLQo=');
                res.json(resultJson[0]);
            }
        });
    },
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
        var results = db.query('SELECT '+star+' from ?? WHERE ID=?', [section, req.params.rowId], function (error, results, fields) {
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

            //add our JSON results to the data table
            //apiResult.data = resultJson;
            console.log(resultJson[0]);
            //send JSON to Express
            res.json(resultJson[0]);
        });
    },
  updateItemById: function (req, res) {
        //grab the site section from the req variable (/Jedis/)
    //{hostname}/jedi/id/:rowId
    //console.log(req) to see all the goodies
    let pathname = req._parsedUrl.pathname.split('/');
    //split makes an array, so pick the second row
    let section = pathname[1];
    //console.log("section: ", section, " rowId: ", req.params.rowId, "\n" );
    //query the DB using prepared statement
    //apparently ?? is a string and ? is a number.  This is not well documented.

    console.log('wut data: '+JSON.stringify(req.body));
    var results = db.query('UPDATE ?? SET ID=?, Name=?, Password=?, '+
    'Sense=?, Control=?, `Alter`=?, CareerNumber=?, TraditionNumber=?, '+
    'SecondNumber=?, SkillPoints=?, Quest1=? WHERE ID=?;',
    [section, req.body.ID, req.body.Name, req.body.Password, req.body.Sense, 
     req.body.Control, req.body.Alter, req.body.CareerNumber, req.body.TraditionNumber, 
     req.body.SecondNumber, req.body.SkillPoints, req.body.Quest1, req.params.rowId], 
      function (error, results, fields) {
      //if error, print blank results
      if (error) {
        console.log(error);
        var apiResult = {};
        res.json(apiResult);
      } 
      //console.log('Update successful');
      var resultJson = JSON.stringify(results);
     
      resultJson = JSON.parse(resultJson);

      //add our JSON results to the data table
      //apiResult.data = resultJson;
      console.log('Update Successful');
      //send JSON to Express
      res.json(resultJson[0]);
    });
   },
  deleteItemById: function (req, res) { },
  updateItemByName: function (req, res) { },
  deleteItemByName: function (req, res) { },
};
module.exports = Jedi;
