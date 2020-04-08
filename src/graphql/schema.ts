/** @format */
// graphql inkmarket backend

import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDesf = `
    type Query {
        categories : [Category!]!
        products: [Product!]!
        pruebaProducts(category: String!, limit: Int!, after: String): [Product!]!
    }

    type Mutation {
        createCategories(input: CategoryInput) : Category
        createProduct(input: ProductInput) : Product
    }

    input CategoryInput {
            title: String!
            description: String!
            uri: String!
    }

    input ProductInput {
            category: String!,
            name: String!,
            warehouse: String!,
            description: String!,
            price: Float!
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
            category: Category
            warehouse: String
            name: String
            description: String
            price: Float   
    }
`;

export default makeExecutableSchema({
	typeDefs: typeDesf,
	resolvers: resolvers
});
