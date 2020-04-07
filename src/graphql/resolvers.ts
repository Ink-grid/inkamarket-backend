/** @format */
// query for inkmarket firestore
import productsController from '@controllers/productsController';

export const resolvers = {
	Query: {
		categories: async () => {
			return await productsController.ControllerGraphql.getCategoriesGql();
		},
		products: async () => {
			return await productsController.ControllerGraphql.getProductsGql();
		}
	},
	Mutation: {
		async createCateries(_, { input }) {
			let uid = await productsController.ControllerGraphql.setCategoryGql(
				input
			);
			input._uid = uid;
			return input;
		}
	}
};
