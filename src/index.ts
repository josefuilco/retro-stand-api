import "reflect-metadata";
import express from "express";
import PostgreSQLDataSource from "./data-source/data-source";
import ProductCategory from "./models/products/ProductCategory";
import ProductSubcategory from "./models/products/ProductSubcategory";

PostgreSQLDataSource.initialize()
	.then(console.info)
	.catch(console.error);

const app = express();

app.get("/hello-world/:name", async (req, res) => {
	const categoryList = await PostgreSQLDataSource.manager.find(ProductCategory);
	const subcategoryList = await PostgreSQLDataSource.manager.find(ProductSubcategory);
	res.json({ categoryList, subcategoryList });
});

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Listen on port ${port}`);
});
