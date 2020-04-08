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
		},
		pruebaProducts: async (_, { category, limit, after }) => {
			return await productsController.ControllerGraphql.getCategoryPaginationGql(
				limit,
				category,
				after
			);
		}
	},
	Mutation: {
		async createCategories(_, { input }) {
			let uid = await productsController.ControllerGraphql.setCategoryGql(
				input
			);
			input._uid = uid;
			return input;
		},

		async createProduct(_, { input }) {
			let uid = await productsController.ControllerGraphql.setProductGql(input);
			input.sku = uid;
			return input;
		}
	},

	Category: {
		products: async ({ _uid }) => {
			console.log(_uid);
			return await productsController.ControllerGraphql.getProductsByCategory(
				_uid
			);
		}
	},

	Product: {
		category: async ({ category }) => {
			return await productsController.ControllerGraphql.getCategoryGql(
				category
			);
		}
	}
};
