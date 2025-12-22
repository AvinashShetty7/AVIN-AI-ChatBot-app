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




// require('dotenv').config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const witRoutes = require("./routes/wit");


// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());
// // app.use("/api/wit", witRoutes);
// app.post("/api/register", (req, res)=>{
//     const {Name,Email,pass}=req.body.message;
//     console.log(`${Name}`);
//     res.  
// })

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
