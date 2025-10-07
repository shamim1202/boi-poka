
const MyReadBooks = ({list}) => {
  const { bookId, bookName, author, image, rating, category, tags } = list;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img 
            className="h-52"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReadBooks;
