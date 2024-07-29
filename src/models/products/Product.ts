import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import ProductCategory from "./ProductCategory";
import ProductSubcategory from "./ProductSubcategory";

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
		name: "active",
		type: "bit"
	})
	public isActive: boolean;

	@OneToOne(() => ProductCategory)
	@JoinColumn({
		name: "product_category_id",
		foreignKeyConstraintName: "fk_product_category_id",
		referencedColumnName: "id"
	})
	public category: ProductCategory;

	// TODO: Agregar product_subcategory_id
	@OneToOne(() => ProductSubcategory)
	@JoinColumn({
		name: "product_subcategory_id",
		foreignKeyConstraintName: "fk_product_subcategory_id",
		referencedColumnName: "id"
	})
	public subcategory: ProductSubcategory;
}