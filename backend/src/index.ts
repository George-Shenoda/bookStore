import express from "express";
import { PORT, MONGODB_URI } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";

import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
}));

app.use("/books", booksRoute);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Mern Stack Tutorial");
});

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
