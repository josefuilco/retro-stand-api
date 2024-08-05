import ProductCategoryDomain from "../../domain/entities/ProductCategory";
import ProductCategoryRepository from "../../domain/repositories/ProductCategoryRepository";
import ProductCategoryId from "../../domain/entities/ProductCategoryId";
import ProductCategoryName from "../../domain/entities/ProductCategoryName";
import PostgreSQLDataSource from "../../../../migration.config";
import ProductCategory from "../../../../shared/infrastructure/persistence/entities/ProductCategory.entity";

export default class PGProductCategoryRepository implements ProductCategoryRepository {
	async getCategories(): Promise<ProductCategoryDomain[]> {
		const categories = await PostgreSQLDataSource.getRepository(ProductCategory).find();
		return categories.map(({ id, name }) => new ProductCategoryDomain(
			new ProductCategoryId(id),
			new ProductCategoryName(name)
		));
	}
}