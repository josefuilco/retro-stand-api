import ProductCategory from "../domain/entities/ProductCategory";
import ProductCategoryRepository from "../domain/repositories/ProductCategoryRepository";
import DummieProductFactory from "../DummieProductFactory";
import GetProductCategoriesUseCase from "./GetProductCategoriesUseCase";

class ProductCategoryStubRepository implements ProductCategoryRepository {
	async getCategories(): Promise<ProductCategory[]> {
		return [DummieProductFactory.NewProductCategoryFromDomainA()];
	}
}

describe("GetProductCategoriesUseCase", () => {
	it("should return product category list", async () => {
		const productCategoryRepository = new ProductCategoryStubRepository();
		const productCategories = await new GetProductCategoriesUseCase(productCategoryRepository).invoke();
		expect(productCategories.length).toBeGreaterThan(0);
	});
});