const express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session')
var cors = require('cors');


const app = express()
const port = process.env.PORT || 3000

const addStatusRoute = require('./routes/status-route')

app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
   secret: 'puki muki',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: false }
}))


 app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-auth");
  next();
});



addStatusRoute(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
