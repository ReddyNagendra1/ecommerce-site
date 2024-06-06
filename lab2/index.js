const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";

app.set("views", path.join(__dirname, "ecommerce"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
    response.render("index", { title: "Home" });
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});