import { DataSource } from "typeorm";
import Cashier from "../models/cashier/Cashier";
import Product from "../models/products/Product";
import ProductCategory from "../models/products/ProductCategory";
import ProductSubcategory from "../models/products/ProductSubcategory";
import Sale from "../models/sale/Sale";
import SaleProductItem from "../models/sale/SaleProductItem";
import { PostRefactoring1722212457022 } from "../migrations/1722212457022-PostRefactoring";

const isDevelopment = false;

const PostgreSQLDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: isDevelopment,
	logging: true,
	entities: [Cashier, Product, ProductCategory, ProductSubcategory, Sale, SaleProductItem],
	subscribers: [],
	migrations: [PostRefactoring1722212457022],
});

export default PostgreSQLDataSource;