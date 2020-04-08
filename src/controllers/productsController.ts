/** @format */
// controllers for inkmarket backend Api rest and Graphql

import status from 'http-status';
import has from 'has-keys';
import productModel from '@models/productModels';

const ControllerApiRest = {
	async getCategoryALl(rq, res) {
		try {
			let response = await productModel.getCategories('categorys');
			if (response) {
				const data = [];
				response.forEach(ele => {
					data.push(ele.data());
				});

				res.json({ status: true, message: 'list category', data: data });

				return;
			}
		} catch (error) {
			console.log(error);
			res.json({ status: false, message: '404 not found' });
		}
	}
};

const ControllerGraphql = {
	async getCategoriesGql() {
		try {
			let response = await productModel.getCategories('categorys');
			if (response) {
				const data = [];
				response.forEach(ele => {
					data.push(ele.data());
				});
				return data;
			}
		} catch (error) {
			console.log(error);
		}
	},
	async getProductsGql() {
		try {
			let response = await productModel.getProducts('products');
			if (response) {
				const data = [];
				response.forEach(ele => {
					data.push(ele.data());
				});
				return data;
			}
		} catch (error) {
			console.log(error);
		}
	},
	async setCategoryGql(data) {
		try {
			let _uid = await productModel.setCategory('categorys', data);
			await productModel.setUid('categorys', _uid.id, '_uid');
			return _uid.id;
		} catch (error) {
			console.log(error);
		}
	},
	async getCategoryPaginationGql(first: number, category: string, after?) {
		if (after) {
			var products = [];
			let next = await productModel
				.getItemOrderbyStartAfter(
					'products',
					first,
					after,
					'category',
					category
				)
				.get();
			if (next) {
				//let products = [];
				next.forEach(product => {
					products.push(product.data());
				});
				return products.filter(ele => ele.category === category);
			}
		}

		let pagination = await productModel
			.getItemOrderbyLimit('products', 'category', first, category)
			.get();
		if (pagination) {
			let products = [];
			pagination.forEach(product => {
				products.push(product.data());
			});
			return products;
		}
	},
	async getCategoryGql(uid) {
		try {
			let category = await productModel.getItem('categorys', uid);
			if (category.exists) {
				return category.data();
			}
		} catch (error) {
			console.log(error);
		}
	},
	async setProductGql(data) {
		try {
			let _uid = await productModel.setItem('products', data);
			await productModel.setUid('products', _uid.id, 'sku');
			return _uid.id;
		} catch (error) {
			console.log(error);
		}
	},
	async getProductsByCategory(uid) {
		try {
			let response = await productModel.getItemsbyUid(
				'products',
				'category',
				uid
			);
			if (response) {
				let products = [];
				response.forEach(product => {
					products.push(product.data());
				});
				return products;
			}
		} catch (error) {
			console.log(error);
		}
	}
};

export default {
	ControllerApiRest,
	ControllerGraphql // get cateroires graphql
};
