import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }: { destination?: string }) => {
    return (
        <Link
            to={destination}
            className="bg-sky-600 text-white px-4 py-1.5 w-fit rounded-lg hover:bg-sky-700"
        >
            <BsArrowLeft className="text-2xl inline-block" />
        </Link>
    );
};

export default BackButton;
