

const { BalanceTC } = require('../model/zenbot-balance');

// Create a   Query
const BalanceQuery = {
    balanceById: BalanceTC.getResolver('findById'),
    balanceByIds: BalanceTC.getResolver('findByIds'),
    balanceOne: BalanceTC.getResolver('findOne'),
    balanceMany: BalanceTC.getResolver('findMany'),
    balanceCount: BalanceTC.getResolver('count'),
    balanceConnection: BalanceTC.getResolver('connection'),
    balancePagination: BalanceTC.getResolver('pagination'),
};

// Create a Balance Mutation
const BalanceMutation = {
    balanceCreateOne: BalanceTC.getResolver('createOne'),
    balanceCreateMany: BalanceTC.getResolver('createMany'),
    balanceUpdateById: BalanceTC.getResolver('updateById'),
    balanceUpdateOne: BalanceTC.getResolver('updateOne'),
    balanceUpdateMany: BalanceTC.getResolver('updateMany'),
    balanceRemoveById: BalanceTC.getResolver('removeById'),
    balanceRemoveOfakeDatane: BalanceTC.getResolver('removeOne'),
    balanceRemoveMany: BalanceTC.getResolver('removeMany'),
};

// Export the Balance Query and Mutations
module.exports = { BalanceQuery, BalanceMutation };

