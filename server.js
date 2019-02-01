var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

app = express();

//Cargar rutas
var appRoutes = require('./app/routes/approutes.js');

//cors
//app.use(cors({origin: 'http://localhost'}));
app.use(cors())
//var corsOptions = {
//    origin: 'http://localhost:4200',
//    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//  }
//app.use(cors(corsOptions));
//var corsOptions = {
//    origin: function (origin, callback) {
//      if (whitelist.indexOf(origin) !== -1 || !origin) {
//        callback(null, true)
//      } else {
//        callback(new Error('Not allowed by CORS'))
//      }
//    }
//}
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use('/', cors(corsOptions), appRoutes);
app.use('/', cors(), appRoutes);
app.listen(port, () => console.log(`Jediweb listening on port ${port}!`))

module.exports = app;