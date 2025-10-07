import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addAndSetToDb";
import MyReadBooks from "../MyReadBooks/MyReadBooks";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedAllBooks = getStoredBook();
    const convertBooks = storedAllBooks.map((id) => parseInt(id));
    const myReadList = allBooks.filter((book) =>
      convertBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  return (
    <div>
      <h1>This is read list - {readList.length}</h1>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read</h2>

          {readList.map((list) => (
            <MyReadBooks key={list.bookId} list={list}></MyReadBooks>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>my wish list books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
