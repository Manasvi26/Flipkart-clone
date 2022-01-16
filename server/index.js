// const express = require();
import express from "express"; //new way
import dotenv from "dotenv";

//components
import Connection from "./database/db.js"; //you need to write/define ".js"
import { DefaultData } from "./default.js";

const app = express();

const PORT = 8000;

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () =>
  console.log(`Server is successfully running on port ${PORT}`)
);

//default data to database
DefaultData();
