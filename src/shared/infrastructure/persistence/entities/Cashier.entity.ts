import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export default class Cashier {
	@PrimaryColumn({
		type: "smallint"
	})
	public id: number;
	
	@Column({
		type: "varchar",
		length: 100
	})
	public firstName: string;
	
	@Column({
		type: "varchar",
		length: 100
	})
	public lastName: string;

	@Column({
		type: "varchar",
		unique: true,
		length: 8
	})
	public dni: string;
}