import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import Product from "../products/Product";
import Sale from "./Sale";

@Entity()
export default class SaleProductItem {
	@PrimaryGeneratedColumn({
	})
	public id: number;

	@Column()
	public quantity: number;

	@ManyToOne(() => Sale, (sale) => sale)
	public sale: Sale;

	@OneToOne(() => Product)
	@JoinColumn({
		name: "product_id",
		foreignKeyConstraintName: "fk_product_id",
		referencedColumnName: "id"
	})
	public product: Product;
}