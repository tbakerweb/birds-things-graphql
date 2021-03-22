const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;

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
    SessionSchema: mongoose.model('Sessions',SessionSchema),
    SessionTC: composeWithMongoose(mongoose.model('sessions', SessionSchema)),
};