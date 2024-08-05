import { DataSource } from "typeorm";
import SnakeCaseStrategy from "./SnakeCaseStrategy";

const isDevelopment = process.env.NODE_ENV === "development";
const PostgreSQLDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: isDevelopment,
	logging: isDevelopment,
	namingStrategy: new SnakeCaseStrategy(),
	entities: ["src/shared/infrastructure/persistence/entities/**/**.entity.ts"],
	migrations: ["src/migrations/**/*.ts"]
});

export function initPostgreSQLDataSource() {
	PostgreSQLDataSource.initialize()
		.then(() => console.info("Database connected!"))
		.catch(console.error);
}

export default PostgreSQLDataSource;