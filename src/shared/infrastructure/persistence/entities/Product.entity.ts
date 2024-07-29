import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import ProductCategory from "./ProductCategory.entity";
import ProductSubcategory from "./ProductSubcategory.entity";

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
	public active: boolean;

	@ManyToOne(() => ProductCategory, (subcategory) => subcategory)
	@JoinColumn({
		name: "product_category_id",
		referencedColumnName: "id"
	})
	public category: ProductCategory;

	@ManyToOne(() => ProductSubcategory, (subcategory) => subcategory)
	@JoinColumn({
		name: "product_subcategory_id",
		referencedColumnName: "id"
	})
	public subcategory: ProductSubcategory;
}