import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import ProductCategory from "./ProductCategory.entity";

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
		type: "decimal",
		precision: 4,
		scale: 2
	})
	public unitPrice: number;

	@Column({
		type: "boolean",
		default: true
	})
	public active: boolean;

	@ManyToOne(() => ProductCategory, (category) => category)
	@JoinColumn({
		name: "product_category_id",
		referencedColumnName: "id"
	})
	public category: ProductCategory;
}
// UNIQUE