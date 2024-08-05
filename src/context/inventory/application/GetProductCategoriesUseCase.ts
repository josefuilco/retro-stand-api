import ProductCategory from "../domain/entities/ProductCategory";
import ProductCategoryRepository from "../domain/repositories/ProductCategoryRepository";

export default class GetProductCategoriesUseCase {
	constructor(private repository: ProductCategoryRepository) {}
	invoke(): Promise<ProductCategory[]> {
		return this.repository.getCategories();
	}
}