import "reflect-metadata";

process.loadEnvFile(".env");

import express from "express";
import PostgreSQLDataSource from "./shared/infrastructure/persistence/typeorm.config";
import ProductCategory from "./shared/infrastructure/persistence/entities/ProductCategory.entity";
import ProductSubcategory from "./shared/infrastructure/persistence/entities/ProductSubcategory.entity";

PostgreSQLDataSource.initialize()
	.then(() => console.info("Database connected!"))
	.catch(console.error);

const app = express();

app.get("/hello-world", async (_, res) => {
	const categories = await PostgreSQLDataSource.manager.find(ProductCategory);
	const subcategories = await PostgreSQLDataSource.manager.find(ProductSubcategory);
	res.json({ categories, subcategories });
});

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Listen on port ${port}`);
});
