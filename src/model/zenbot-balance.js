const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;

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
    BalanceSchema: mongoose.model('balances',BalanceSchema),
    BalanceTC: composeWithMongoose(mongoose.model('balances', BalanceSchema)),
};