import Book from "../Book/Book";

const Books = ({ allBooks }) => {
  console.log(allBooks);
  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl font-semibold my-3 md:my-10">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {allBooks.map((books) => (
          <Book key={books.bookId} books={books}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
