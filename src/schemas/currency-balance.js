

const { CurrencyBalanceTC } = require('../model/currency-balance');

// Create a CurrencyBalance Query
const CurrencyBalanceQuery = {
    currencyBalanceById: CurrencyBalanceTC.getResolver('findById'),
    currencyBalanceByIds: CurrencyBalanceTC.getResolver('findByIds'),
    currencyBalanceOne: CurrencyBalanceTC.getResolver('findOne'),
    currencyBalanceMany: CurrencyBalanceTC.getResolver('findMany'),
    currencyBalanceCount: CurrencyBalanceTC.getResolver('count'),
    currencyBalanceConnection: CurrencyBalanceTC.getResolver('connection'),
    currencyBalancePagination: CurrencyBalanceTC.getResolver('pagination'),
};

// Create a CurrencyBalance Mutation
const CurrencyBalanceMutation = {
    currencyBalanceCreateOne: CurrencyBalanceTC.getResolver('createOne'),
    currencyBalanceCreateMany: CurrencyBalanceTC.getResolver('createMany'),
    currencyBalanceUpdateById: CurrencyBalanceTC.getResolver('updateById'),
    currencyBalanceUpdateOne: CurrencyBalanceTC.getResolver('updateOne'),
    currencyBalanceUpdateMany: CurrencyBalanceTC.getResolver('updateMany'),
    currencyBalanceRemoveById: CurrencyBalanceTC.getResolver('removeById'),
    currencyBalanceRemoveOfakeDatane: CurrencyBalanceTC.getResolver('removeOne'),
    currencyBalanceRemoveMany: CurrencyBalanceTC.getResolver('removeMany'),
};

// Export the CurrencyBalance Query and Mutations
module.exports = { CurrencyBalanceQuery, CurrencyBalanceMutation };

