import Footer from "../../Shared/Footer";
import Package from "../Package";
import Landing from "./Landing";
import Video from "./Video";

const Home = () => {
    return (
        <div>
          <Landing />
          <h1 className="text-7xl text-center my-5">Our Packages</h1>
          <Package></Package>
          <Video></Video>
        
        </div>
    );
};

export default Home;