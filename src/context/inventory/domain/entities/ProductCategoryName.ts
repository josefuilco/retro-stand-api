import InventoryError from "../InventoryError";

export default class ProductCategoryName {
	readonly value: string;
	constructor(value: string) {
		if (!value)
			throw new InventoryError("invalid.product_category_name");
		this.value = value;
	}
}