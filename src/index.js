const express = require("express");
const router = require("./router/prova.router");

const PORT = 8084;
const app = express();

app.use(express.json());
app.use("/api/v1/prova", router);

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
