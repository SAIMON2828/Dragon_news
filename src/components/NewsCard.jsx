import { FaEye, FaStar } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
    } = news;

    const formattedDate = new Date(author.published_date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <div className="card bg-base-100 shadow-md">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-base-200 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-sm">{author.name}</h4>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                <div className="flex gap-3 text-lg text-gray-600">
                    <BsBookmark className="cursor-pointer hover:text-primary" />
                    <BsShare className="cursor-pointer hover:text-primary" />
                </div>
            </div>

            {/* Body */}
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold leading-snug">
                    {title}
                </h2>

                <figure className="my-3">
                    <img
                        src={thumbnail_url}
                        alt={title}
                        className="rounded-md w-full object-cover"
                    />
                </figure>

                <p className="text-sm text-gray-600">
                    {details.length > 220
                        ? details.slice(0, 220) + "..."
                        : details}
                </p>

                <Link to={`/news-details/${id}`} className="text-secondary font-semibold text-sm mt-1 w-fit">
                    Read More
                </Link>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-base-200">
                <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(rating.number)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="ml-1 text-sm text-gray-700">
                        {rating.number}.0
                    </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
