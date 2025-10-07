import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addAndSetToDb";
import MyReadBooks from "../MyReadBooks/MyReadBooks";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sortView, setSortView] = useState("");
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedAllBooks = getStoredBook();
    const convertBooks = storedAllBooks.map((id) => parseInt(id));
    const myReadList = allBooks.filter((book) =>
      convertBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSortView = (type) => {
    setSortView(type);
    if(type === "Pages") {
      const sortByPage = [...readList].sort((a,b)=> b.totalPages - a.totalPages)
      setReadList(sortByPage)
    }
    if(type === "Ratings") {
      const sortByPage = [...readList].sort((a,b)=> b.rating - a.rating)
      setReadList(sortByPage)
    }
  };

  return (
    <div>
      <h1>This is read list - {readList.length}</h1>

      <div className="flex items-center justify-center">
        <details className="dropdown">
          <summary className="btn m-1">Sort By : {sortView?sortView:<IoMdArrowDropdown />}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSortView("Pages")}>No. Of Pages</a>
            </li>
            <li>
              <a onClick={() => handleSortView("Ratings")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read</h2>
          <div className="">
            {readList.map((list) => (
              <MyReadBooks key={list.bookId} list={list}></MyReadBooks>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>my wish list books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
