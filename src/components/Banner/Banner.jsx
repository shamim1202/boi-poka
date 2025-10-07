import coverBook from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className=" bg-gray-100 rounded-2xl flex flex-col md:flex-row items-center justify-between md:gap-10 md:p-20 md:my-6">
      <div className="flex-1">
        <h1 className="font-newsreader md:text-6xl md:font-semibold text-[#1d1d1d] md:leading-16 md:mb-14">Books to freshen up your bookshelf</h1>
        <button className="btn btn-primary">View The List</button>
      </div>

      <div className="flex-1">
        <img className="w-xl rounded-xl" src={coverBook} alt="" />
      </div>
    </div>
  );
};

export default Banner;