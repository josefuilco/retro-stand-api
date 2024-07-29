import { MigrationInterface, QueryRunner } from "typeorm";
import Cashier from "../entities/Cashier.entity";

export class Cashiers1722278685381 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		const cashierRepository = queryRunner.manager.getRepository(Cashier);
		const manuelCashier = cashierRepository.create({
			id: 1,
			firstName: "Manuel",
			lastName: "Rivera",
			dni: "85957895"
		});
		const joseCashier = cashierRepository.create({
			id: 2,
			firstName: "Jose",
			lastName: "Fuilco",
			dni: "85958521"
		});
		await cashierRepository.insert([manuelCashier, joseCashier]);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async down(_queryRunner: QueryRunner): Promise<void> {
	}

}
