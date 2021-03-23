const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;
const zenbotDb = mongoose.createConnection('mongodb://192.168.1.5:27017/zenbot4');

const BalanceSchema = new Schema(
    {
        selector: String,
        dateCollected: Number,
        currency: String,
        asset: String,
        price: Number,
        start_capital: Number,
        start_price: Number,
        consolidated: Number,
        profit: Number,
        buy_hold: Number,
        buy_hold_profit: Number,
        vs_buy_hold: Number,
    },
    {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}}
);

// Export the Schema Module
module.exports = {
    BalanceSchema: zenbotDb.model('balances',BalanceSchema),
    BalanceTC: composeWithMongoose(zenbotDb.model('balances', BalanceSchema)),
};