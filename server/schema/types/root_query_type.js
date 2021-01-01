const graphql = require('graphql');
const UserType = require('./user');
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(src, args, req) {
        return req.user;
      },
    },
  },
});

module.exports = RootQueryType;
