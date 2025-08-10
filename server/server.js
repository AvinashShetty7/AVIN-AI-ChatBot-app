const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const witRoutes = require("./routes/wit");
app.use("/api/wit", witRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
