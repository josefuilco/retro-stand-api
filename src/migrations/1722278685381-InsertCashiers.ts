import { MigrationInterface, QueryRunner } from "typeorm";
import Cashier from "../shared/infrastructure/persistence/entities/Cashier.entity";

export class Cashiers1722278685381 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager.getRepository(Cashier).insert([
			{
				id: 1,
				firstName: "Ausubel",
				lastName: "Velasquez",
				dni: "85900893",
				//password = avelasquez123
				password: "$2a$12$i2jw.eJl9h665fC51kV2y.t401Mayf7L28ORKTplaqKNUW3b03x2e"
			},
			{
				id: 2,
				firstName: "Jose",
				lastName: "Casma",
				dni: "75958521",
				//password = jcasma123
				password: "$2a$12$x19kmL3KjHxARoh/R75JD.YnICVOTSTMPHXgsz8H1FffAz6Kp4s7W"
			}
		]);
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async down(_queryRunner: QueryRunner): Promise<void> {}
}
