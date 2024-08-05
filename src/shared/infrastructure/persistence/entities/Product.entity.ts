import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import ProductSubcategory from "./ProductSubcategory.entity";

@Entity()
export default class Product {
	@PrimaryColumn({
		type: "int"
	})
	public id!: number;

	@Column({
		type: "varchar",
		length: 50
	})
	public name!: string;

	@Column({
		type: "int"
	})
	public stock!: number;

	@Column({
		type: "boolean",
		default: true
	})
	public active!: boolean;

	@ManyToOne(() => ProductSubcategory, (subcategory) => subcategory, { eager: true })
	@JoinColumn({
		name: "product_subcategory_id",
		referencedColumnName: "id"
	})
	public subcategory!: ProductSubcategory;
}