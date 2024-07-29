import { MigrationInterface, QueryRunner } from "typeorm";
import Product from "../entities/Product.entity";

export class Products1722281006973 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		const productRepository = queryRunner.manager.getRepository(Product);
		await productRepository.insert([
			{
				id: 1,
				name: "Crash Bandicoot",
				active: true,
				stock: 10,
				category: {
					id: 2
				},
				subcategory: {
					id: 3
				}
			},
			{
				id: 2,
				name: "God of war II",
				active: true,
				stock: 12,
				category: {
					id: 2
				},
				subcategory: {
					id: 4
				}
			},
			{
				id: 3,
				name: "Super Smash Bross Brawl",
				active: true,
				stock: 8,
				category: {
					id: 2
				},
				subcategory: {
					id: 7
				}
			},
			{
				id: 4,
				name: "Transformers",
				active: true,
				stock: 10,
				category: {
					id: 1
				},
				subcategory: {
					id: 1
				}
			},
			{
				id: 5,
				name: "Shrek",
				active: true,
				stock: 10,
				category: {
					id: 1
				},
				subcategory: {
					id: 2
				}
			},
			{
				id: 6,
				name: "Naruto Ultimate Ninja Storm 3",
				active: true,
				stock: 10,
				category: {
					id: 2
				},
				subcategory: {
					id: 5
				}
			},
			{
				id: 7,
				name: "Naruto Ultimate Ninja Storm 2",
				active: true,
				stock: 10,
				category: {
					id: 2
				},
				subcategory: {
					id: 4
				}
			},
			{
				id: 8,
				name: "DBZ Saga de Cell",
				active: true,
				stock: 10,
				category: {
					id: 1
				},
				subcategory: {
					id: 1
				}
			},
			{
				id: 9,
				name: "Kingdom Hearts",
				active: true,
				stock: 10,
				category: {
					id: 2
				},
				subcategory: {
					id: 4
				}
			},
			{
				id: 10,
				name: "Transformers",
				active: true,
				stock: 10,
				category: {
					id: 1
				},
				subcategory: {
					id: 2
				}
			},
			{
				id: 11,
				name: "Batman: Arkham City",
				active: true,
				stock: 10,
				category: {
					id: 2
				},
				subcategory: {
					id: 5
				}
			},
			{
				id: 12,
				name: "God of War I",
				active: true,
				stock: 10,
				category: {
					id: 2
				},
				subcategory: {
					id: 4
				}
			},
			{
				id: 13,
				name: "Dragon Ball Budokai Tenkaichi 3",
				active: true,
				stock: 10,
				category: {
					id: 2
				},
				subcategory: {
					id: 3
				}
			},
			{
				id: 14,
				name: "Naruto Ultimate Ninja Storm 3",
				active: true,
				stock: 10,
				category: {
					id: 2
				},
				subcategory: {
					id: 5
				}
			},
			{
				id: 15,
				name: "Mario Party 9",
				active: true,
				stock: 10,
				category: {
					id: 2
				},
				subcategory: {
					id: 6
				}
			}
		]);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async down(queryRunner: QueryRunner): Promise<void> {
	} 

}
