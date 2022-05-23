const express = require("express");
require('dotenv').config()
require("./database/db");

const productRoutes = require('./routes/products.routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', productRoutes)

app.listen(3000);
console.log("Server is running on port 3000");
