/** @format */
import status from 'http-status';
import has from 'has-keys';
import productModel from '@models/productModels';

export default {
	async getCategoryALl(req, res) {
		try {
			let response = await productModel.getCategory('categorys').get();
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
