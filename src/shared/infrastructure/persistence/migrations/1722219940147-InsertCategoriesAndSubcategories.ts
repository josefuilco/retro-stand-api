import { MigrationInterface, QueryRunner } from "typeorm";
import ProductCategory from "../entities/ProductCategory.entity";
import ProductSubcategory from "../entities/ProductSubcategory.entity";

export class InsertCategoriesAndSubcategories1722219940147 implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		const productCategoryRepository = queryRunner.manager.getRepository(ProductCategory);
		const movieCategory = productCategoryRepository.create({
			id: 1,
			name: "Película",
			active: true
		});
		const videogameCategory = productCategoryRepository.create({
			id: 2,
			name: "Videojuego",
			active: true
		});
		await productCategoryRepository.insert([movieCategory, videogameCategory]);
		await queryRunner.manager.getRepository(ProductSubcategory).insert([
			{
				id: 1, name: "DVD", unitPrice: 1.50, active: true, category: movieCategory
			},
			{
				id: 2, name: "Blu-ray", unitPrice: 10.00, active: true, category: movieCategory
			},
			{
				id: 3, name: "PS1", unitPrice: 1.50, active: true, category: videogameCategory
			},
			{
				id: 4, name: "PS2", unitPrice: 2.00, active: true, category: videogameCategory
			},
			{
				id: 5, name: "PS3", unitPrice: 5.00, active: true, category: videogameCategory
			},
			{
				id: 6, name: "Xbox 360", unitPrice: 5.00, active: true, category: videogameCategory
			},
			{
				id: 7, name: "Wii", unitPrice: 5.00, active: true, category: videogameCategory
			}
		]);
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async down(_: QueryRunner): Promise<void> {}
}
