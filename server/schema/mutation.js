const UserType = require('./types/user');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const authService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(src, { email, password }, req) {
        return authService.signup({ email, password, req });
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(src, { email, password }, req) {
        return authService.login({ email, password, req });
      },
    },
    logout: {
      type: UserType,
      resolve(src, args, req) {
        const { user } = req;
        req.logout();
        return user;
      },
    },
  },
});

module.exports = mutation;
