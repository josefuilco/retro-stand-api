import "reflect-metadata";

process.loadEnvFile(".env");

import { initPostgreSQLDataSource } from "./shared/infrastructure/persistence/typeorm.config";

initPostgreSQLDataSource();

import express from "express";
import apiEndpoints from "./api";

const app = express();

app.use(express.json({
	limit: "5mb"
}));
app.use(apiEndpoints);

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Listen on port ${port}`);
});
