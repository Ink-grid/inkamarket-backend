/** @format */

import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDesf = `
    type Query {
        hello: String
    }
`;

export default makeExecutableSchema({
	typeDefs: typeDesf,
	resolvers: resolvers
});
