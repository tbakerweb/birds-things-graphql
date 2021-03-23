const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;
const zenbotDb = mongoose.createConnection('mongodb://192.168.1.5:27017/zenbot4');

const MyTradeSchema = new Schema(
    {
        id: String,
        order_id: String,
        time: Number,
        execution_time: Number,
        slippage: Number,
        type: String,
        size: String,
        fee: Number,
        order_type: String,
        selector: String,
        session_id: String,
        mode: String
    },
    {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}}
);

// Export the Schema Module
module.exports = {
    MyTradeSchema: zenbotDb.model('myTrades',MyTradeSchema),
    MyTradeTC: composeWithMongoose(zenbotDb.model('my_trades', MyTradeSchema)),
};