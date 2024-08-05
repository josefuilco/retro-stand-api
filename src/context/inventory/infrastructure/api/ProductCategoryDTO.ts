import ProductCategory from "../../domain/entities/ProductCategory";

export default class ProductCategoryDTO {
	readonly id: number;
	readonly name: string;
	constructor(productCategory: ProductCategory) {
		this.id = productCategory.id.value;
		this.name = productCategory.name.value;
	}
}