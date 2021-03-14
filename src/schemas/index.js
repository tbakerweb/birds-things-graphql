
const { SchemaComposer } = require('graphql-compose');

const schemaComposer = new SchemaComposer();

const { UserQuery, UserMutation } = require('./user');
// const { BookQuery, BookMutation } = require('./book');
// const { BalanceQuery, BalanceMutation } = require('./balance');

// Create the Queries
schemaComposer.Query.addFields({
    ...UserQuery,
    // ...BookQuery,
    // ...BalanceQuery,
});

// Create the Mutations
schemaComposer.Mutation.addFields({
    ...UserMutation,
    // ...BookMutation,
    // ...BalanceMutation,
});

// Export the Schemas
module.exports = schemaComposer.buildSchema();