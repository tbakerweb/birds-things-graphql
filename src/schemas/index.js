
const { SchemaComposer } = require('graphql-compose');

const schemaComposer = new SchemaComposer();

const { CurrencyBalanceQuery, CurrencyBalanceMutation } = require('./currency-balance');
const { BalanceQuery, BalanceMutation } = require('./zenbot-balance');
const { ExchangeProductQuery, ExchangeProductMutation } = require('./zenbot-exchange-product');
const { MyTradeQuery, MyTradeMutation } = require('./zenbot-my-trades');
const { PeriodQuery, PeriodMutation } = require('./zenbot-periods');
const { TradeQuery, TradeMutation } = require('./zenbot-trades');

// Create the Queries
schemaComposer.Query.addFields({
    ...CurrencyBalanceQuery,
    ...BalanceQuery,
    ...ExchangeProductQuery,
    ...MyTradeQuery,
    ...PeriodQuery,
    ...TradeQuery,
});

// Create the Mutations
schemaComposer.Mutation.addFields({
    ...CurrencyBalanceMutation,
    ...BalanceMutation,
    ...ExchangeProductMutation,
    ...MyTradeMutation,
    ...PeriodMutation,
    ...TradeMutation,
});

// Export the Schemas
module.exports = schemaComposer.buildSchema();