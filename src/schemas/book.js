

const { BookTC } = require('../model/book');

// Create a Book Query
const BookQuery = {
    bookById: BookTC.getResolver('findById'),
    bookByIds: BookTC.getResolver('findByIds'),
    bookOne: BookTC.getResolver('findOne'),
    bookMany: BookTC.getResolver('findMany'),
    bookCount: BookTC.getResolver('count'),
    bookConnection: BookTC.getResolver('connection'),
    bookPagination: BookTC.getResolver('pagination'),
};

// Create a Book Mutation
const BookMutation = {
    bookCreateOne: BookTC.getResolver('createOne'),
    bookCreateMany: BookTC.getResolver('createMany'),
    bookUpdateById: BookTC.getResolver('updateById'),
    bookUpdateOne: BookTC.getResolver('updateOne'),
    bookUpdateMany: BookTC.getResolver('updateMany'),
    bookRemoveById: BookTC.getResolver('removeById'),
    bookRemoveOfakeDatane: BookTC.getResolver('removeOne'),
    bookRemoveMany: BookTC.getResolver('removeMany'),
    bookCreateOne: BookTC.getResolver('book'),
};

// Export the Book Query and Mutations
module.exports = { BookQuery, BookMutation };

