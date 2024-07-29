import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import ProductCategory from "./ProductCategory";

@Entity()
export default class ProductSubcategory {
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
		name: "unit_price",
		type: "decimal",
		precision: 4,
		scale: 2
	})
	public unitPrice: number;

	@Column({
		name: "active",
		type: "boolean",
		default: true
	})
	public isActive: boolean;

	@OneToOne(() => ProductCategory)
	@JoinColumn({
		name: "product_category_id",
		foreignKeyConstraintName: "fk_product_category_id",
		referencedColumnName: "id"
	})
	public category: ProductCategory;
}