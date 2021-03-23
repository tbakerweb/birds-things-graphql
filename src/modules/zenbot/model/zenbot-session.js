const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;
const zenbotDb = mongoose.createConnection('mongodb://192.168.1.5:27017/zenbot4');

const SessionSchema = new Schema(
    {
        id: String,
        selector: String,
        started: Number,
        mode: String,
        options: Object,
        updated: Number,
        balance: Object,
        start_capital: Number,
        start_price: Number,
        num_trades: Number,
        orig_capital: Number,
        orig_price: Number,
        price: Number
    },
    {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}}
);

// Export the Schema Module
module.exports = {
    SessionSchema: zenbotDb.model('Sessions',SessionSchema),
    SessionTC: composeWithMongoose(zenbotDb.model('sessions', SessionSchema)),
};