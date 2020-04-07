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
			await productModel.setUid('categorys', _uid.id);
			return _uid.id;
		} catch (error) {
			console.log(error);
		}
	}
};

export default {
	ControllerApiRest,
	ControllerGraphql // get cateroires graphql
};
