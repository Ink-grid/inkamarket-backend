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
	setCategory(name, data) {
		return firestore.collection(name).add(data);
	},
	setItem(collection, data) {
		return firestore.collection(collection).add(data);
	},
	setUid(collection, uid, key) {
		return firestore
			.collection(collection)
			.doc(uid)
			.set({ [key]: uid }, { merge: true });
	},
	getItem(collection, doc) {
		return firestore
			.collection(collection)
			.doc(doc)
			.get();
	},

	getItemOrderbyLimit(
		collection: string,
		orderby: string,
		limit: number,
		_uid: string
	) {
		return (
			firestore
				.collection(collection)
				// .orderBy(orderby)
				.where(`${orderby}`, '==', `${_uid}`)
				.limit(limit)
		);
	},

	getItemOrderbyStartAfter(
		collection: string,
		limit: number,
		startAfter?: any,
		filter?: string,
		uid?: string
	) {
		return (
			firestore
				.collection(collection)
				//.where(`${filter}`, '==', `${uid}`)
				.orderBy('sku')
				.startAfter(startAfter)
				.limit(limit)
		);
	},

	getItemsbyUid(collection, campo, uid) {
		return firestore
			.collection(collection)
			.where(`${campo}`, '==', `${uid}`)
			.get();
	}
	/** Returns a user by its id */
};

export default productModel;
