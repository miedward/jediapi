var express = require('express');
var router = express.Router();
var wildcards = require('../controller/wildcardController.js');
var jedi = require('../controller/jediController.js');
var tradition = require('../controller/tradController.js');
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.route('/jedi')
        .get(cors(corsOptions),wildcards.getAllItems);
app.route('/jedi/id/:rowId')
        .get(cors(corsOptions),jedi.getItemById)
        .put(cors(corsOptions),jedi.updateItemById)
        .delete(cors(corsOptions),jedi.deleteItemById);
app.route('/jedi/names/:name')
        .get(cors(corsOptions),wildcards.getItemByNames)
app.route('/jedi/name/:name')
        .get(cors(corsOptions),wildcards.getItemByName)
        .put(cors(corsOptions),jedi.updateItemByName)
        .delete(cors(corsOptions),jedi.deleteItemByName);
app.route('/tradition')
        .get(cors(corsOptions),wildcards.getAllItems);
module.exports = router