/** @format */
// graphql inkmarket backend

import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDesf = `
    type Query {
        categories : [Category!]!
        products: [Product!]!
    }

    type Mutation {
        createCateries(input: CategoryInput) : Category
    }

    input CategoryInput {
            title: String!
            description: String!
            uri: String!
    }

    type Category {
            _uid: String
            title: String
            description: String
            uri: String,
            products: [Product!]!
    }

    type Product {
            sku: String
            _uid_categories: String
            _uid_warehouses: String
            name: String
            description: String
            price: Float
            
    }
`;

export default makeExecutableSchema({
	typeDefs: typeDesf,
	resolvers: resolvers
});
