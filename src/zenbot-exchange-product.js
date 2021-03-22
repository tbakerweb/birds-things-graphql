

const { ExchangeProductTC } = require('../model/zenbot-exchange-product');

// Create a   Query
const ExchangeProductQuery = {
    ExchangeProductById: ExchangeProductTC.getResolver('findById'),
    ExchangeProductByIds: ExchangeProductTC.getResolver('findByIds'),
    ExchangeProductOne: ExchangeProductTC.getResolver('findOne'),
    ExchangeProductMany: ExchangeProductTC.getResolver('findMany'),
    ExchangeProductCount: ExchangeProductTC.getResolver('count'),
    ExchangeProductConnection: ExchangeProductTC.getResolver('connection'),
    ExchangeProductPagination: ExchangeProductTC.getResolver('pagination'),
};

// Create a ExchangeProduct Mutation
const ExchangeProductMutation = {
    ExchangeProductCreateOne: ExchangeProductTC.getResolver('createOne'),
    ExchangeProductCreateMany: ExchangeProductTC.getResolver('createMany'),
    ExchangeProductUpdateById: ExchangeProductTC.getResolver('updateById'),
    ExchangeProductUpdateOne: ExchangeProductTC.getResolver('updateOne'),
    ExchangeProductUpdateMany: ExchangeProductTC.getResolver('updateMany'),
    ExchangeProductRemoveById: ExchangeProductTC.getResolver('removeById'),
    ExchangeProductRemoveOfakeDatane: ExchangeProductTC.getResolver('removeOne'),
    ExchangeProductRemoveMany: ExchangeProductTC.getResolver('removeMany'),
};

// Export the ExchangeProduct Query and Mutations
module.exports = { ExchangeProductQuery, ExchangeProductMutation };

