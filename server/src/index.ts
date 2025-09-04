import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import { connectDB } from "../utils/db";
import {router} from "../route/router"

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const corsOptions = {
    origin: process.env.FRONTEND_URI, 
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization', 
    credentials: true
};

app.use(cors(corsOptions));

app.use(router);

const PORT = process.env.PORT || "";

app.listen(PORT, () => {
    console.log(`Authx is online on ${PORT}`);
    connectDB();
});
