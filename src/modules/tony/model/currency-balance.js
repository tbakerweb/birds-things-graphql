const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;
const tonyDb = mongoose.createConnection('mongodb://192.168.1.5:27017/zenbot4');

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
    CurrencyBalanceSchema: tonyDb.model('currencyBalances',CurrencyBalanceSchema),
    CurrencyBalanceTC: composeWithMongoose(tonyDb.model('currency_balances', CurrencyBalanceSchema)),
};