import ApiEndpoint from "./shared/infrastructure/api/ApiEndpoint";
import authEndpoints from "./context/auth/infrastructure/api/auth.endpoint";
import inventoryEndpoints from "./context/inventory/infrastructure/api/inventory.endpoint";
import { Router } from "express";

const apiRouter = Router();

const endpoints: ApiEndpoint[] = [
	authEndpoints, inventoryEndpoints
];

endpoints.forEach(({ path, router }) => apiRouter.use(path, router));

export default apiRouter;