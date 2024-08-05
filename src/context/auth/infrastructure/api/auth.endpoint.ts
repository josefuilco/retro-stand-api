import { Router } from "express";
import ApiEndpoint from "src/shared/infrastructure/api/ApiEndpoint";

const router = Router();

router.get("/login", (req, res) => {
	res.json({
		message: "success"
	});
});

const apiEndpoint: ApiEndpoint = {
	path: "/auth",
	router
};

export default apiEndpoint;