const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;
const zenbotDb = mongoose.createConnection('mongodb://192.168.1.5:27017/zenbot4');

const TradeSchema = new Schema(
    {
        id: String,
        trade_id: String,
        time: Number,
        size: Number,
        price: Number,
        size: String,
        selector: String
    },
    {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}}
);

// Export the Schema Module
module.exports = {
    TradeSchema: zenbotDb.model('Trades',TradeSchema),
    TradeTC: composeWithMongoose(zenbotDb.model('trades', TradeSchema)),
};