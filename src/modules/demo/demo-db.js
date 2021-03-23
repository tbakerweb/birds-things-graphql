import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Set the Mongo Endpoint URI
const MONGO_URI = 'mongodb://192.168.1.5:27017/mongoosetest';

mongoose.Promise = global.Promise;

const connection = mongoose.connect( MONGO_URI, {
    autoIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 50,
    bufferMaxEntries: 0,
    keepAlive: 120,
    useNewUrlParser: true,
});

mongoose.set('useCreateIndex', true);

connection
    .then(db => db)
    .catch(err => {
        console.log(err);
    });

export default connection;