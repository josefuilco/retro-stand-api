import ProductCategoryId from "./ProductCategoryId";
import ProductCategoryName from "./ProductCategoryName";

export default class ProductCategory {
	constructor(readonly id: ProductCategoryId, readonly name: ProductCategoryName) {}
}