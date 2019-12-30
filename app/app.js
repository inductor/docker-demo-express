const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;


// GET http://localhost:3000/
app.get('/', function (req, res) {
    res.json({
        message: "Hello, world!"
    });
});

app.listen(port);
console.log('listen on port ' + port);
