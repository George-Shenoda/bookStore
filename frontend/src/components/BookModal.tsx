import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import type { books } from "../types/books";

const BookModal = ({ book, onClose }: { book: books; onClose: () => void }) => {
    return (
        <div
            className="fixed bg-black/60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-150 max-w-full h-100 bg-white rounded-xl p-4 flex flex-col relative"
            >
                <AiOutlineClose
                    className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                    onClick={onClose}
                />
                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
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
                <p className="mt-4">HOW LOW MOW TOW</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, est illo necessitatibus corporis a esse voluptas, odit
                    itaque hic explicabo facilis corrupti possimus, porro error
                    voluptate modi? Fugiat, facilis quia?
                </p>
            </div>
        </div>
    );
};

export default BookModal;
