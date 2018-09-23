const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')

const app = express();

const config = require("./configs/app");
const mongoose = require("./configs/database");

const apiRouter = require("./routes/api");

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));
app.use(morgan('combined'))

//routers
app.use('/api', apiRouter);

//show error 404
app.use(function (req, res, next) {
    if (req.accepts('html') || req.accepts('json')) return next(createError(404, 'Page Not Found'))
    next()
});

//Listen app port
const { app: { port } } = config;
app.listen(port , () => {
    console.log(`Server running at Port ${port}`)
});