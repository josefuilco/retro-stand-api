import { DataSource } from "typeorm";
import SnakeCaseStrategy from "./SnakeCaseStrategy";

const isDevelopment = process.env.NODE_ENV === "development";
function getPersistencePath(path: string): string {
	return `src/shared/infrastructure/persistence${path}`;
}
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
	entities: [getPersistencePath("/entities/**/**.entity.ts")],
	migrations: [getPersistencePath("/migrations/**/*.ts")],
});

export default PostgreSQLDataSource;