const getStoredBook = () => {
  const booksList = localStorage.getItem("readList");

  if (booksList) {
    const booksListData = JSON.parse(booksList);
    return booksListData;
  } else {
    return [];
  }
};

const addBookStore = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("This id already available");
  } else {
    storedBookData.push(id);
    const addData = JSON.stringify(storedBookData);
    localStorage.setItem("readList", addData);
  }
};

export { addBookStore, getStoredBook };
