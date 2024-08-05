import { Router } from "express";
import ApiEndpoint from "src/shared/infrastructure/api/ApiEndpoint";
import GetProductCategoriesUseCase from "../../application/GetProductCategoriesUseCase";
import PGProductCategoryRepository from "../persistence/PGProductCategoryRepository";
import ApiResponseBody from "../../../../shared/infrastructure/api/ApiResponseBody";
import ProductCategoryDTO from "./ProductCategoryDTO";

const router = Router();

router.get("/product-categories", async (_, res) => {
	const categories = await new GetProductCategoriesUseCase(new PGProductCategoryRepository()).invoke();
	const response = ApiResponseBody.Success({ 
		categories: categories.map(category => new ProductCategoryDTO(category))
	});
	res.json(response);
});

const apiEndpoint: ApiEndpoint = {
	path: "/inventory",
	router
};

export default apiEndpoint;