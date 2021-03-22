

const { SessionTC } = require('../model/zenbot-session');

// Create a   Query
const SessionQuery = {
    SessionById: SessionTC.getResolver('findById'),
    SessionByIds: SessionTC.getResolver('findByIds'),
    SessionOne: SessionTC.getResolver('findOne'),
    SessionMany: SessionTC.getResolver('findMany'),
    SessionCount: SessionTC.getResolver('count'),
    SessionConnection: SessionTC.getResolver('connection'),
    SessionPagination: SessionTC.getResolver('pagination'),
};

// Create a Session Mutation
const SessionMutation = {
    SessionCreateOne: SessionTC.getResolver('createOne'),
    SessionCreateMany: SessionTC.getResolver('createMany'),
    SessionUpdateById: SessionTC.getResolver('updateById'),
    SessionUpdateOne: SessionTC.getResolver('updateOne'),
    SessionUpdateMany: SessionTC.getResolver('updateMany'),
    SessionRemoveById: SessionTC.getResolver('removeById'),
    SessionRemoveOfakeDatane: SessionTC.getResolver('removeOne'),
    SessionRemoveMany: SessionTC.getResolver('removeMany'),
};

// Export the Session Query and Mutations
module.exports = { SessionQuery, SessionMutation };

