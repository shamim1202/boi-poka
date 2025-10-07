
const MyReadBooks = ({list}) => {
  const { bookId, bookName, author, image, rating, category, tags, publisher, totalPages } = list;
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-8 my-4 border border-gray-200 rounded-xl md:p-4">
        <figure className="bg-[#f3f3f3] md:py-6 md:px-20 rounded-xl">
          <img 
            className="h-52 "
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="">
          <h2 className="">{bookName}</h2>
          <p>Click the button to watch on Jetflix app.</p>

          <div className="flex items-center gap-8">
            <p>Publisher : {publisher}</p>
            <p>Pages : {totalPages}</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="btn btn-primary">{category}</button>
            <button className="btn btn-secondary">{rating}</button>
            <button className="btn btn-success">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReadBooks;
