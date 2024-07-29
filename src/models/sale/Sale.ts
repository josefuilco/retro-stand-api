import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne, OneToMany } from "typeorm";
import Cashier from "../cashier/Cashier";
import SaleProductItem from "./SaleProductItem";

@Entity()
export default class Sale {
	@PrimaryColumn({
		type: "varchar",
		length: 36
	})
	public id: string;

	@Column({
		name: "record_name",
		type: "date"
	})
	public recordDate: Date;

	@OneToMany(() => SaleProductItem, (saleProductItem) => saleProductItem)
	public saleProductItem: SaleProductItem[];

	@OneToOne(() => Cashier)
	@JoinColumn({
		name: "cashier_id",
		foreignKeyConstraintName: "fk_cashier_id",
		referencedColumnName: "id"
	})
	public cashier: Cashier;
}