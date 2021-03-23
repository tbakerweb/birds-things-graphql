const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const Schema = mongoose.Schema;
const zenbotDb = mongoose.createConnection('mongodb://192.168.1.5:27017/zenbot4');

const PeriodSchema = new Schema(
    {
        id: String,
        period_id: String,
        size: String,
        time: Number,
        open: Number,
        high: Number,
        low: Number,
        close: Number,
        volume: Number,
        close_time: Number,
        latest_trade_time: Number,
        overbought_rsi_ave_gain: Number,
        overbought_rsi_ave_loss: Number,
        overbought_rsi: Number,
        ema_short: Number,
        ema_long: Number,
        macd: Number,
        macd_histogram: Number,
        signal: Number,
        mom0: Number,
        mom1: Number,
        last_try_trade: Number,
        rsi_ave_gain: Number,
        rsi_ave_loss: Number,
        rsi: Number,
        id: String,
        selector: String,
        session_id: String,
        src: Number,

    },
    {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}}
);

// Export the Schema Module
module.exports = {
    PeriodSchema: zenbotDb.model('periods',PeriodSchema),
    PeriodTC: composeWithMongoose(zenbotDb.model('periods', PeriodSchema)),
};