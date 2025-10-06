const Book = ({ books }) => {
  console.log(books);
  const { bookName, author, image, rating, category, tags } = books;

  return (
    <div className="md:w-96 md:p-4 rounded-2xl border border-gray-200">
      <figure className="md:h-52 bg-[#f3f3f3] rounded-xl flex items-center justify-center">
        <img className="h-42 object-center" src={image} alt="Shoes" />
      </figure>

      <div className="flex items-center md:gap-4 md:mt-4 text-[#23BE0A]">
        <p className="bg-[#17be0a0d] md:py-1 md:px-4 rounded-4xl">{tags[0]}</p>
        <p className="bg-[#17be0a0d] md:py-1 md:px-4 rounded-4xl">{tags[1]}</p>
      </div>

      <div>
        <div className="md:space-y-2 md:py-3 border-b-2 border-gray-200 border-dotted">
          <h2 className="md:text-2xl md:font-semibold">{bookName}</h2>
          <p className="text-xs md:text-sm font-medium">By : {author}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="">{category}</div>
          <div className="flex items-center gap-2">
            <p>{rating}</p>
            <button className="p-2 cursor-pointer">*</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
