const mongoose = require('mongoose');
const config = require('./app');
const { db: { connection, host, port, name } } = config;
const connectionString = `${connection}://${host}:${port}/${name}`;
mongoose.Promise = global.Promise;
mongoose.connect(connectionString, { useNewUrlParser: true }, (err) => {
    if(!err)
        console.log('MongoDB Connection Succeeded');
    else
        console.log('Error in DB Connection: '.JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;