import { DataSource } from "typeorm";

const isDevelopment = true;

const PostgreSQLDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: isDevelopment,
	logging: true,
	entities: [],
	subscribers: [],
	migrations: [],
});

export default PostgreSQLDataSource;