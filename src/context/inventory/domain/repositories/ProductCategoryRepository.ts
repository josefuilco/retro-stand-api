import ProductCategory from "../entities/ProductCategory";

export default interface ProductCategoryRepository {
	getCategories(): Promise<ProductCategory[]>;
}