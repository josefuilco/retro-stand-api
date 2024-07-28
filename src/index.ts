import express from "express";

const app = express();

app.get("/hello-world/:name", (req, res) => {
	res.send(`<h1>${req.params.name}</h1>`);
});

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Listen on port ${port}`);
});
