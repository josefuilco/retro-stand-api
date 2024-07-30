import { MigrationInterface, QueryRunner } from "typeorm";
import Cashier from "../shared/infrastructure/persistence/entities/Cashier.entity";

export class Cashiers1722278685381 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager.getRepository(Cashier).insert([
			{
				id: 1,
				firstName: "Ausubel",
				lastName: "Velasquez",
				dni: "85900893"
			},
			{
				id: 2,
				firstName: "Jose",
				lastName: "Casma",
				dni: "75958521"
			}
		]);
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async down(_queryRunner: QueryRunner): Promise<void> {}
}
