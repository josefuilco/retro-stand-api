import { MigrationInterface, QueryRunner } from "typeorm";
import Sale from "../shared/infrastructure/persistence/entities/Sale.entity";
import SaleProductItem from "../shared/infrastructure/persistence/entities/SaleProductItem.entity";

export class InsertSalesAndSaleProductItem1722291005169 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const cashierOne = { id: 1 };
		const cashierTwo = { id: 2 };
		const crashBandicootProduct = { id: 1 };
		const kingdomHeartsProduct = { id: 9 };
		const dbzBT3Product = { id: 13 };
		const sales = [
			{
				id: "838489ef-b142-4b08-8c3e-4996a5c0d42d",
				recordDate: "2024-07-19 13:22",
				cashier: cashierOne,
				items: [
					{
						product: crashBandicootProduct,
						quantity: 1,
						sale: {}
					},
					{
						product: kingdomHeartsProduct,
						quantity: 1,
						sale: {}
					}
				]
			},
			{
				id: "2aefc720-db2e-4ff7-96f9-28203e304df3",
				recordDate: "2024-07-24 11:07",
				cashier: cashierTwo,
				items: [
					{
						product: dbzBT3Product,
						quantity: 2,
						sale: {}
					}
				]
			}
		];
		sales.forEach(sale => {
			sale.items.forEach(item => item.sale = sale);
		});
		const saleRepository = queryRunner.manager.getRepository(Sale);
		const productSaleItemRepository = queryRunner.manager.getRepository(SaleProductItem);
		await saleRepository.insert(sales);
		await productSaleItemRepository.insert(sales.map(({items}) => items).flat());
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public async down(queryRunner: QueryRunner): Promise<void> {}
}
