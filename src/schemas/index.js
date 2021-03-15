
const { SchemaComposer } = require('graphql-compose');

const schemaComposer = new SchemaComposer();

// const { UserQuery, UserMutation } = require('./user');
// const { BookQuery, BookMutation } = require('./book');
const { CurrencyBalanceQuery, CurrencyBalanceMutation } = require('./currency-balance');

// Create the Queries
schemaComposer.Query.addFields({
    // ...UserQuery,
    // ...BookQuery,
    ...CurrencyBalanceQuery,
});

// Create the Mutations
schemaComposer.Mutation.addFields({
    // ...UserMutation,
    // ...BookMutation,
    ...CurrencyBalanceMutation,
});

// Export the Schemas
module.exports = schemaComposer.buildSchema();