const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;

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
    ExchangeProductSchema: mongoose.model('exchangeProducts',ExchangeProductSchema),
    ExchangeProductTC: composeWithMongoose(mongoose.model('exchange_products', ExchangeProductSchema)),
};