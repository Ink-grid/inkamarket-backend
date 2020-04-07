/** @format */
// for model inkmaerte backend

import { firestore } from './database';
const productModel = {
	/** Returns an array of users */
	getCategories(name) {
		return firestore.collection(name).get();
	},
	getProducts(name) {
		return firestore.collection(name).get();
	},
	setCategory(name, date) {
		return firestore.collection(name).add(date);
	},
	setUid(collection, uid) {
		return firestore
			.collection(collection)
			.doc(uid)
			.set({ _uid: uid }, { merge: true });
	}
	/** Returns a user by its id */
};

export default productModel;
