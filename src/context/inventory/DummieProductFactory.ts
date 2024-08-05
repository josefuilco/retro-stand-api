import ProductCategory from "./domain/entities/ProductCategory";
import ProductCategoryId from "./domain/entities/ProductCategoryId";
import ProductCategoryName from "./domain/entities/ProductCategoryName";

export default class DummieProductFactory {
	static NewProductCategoryFromDomainA() {
		return DummieProductFactory.NewProductCategoryFromDomain(1, "Videojuego");
	}
	private static NewProductCategoryFromDomain(id: number, name: string) {
		return new ProductCategory(new ProductCategoryId(id), new ProductCategoryName(name));
	}
}