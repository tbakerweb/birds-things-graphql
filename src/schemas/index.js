
const { SchemaComposer } = require('graphql-compose');

const schemaComposer = new SchemaComposer();

const { CurrencyBalanceQuery, CurrencyBalanceMutation } = require('./currency-balance');
const { BalanceQuery, BalanceMutation } = require('./zenbot-balance');
const { ExchangeProductQuery, ExchangeProductMutation } = require('./zenbot-exchange-product');
const { MyTradeQuery, MyTradeMutation } = require('./zenbot-my-trade');
const { PeriodQuery, PeriodMutation } = require('./zenbot-period');
const { TradeQuery, TradeMutation } = require('./zenbot-trade');
const { SessionQuery, SessionMutation } = require('./zenbot-session');

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