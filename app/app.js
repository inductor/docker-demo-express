const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// GET http://localhost:3000/
app.get('/', function (req, res) {
    res.json({
        message: "Hello, world!"
    });
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log('listen on port ' + port);
