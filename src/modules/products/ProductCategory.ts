import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export default class ProductCategory {
	@PrimaryColumn({
		type: "tinyint"
	})
	public id: number;

	@Column({
		type: "varchar",
		length: 30
	})
	public name: string;

	@Column({
		type: "decimal",
		precision: 4,
		scale: 2
	})
	public unit_price: number;

	@Column({
		type: "bit"
	})
	public is_active: boolean = true;
}