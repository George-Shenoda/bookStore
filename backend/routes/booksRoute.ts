import express from "express";
import { Book } from "../model/bookModel.ts";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { title, author, year } = req.body;
        if (!title || !author || !year) {
            return res
                .status(400)
                .send({
                    message: "Send all required fields: title, author, year",
                });
        }
        const newBook = {
            title,
            author,
            year,
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: (error as Error).message });
    }
});

router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: (error as Error).message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: (error as Error).message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, year } = req.body;
        if (!title || !author || !year) {
            return res
                .status(400)
                .send({ message: "Send all required fields: title, author, year" });
        }
        const book = await Book.findByIdAndUpdate(id, {title, author, year});
        if (!book) {
            return res
                .status(404)
                .send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: (error as Error).message });
    }
});

router.delete("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res
                .status(404)
                .send({ message: "Book not found" });
        }
        return res.status(200).send({ message: "Book deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: (error as Error).message });
    }
});

export default router;