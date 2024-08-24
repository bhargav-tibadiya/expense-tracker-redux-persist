import Navbar from "../Components/Navbar";
import Tracker from "../Components/Tracker";
import "./Home.scss";
import Record from "./Record";

const Home = () => {
  return (
    <div className="app_container">
      <Navbar />
      <Tracker />
      <Record />
    </div>
  );
};

export default Home;
