export default class ApiResponseBody<D> {
	constructor(readonly message: string, readonly data: D) {}
	static Success<D>(data: D) {
		return new ApiResponseBody("success", data);
	}
}