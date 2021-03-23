const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;
const zenbotDb = mongoose.createConnection('mongodb://192.168.1.5:27017/zenbot4');

const ExchangeProductSchema = new Schema(
    {
        asset: String,
        currency: String,
        min_size: Number,
        max_size: Number,
        increment: Number,
        label: String
    },
    {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}}
);

// Export the Schema Module
module.exports = {
    ExchangeProductSchema: zenbotDb.model('exchangeProducts',ExchangeProductSchema),
    ExchangeProductTC: composeWithMongoose(zenbotDb.model('exchange_products', ExchangeProductSchema)),
};