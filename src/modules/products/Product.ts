import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export default class Product {
	@PrimaryColumn({
		type: "int"
	})
	public id: number;

	@Column({
		type: "int"
	})
	public stock: number;

	@Column({
		type: "bit"
	})
	public is_active: boolean;

	// TODO: Agregar product_category_id
	// TODO: Agregar product_subcategory_id
}