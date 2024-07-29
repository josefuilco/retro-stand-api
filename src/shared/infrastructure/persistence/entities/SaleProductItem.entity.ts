import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import Sale from "./Sale.entity";
import Product from "./Product.entity";

@Entity()
export default class SaleProductItem {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public quantity: number;

	@ManyToOne(() => Sale, (sale) => sale.products)
	@JoinColumn({
		name: "sale_id",
		referencedColumnName: "id"
	})
	public sale: Sale;

	@ManyToOne(() => Product)
	@JoinColumn({
		name: "product_id",
		referencedColumnName: "id"
	})
	public product: Product;
}