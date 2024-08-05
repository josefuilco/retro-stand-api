import InventoryError from "../InventoryError";
import ProductCategoryId from "./ProductCategoryId";
import ProductCategoryName from "./ProductCategoryName";

describe("ProductCategory from domain", () => {
	describe("ProductCategoryId", () => {
		it("should create an instance if the value is greater than 0", () => {
			expect(() => new ProductCategoryId(1)).not.toThrow();
		});
		it("should throw an inventory error if the value is negative or zero", () => {
			expect(() => new ProductCategoryId(0)).toThrow(InventoryError);
		});
	});
	describe("ProductCategoryName", () => {
		it("should create an instance if the value has content", () => {
			expect(() => new ProductCategoryName("Videojuego")).not.toThrow();
		});
		it("should throw an inventory error if the value is empty", () => {
			expect(() => new ProductCategoryName("")).toThrow(InventoryError);
		});
	});
});