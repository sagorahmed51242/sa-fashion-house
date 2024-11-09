/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";

function StarRating({ rating }) {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <AiFillStar
                    key={index}
                    color={index < rating ? 'gold' : 'gray'}
                    size={24}
                />
            ))}
        </div>
    );
}

export default StarRating;