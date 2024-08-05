import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import Sale from "./Sale.entity";
import Product from "./Product.entity";

@Entity()
export default class SaleProductItem {
	@PrimaryGeneratedColumn()
	public id!: number;

	@Column()
	public quantity!: number;

	@ManyToOne(() => Product, { eager: true })
	@JoinColumn({
		name: "product_id",
		referencedColumnName: "id"
	})
	public product!: Product;

	@ManyToOne(() => Sale, (sale) => sale.items)
	@JoinColumn({
		name: "sale_id",
		referencedColumnName: "id"
	})
	public sale!: Sale;
}