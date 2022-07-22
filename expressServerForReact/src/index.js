const express = require("express");
const app = express();
const path = require("path");
const reactDist = "../../tasklist/dist";

app.use(express.static(path.join(__dirname, reactDist)));

app.get("/no", (req, res) => {
	res.sendFile(path.join(__dirname, reactDist, "/index.html"));
});


app.listen(3330, () => {"Server ready on port 3330"});
