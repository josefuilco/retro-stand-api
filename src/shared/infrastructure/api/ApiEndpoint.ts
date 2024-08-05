import { Router } from "express";

type ApiEndpoint = {
	path: string;
	router: Router;
};

export default ApiEndpoint;