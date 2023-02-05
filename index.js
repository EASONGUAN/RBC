import express from "express";
import bodyParser from 'body-parser';
import stockRoutes from './Routes/stockRoute.js'
import { connectToDBServer } from "./Database/mongoUtil.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/stock', stockRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port: http://localhost:${PORT}`)
});
