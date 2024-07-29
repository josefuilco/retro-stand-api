import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export default class ProductCategory {
	@PrimaryColumn({
		type: "smallint"
	})
	public id: number;

	@Column({
		type: "varchar",
		length: 30
	})
	public name: string;

	@Column({
		type: "boolean",
		default: true
	})
	public active: boolean;
}