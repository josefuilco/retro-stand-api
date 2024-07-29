import { MigrationInterface, QueryRunner } from "typeorm";
export class PostRefactoring1722212457022 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO product_category (id, name, active) VALUES
			(1, 'Película', true),
			(2, 'Videojuego', true);`
		);
		await queryRunner.query(
			`INSERT INTO product_subcategory (id, name, unit_price, active, product_category_id) VALUES
			(1, 'DVD', 1.50, 1),
			(2, 'Blu-ray', 10.00, 1),
			(3, 'PS1', 1.50, 2),
			(4, 'PS2', 2.00, 2),
			(5, 'PS3', 5.00, 2),
			(6, 'XBOX 360', 5.00, 2),
			(7, 'WII', 5.00, 2);`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			""
		);
	}
}