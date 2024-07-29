import { MigrationInterface, QueryRunner } from "typeorm";
import Sale from "../entities/Sale.entity";

export class InsertSalesAndSaleProductItem1722291005169 implements MigrationInterface {

	// TODO: TERMINAR LA MIGRACIÓN
	public async up(queryRunner: QueryRunner): Promise<void> {
		const saleRepository = queryRunner.manager.getRepository(Sale);
		await saleRepository.insert([
			{
				id: "838489ef-b142-4b08-8c3e-4996a5c0d42d",
				recordDate: "2024-11-04",
				cashier: {
					id: 1
				}
			},
			{
				id: "2aefc720-db2e-4ff7-96f9-28203e304df3",
				recordDate: "2024-11-12",
				cashier: {
					id: 2
				}
			}
		]);


	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async down(queryRunner: QueryRunner): Promise<void> {
	}

}
