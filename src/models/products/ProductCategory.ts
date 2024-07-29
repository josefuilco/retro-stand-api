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
		name: "active",
		type: "boolean",
		default: true
	})
	public isActive: boolean;
}