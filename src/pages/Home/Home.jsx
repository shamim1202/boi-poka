import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";

const Home = () => {

  const allBooks = useLoaderData()

  return (
    <div>
      <Banner></Banner>
      <Books allBooks={allBooks}></Books>
    </div>
  );
};

export default Home;