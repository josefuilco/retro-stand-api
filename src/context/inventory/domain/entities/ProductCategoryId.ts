import InventoryError from "../InventoryError";

export default class ProductCategoryId {
	readonly value: number;
	constructor(value: number) {
		if (value <= 0)
			throw new InventoryError("invalid.product_category_id");
		this.value = value;
	}
}