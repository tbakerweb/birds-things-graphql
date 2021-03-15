const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;

const CurrencyBalanceSchema = new Schema(
    {
        asset: String,
        assetId: String,
        assetName: String,
        dateCollected: String,
        free: String,
        locked: String,
        total: String,
        usdValue: Number,
    },
    {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}}
);

// Export the Schema Module
module.exports = {
    CurrencyBalanceSchema: mongoose.model('currencyBalances',CurrencyBalanceSchema),
    CurrencyBalanceTC: composeWithMongoose(mongoose.model('currency_balances', CurrencyBalanceSchema)),
};