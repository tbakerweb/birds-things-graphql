const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;

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
    TradeSchema: mongoose.model('Trades',TradeSchema),
    TradeTC: composeWithMongoose(mongoose.model('trades', TradeSchema)),
};