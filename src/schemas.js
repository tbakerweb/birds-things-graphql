
const { SchemaComposer } = require('graphql-compose');
const schemaComposer = new SchemaComposer();

// DEMO
// const { UserQuery, UserMutation } = require('./user');
// const { BookQuery, BookMutation } = require('./book');

// Tony Crypto data from PowerShell
const { CurrencyBalanceQuery, CurrencyBalanceMutation } = require('./modules/tony/schemas/currency-balance');

// Zenbot 
const { BalanceQuery, BalanceMutation } = require('./modules/zenbot/schemas/zenbot-balance');
const { ExchangeProductQuery, ExchangeProductMutation } = require('./modules/zenbot/schemas/zenbot-exchange-product');
const { MyTradeQuery, MyTradeMutation } = require('./modules/zenbot/schemas/zenbot-my-trade');
const { PeriodQuery, PeriodMutation } = require('./modules/zenbot/schemas/zenbot-period');
const { TradeQuery, TradeMutation } = require('./modules/zenbot/schemas/zenbot-trade');
const { SessionQuery, SessionMutation } = require('./modules/zenbot/schemas/zenbot-session');

// Create the Queries
schemaComposer.Query.addFields({
    ...CurrencyBalanceQuery,
    ...BalanceQuery,
    ...ExchangeProductQuery,
    ...MyTradeQuery,
    ...PeriodQuery,
    ...TradeQuery,
    ...SessionQuery,
});

// Create the Mutations
schemaComposer.Mutation.addFields({
    ...CurrencyBalanceMutation,
    ...BalanceMutation,
    ...ExchangeProductMutation,
    ...MyTradeMutation,
    ...PeriodMutation,
    ...TradeMutation,
    ...SessionMutation,
});

// Export the Schemas
module.exports = schemaComposer.buildSchema();