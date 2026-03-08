import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import type { books } from "../types/books";
import { BiShow } from "react-icons/bi";
import BookModal from "./BookModal";
import { useState } from "react";

const BookTable = ({ books }: { books: books[] }) => {
    const [show, setShow] = useState(false);
    return (
        <table className="border-separate border-spacing-2 w-full">
            <thead>
                <tr>
                    <th className="border border-slate-600 rounded-md">No</th>
                    <th className="border border-slate-600 rounded-md">
                        Title
                    </th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">
                        Author
                    </th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">
                        Publish Year
                    </th>
                    <th className="border border-slate-600 rounded-md">
                        Operations
                    </th>
                </tr>
            </thead>
            <tbody>
                {books.map((book: books, index) => (
                    <tr key={book._id} className="h-8">
                        <td className="border border-slate-700 rounded-md text-center">
                            {index + 1}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center">
                            {book.title}
                        </td>
                        <td className="border border-slate-700 rounded-md max-md:hidden text-center">
                            {book.author}
                        </td>
                        <td className="border border-slate-700 rounded-md max-md:hidden text-center">
                            {book.year}
                        </td>
                        <td className="border border-slate-700 rounded-md text-center">
                            <div className="flex justify-center gap-x-4">
                                <BiShow
                                    className="text-2xl text-blue-800 cursor-pointer"
                                    onClick={() => setShow(true)}
                                />
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className="text-2xl text-green-800" />
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className="text-2xl text-red-600" />
                                </Link>
                            </div>
                        </td>
                        {show && (
                            <BookModal
                                book={book}
                                onClose={() => setShow(false)}
                            />
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BookTable;
