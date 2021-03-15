

const { TradeTC } = require('../model/zenbot-trades');

// Create a   Query
const TradeQuery = {
    TradeById: TradeTC.getResolver('findById'),
    TradeByIds: TradeTC.getResolver('findByIds'),
    TradeOne: TradeTC.getResolver('findOne'),
    TradeMany: TradeTC.getResolver('findMany'),
    TradeCount: TradeTC.getResolver('count'),
    TradeConnection: TradeTC.getResolver('connection'),
    TradePagination: TradeTC.getResolver('pagination'),
};

// Create a Trade Mutation
const TradeMutation = {
    TradeCreateOne: TradeTC.getResolver('createOne'),
    TradeCreateMany: TradeTC.getResolver('createMany'),
    TradeUpdateById: TradeTC.getResolver('updateById'),
    TradeUpdateOne: TradeTC.getResolver('updateOne'),
    TradeUpdateMany: TradeTC.getResolver('updateMany'),
    TradeRemoveById: TradeTC.getResolver('removeById'),
    TradeRemoveOfakeDatane: TradeTC.getResolver('removeOne'),
    TradeRemoveMany: TradeTC.getResolver('removeMany'),
};

// Export the Trade Query and Mutations
module.exports = { TradeQuery, TradeMutation };

