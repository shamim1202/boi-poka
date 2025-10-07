import { useLoaderData, useParams } from "react-router";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { addBookStore } from "../../utilities/addAndSetToDb";

const MySwal = withReactContent(Swal)

const BookDetails = () => {
  const { id } = useParams();
  const detailsId = parseInt(id);
  const allBooks = useLoaderData();
  const details = allBooks.find((book) => book.bookId === detailsId);
  console.log(details);
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
  } = details;

  const handleMarkRead = (id) => {
    addBookStore(id);

    Swal.fire({
      title: "Good job!",
      text: "Mark as Read Successfully Done",
      icon: "success",
    });
  };

  return (
    <div>
      <h1>Dynamic book details are goes to here</h1>

      <div className="flex flex-col md:flex-row items-center md:gap-14">
        <figure className="flex flex-1 bg-[#f3f3f3] items-center justify-center rounded-2xl">
          <img className="md:h-[500px] md:py-20" src={image} alt="Album" />
        </figure>

        <div className="flex-1">
          <div className="border-b border-gray-200 md:space-y-2 md:py-4">
            <h2 className="font-newsreader md:text-4xl font-semibold">
              {bookName}
            </h2>
            <p className="text-sm md:text-base font-medium text-[#131313cc]">
              By : {author}
            </p>
          </div>

          <p className="text-sm md:text-base font-medium border-b border-gray-200 md:py-4">
            {category}
          </p>

          <div className="border-b border-gray-200 md:space-y-2 md:py-4 text-xs md:text-sm">
            <p>
              <span className="font-semibold">Review :</span> {review}
            </p>
            <div className="flex items-center md:gap-2">
              <p className="font-semibold">Tag</p>
              <div>
                {tags.map((tag) => (
                  <button className="bg-[#1be90c17] text-[#23BE0A] md:py-1 md:px-4 rounded-2xl md:mr-2">
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p>
              Number of Pages: <span>{totalPages}</span>
            </p>
          </div>

          <div className="flex items-center md:gap-4">
            <button
              onClick={() => handleMarkRead(id)}
              className="btn btn-primary"
            >
              Mark As Read
            </button>
            <button className="btn btn-secondary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
