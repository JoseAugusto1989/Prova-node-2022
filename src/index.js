const { application } = require("express");
const express = require("express");
const product = require("./router/product.router");
const ordered = require("./router/ordered.router")
const customer = require("./router/customer.router")

const PORT = 8084;
const app = express();

app.use(express.json());
app.use("/api/v1/product", product);
app.use("/api/v1/ordered", ordered);
app.use("/api/v1/customer", customer)

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
