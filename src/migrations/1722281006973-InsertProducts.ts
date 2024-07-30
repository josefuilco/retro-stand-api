import { MigrationInterface, QueryRunner } from "typeorm";
import Product from "../shared/infrastructure/persistence/entities/Product.entity";

export class Products1722281006973 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		const movieCategory = { id: 1 };
		const videogameCategory = { id: 2 };
		const dvdSubcategory = { id: 1 };
		const bluraySubcategory = { id: 2 };
		const ps1Subcategory = { id: 3 };
		const ps2Subcategory = { id: 4 };
		const ps3Subcategory = { id: 5 };
		const xbox360Subcategory = { id: 6 };
		const wiiSubcategory = { id: 7 };
		await queryRunner.manager.getRepository(Product).insert([
			{
				id: 1,
				name: "Crash Bandicoot",
				stock: 17,
				category: videogameCategory,
				subcategory: ps1Subcategory
			},
			{
				id: 2,
				name: "God of war II",
				stock: 12,
				category: videogameCategory,
				subcategory: ps2Subcategory
			},
			{
				id: 3,
				name: "Super Smash Bross Brawl",
				stock: 8,
				category: videogameCategory,
				subcategory: wiiSubcategory
			},
			{
				id: 4,
				name: "Transformers",
				stock: 10,
				category: movieCategory,
				subcategory: dvdSubcategory
			},
			{
				id: 5,
				name: "Shrek",
				stock: 8,
				category: movieCategory,
				subcategory: bluraySubcategory
			},
			{
				id: 6,
				name: "Naruto Shippuden Ultimate Ninja Storm 3",
				stock: 10,
				category: videogameCategory,
				subcategory: ps3Subcategory
			},
			{
				id: 7,
				name: "Naruto Shippuden Ultimate Ninja Storm 2",
				stock: 13,
				category: videogameCategory,
				subcategory: xbox360Subcategory
			},
			{
				id: 8,
				name: "DBZ Saga de Cell",
				stock: 13,
				category: movieCategory,
				subcategory: dvdSubcategory
			},
			{
				id: 9,
				name: "Kingdom Hearts",
				stock: 18,
				category: videogameCategory,
				subcategory: ps2Subcategory
			},
			{
				id: 10,
				name: "Transformers",
				stock: 7,
				category: movieCategory,
				subcategory: bluraySubcategory
			},
			{
				id: 11,
				name: "Batman: Arkham City",
				stock: 9,
				category: videogameCategory,
				subcategory: ps3Subcategory
			},
			{
				id: 12,
				name: "God of War I",
				stock: 14,
				category: videogameCategory,
				subcategory: ps2Subcategory
			},
			{
				id: 13,
				name: "Dragon Ball Z Budokai Tenkaichi 3",
				stock: 15,
				category: videogameCategory,
				subcategory: ps1Subcategory
			},
			{
				id: 14,
				name: "Naruto Ultimate Ninja Storm 3",
				stock: 11,
				category: videogameCategory,
				subcategory: ps3Subcategory
			},
			{
				id: 15,
				name: "Mario Party 9",
				stock: 25,
				category: videogameCategory,
				subcategory: wiiSubcategory
			}
		]);
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async down(queryRunner: QueryRunner): Promise<void> {} 
}
