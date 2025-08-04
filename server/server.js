const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const witRoutes = require("./routes/wit");
app.use("/api/wit", witRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));
