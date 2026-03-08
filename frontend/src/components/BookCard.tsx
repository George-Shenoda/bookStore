import type { books } from "../types/books";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiShow, BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import BookModal from "./BookModal";

const BookCard = ({ books }: { books: books[] }) => {
    const [show, setShow] = useState(false)
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {books.map((book: books) => (
                <div
                    key={book._id}
                    className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
                >
                    <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
                        {book.year}
                    </h2>
                    <h4 className="my-2 text-gray-500">{book._id}</h4>
                    <div className="flex justify-start items-center gap-x-2">
                        <PiBookOpenTextLight className="text-2xl text-red-300" />
                        <h2 className="my-1">{book.title}</h2>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <BiUserCircle className="text-2xl text-red-300" />
                        <h2 className="my-1">{book.author}</h2>
                    </div>
                    <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                        <BiShow className="text-3xl text-blue-800 hover:text-black cursor-pointer" onClick={() => setShow(true)}/>
                        <Link to={`/books/details/${book._id}`}>
                            <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                            <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                            <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                        </Link>
                    </div>
                    {
                        show && (
                            <BookModal book={book} onClose={() => setShow(false)}/>
                        )
                    }
                </div>
            ))}
        </div>
    );
};

export default BookCard;
