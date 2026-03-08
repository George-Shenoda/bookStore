import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BookTable from "../components/BookTable";
import BookCard from "../components/BookCard";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [showType, setShowType] = useState("table");

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/books")
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className="p-4">
            <div className="flex justify-center items-center gap-x-4">
                <button
                    onClick={() => setShowType("table")}
                    className="bg-sky-300 hover:bg-sky-600 text-white px-4 py-2 rounded-md"
                >
                    Table
                </button>
                <button
                    onClick={() => setShowType("card")}
                    className="bg-sky-300 hover:bg-sky-600 text-white px-4 py-2 rounded-md"
                >
                    Card
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Books List</h1>
                <Link to="/books/create">
                    <MdOutlineAddBox className="text-4xl text-sky-800" />
                </Link>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Spinner />
                </div>
            ) : showType === "table" ? (
                <BookTable books={books} />
            ) : (
                <BookCard books={books} />
            )}
        </div>
    );
};

export default Home;
