import { MigrationInterface, QueryRunner } from "typeorm";
import ProductCategory from "../shared/infrastructure/persistence/entities/ProductCategory.entity";
import ProductSubcategory from "../shared/infrastructure/persistence/entities/ProductSubcategory.entity";

export class InsertCategoriesAndSubcategories1722219940147 implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		const categories = [
			{
				id: 1,
				name: "Película",
				subcategories: [
					{
						id: 1, name: "DVD", unitPrice: 1.50, category: {}
					},
					{
						id: 2, name: "Blu-ray", unitPrice: 10.00, category: {}
					}
				]
			},
			{
				id: 2,
				name: "Videojuego",
				subcategories: [
					{
						id: 3, name: "PS1", unitPrice: 1.50, category: {}
					},
					{
						id: 4, name: "PS2", unitPrice: 2.00, category: {}
					},
					{
						id: 5, name: "PS3", unitPrice: 5.00, category: {}
					},
					{
						id: 6, name: "Xbox 360", unitPrice: 5.00, category: {}
					},
					{
						id: 7, name: "Wii", unitPrice: 5.00, category: {}
					}
				]
			}
		];
		categories.forEach((category) => {
			category.subcategories.forEach(subcategory => subcategory.category = category);
		});
		const productCategoryRepository = queryRunner.manager.getRepository(ProductCategory);
		const productSubcategoryRepository = queryRunner.manager.getRepository(ProductSubcategory);
		await productCategoryRepository.insert(categories);
		await productSubcategoryRepository.insert(categories.map(({subcategories}) => subcategories).flat());
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async down(_: QueryRunner): Promise<void> {}
}
