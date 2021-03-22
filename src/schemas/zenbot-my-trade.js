

const { MyTradeTC } = require('../model/zenbot-my-trade');

// Create a   Query
const MyTradeQuery = {
    MyTradeById: MyTradeTC.getResolver('findById'),
    MyTradeByIds: MyTradeTC.getResolver('findByIds'),
    MyTradeOne: MyTradeTC.getResolver('findOne'),
    MyTradeMany: MyTradeTC.getResolver('findMany'),
    MyTradeCount: MyTradeTC.getResolver('count'),
    MyTradeConnection: MyTradeTC.getResolver('connection'),
    MyTradePagination: MyTradeTC.getResolver('pagination'),
};

// Create a MyTrade Mutation
const MyTradeMutation = {
    MyTradeCreateOne: MyTradeTC.getResolver('createOne'),
    MyTradeCreateMany: MyTradeTC.getResolver('createMany'),
    MyTradeUpdateById: MyTradeTC.getResolver('updateById'),
    MyTradeUpdateOne: MyTradeTC.getResolver('updateOne'),
    MyTradeUpdateMany: MyTradeTC.getResolver('updateMany'),
    MyTradeRemoveById: MyTradeTC.getResolver('removeById'),
    MyTradeRemoveOfakeDatane: MyTradeTC.getResolver('removeOne'),
    MyTradeRemoveMany: MyTradeTC.getResolver('removeMany'),
};

// Export the MyTrade Query and Mutations
module.exports = { MyTradeQuery, MyTradeMutation };

