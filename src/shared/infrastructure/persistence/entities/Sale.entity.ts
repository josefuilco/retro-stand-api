import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from "typeorm";
import SaleProductItem from "./SaleProductItem.entity";
import Cashier from "./Cashier.entity";

@Entity()
export default class Sale {
	@PrimaryColumn({
		type: "varchar",
		length: 36
	})
	public id: string;

	@Column({
		type: "date"
	})
	public recordDate: Date;

	@OneToMany(() => SaleProductItem, (saleProductItem) => saleProductItem.sale)
	public products: SaleProductItem[];

	@ManyToOne(() => Cashier, (cashier) => cashier)
	public cashier: Cashier;
}