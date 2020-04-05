/** @format */

import { firestore } from './database';
const productModel = {
	/** Returns an array of users */
	getCategory(name) {
		return firestore.collection(name);
	}
	/** Returns a user by its id */
};

export default productModel;
