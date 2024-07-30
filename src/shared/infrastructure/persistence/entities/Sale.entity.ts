import { Entity, PrimaryColumn, ManyToOne, OneToMany, CreateDateColumn } from "typeorm";
import SaleProductItem from "./SaleProductItem.entity";
import Cashier from "./Cashier.entity";

@Entity()
export default class Sale {
	@PrimaryColumn({
		type: "varchar",
		length: 36
	})
	public id: string;

	@CreateDateColumn()
	public recordDate: Date;

	@OneToMany(() => SaleProductItem, (item) => item.sale, { eager: true })
	public items: SaleProductItem[];

	@ManyToOne(() => Cashier, (cashier) => cashier, { eager: true })
	public cashier: Cashier;
}