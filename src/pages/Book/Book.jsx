import { MdStarHalf } from "react-icons/md";
import { Link } from "react-router";

const Book = ({ books }) => {
  const { bookId, bookName, author, image, rating, category, tags } = books;

  return (
    <div className="md:w-96 md:p-4 rounded-2xl border border-gray-200">
      <Link to={`/book_details/${bookId}`}>
        <figure className="md:h-52 bg-[#f3f3f3] rounded-xl flex items-center justify-center">
          <img className="h-42 object-center" src={image} alt="Shoes" />
        </figure>
      </Link>

      <div className="flex items-center md:gap-2 md:mt-4 text-[#23BE0A]">
        {tags.map((tag) => (
          <button className="bg-[#1be90c17] md:py-1 md:px-4 rounded-2xl">
            {tag}
          </button>
        ))}
      </div>

      <div>
        <div className="md:space-y-2 md:py-3 border-b-2 border-gray-200 border-dotted">
          <h2 className="font-newsreader md:text-2xl md:font-semibold">
            {bookName}
          </h2>
          <p className="text-xs md:text-sm font-medium">By : {author}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="">{category}</div>
          <div className="flex items-center gap-2">
            <p>{rating}</p>
            <MdStarHalf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
