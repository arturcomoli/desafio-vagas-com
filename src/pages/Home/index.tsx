import Header from "../../components/Header";
import Form from "./Form";

const Home = ({}) => {
  return (
    <div
      className="bg-grey-bg rounded-lg my-[20px] mx-auto overflow-hidden
    w-10/12 max-w-lg "
    >
      <Header />
      <Form />
    </div>
  );
};
export default Home;
