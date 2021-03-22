

const { PeriodTC } = require('../model/zenbot-period');

// Create a   Query
const PeriodQuery = {
    PeriodById: PeriodTC.getResolver('findById'),
    PeriodByIds: PeriodTC.getResolver('findByIds'),
    PeriodOne: PeriodTC.getResolver('findOne'),
    PeriodMany: PeriodTC.getResolver('findMany'),
    PeriodCount: PeriodTC.getResolver('count'),
    PeriodConnection: PeriodTC.getResolver('connection'),
    PeriodPagination: PeriodTC.getResolver('pagination'),
};

// Create a Period Mutation
const PeriodMutation = {
    PeriodCreateOne: PeriodTC.getResolver('createOne'),
    PeriodCreateMany: PeriodTC.getResolver('createMany'),
    PeriodUpdateById: PeriodTC.getResolver('updateById'),
    PeriodUpdateOne: PeriodTC.getResolver('updateOne'),
    PeriodUpdateMany: PeriodTC.getResolver('updateMany'),
    PeriodRemoveById: PeriodTC.getResolver('removeById'),
    PeriodRemoveOfakeDatane: PeriodTC.getResolver('removeOne'),
    PeriodRemoveMany: PeriodTC.getResolver('removeMany'),
};

// Export the Period Query and Mutations
module.exports = { PeriodQuery, PeriodMutation };

