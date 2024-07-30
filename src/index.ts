import "reflect-metadata";

process.loadEnvFile(".env");

import express from "express";
import PostgreSQLDataSource from "./shared/infrastructure/persistence/typeorm.config";
import ProductCategory from "./shared/infrastructure/persistence/entities/ProductCategory.entity";
import ProductSubcategory from "./shared/infrastructure/persistence/entities/ProductSubcategory.entity";
import Product from "./shared/infrastructure/persistence/entities/Product.entity";
import Sale from "./shared/infrastructure/persistence/entities/Sale.entity";

PostgreSQLDataSource.initialize()
	.then(() => console.info("Database connected!"))
	.catch(console.error);

const app = express();

app.get("/hello-world", async (_, res) => {
	const productCategories = await PostgreSQLDataSource.getRepository(ProductCategory).find();
	const productSubcategories = await PostgreSQLDataSource.getRepository(ProductSubcategory).find();
	const products = await PostgreSQLDataSource.getRepository(Product).find();
	const sales = await PostgreSQLDataSource.getRepository(Sale).find();
	res.json({ productCategories, productSubcategories, products, sales });
});

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Listen on port ${port}`);
});
