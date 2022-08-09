const express = require('express');
const bodyParser = require('body-parser');

//Routes Import
const adminRoutes = require('./routes/admin/admin');


const app = express();

//BodyParser
app.use(bodyParser.json())

//CROS Error Resolve
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//Routes
app.use(adminRoutes)

app.listen(8080)