import React from "react";
import "./Home.css";
import Adver from "../Advertisment/Adver";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import HomeCard from "./HomeCard/HomeCard";
import Medicine from "../../../Assets/MedicineCar.svg"
import Cart from "../../../Assets/CartCar.svg"
import Offer from "../../../Assets/OfferCar.svg"
import Contact from "../../../Assets/ContactCar.svg"



const Home = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <div>
      <div className="Advertisment">
        <Adver />
      </div>
      <div>
        {/* <Carousel responsive={responsive}>
          <div>
            <HomeCard title="Medicines" whereToGo="/" img={Medicine}/>
          </div>
          <div>
            <HomeCard title="Cart" whereToGo="/" img={Cart} />
          </div>
          <div>
            <HomeCard title="Offers" whereToGo="/offers" img={Offer} />
          </div>
          <div>
            <HomeCard title="Contact Us" whereToGo="/contact" img={Contact} />
          </div>
        </Carousel> */}
      </div>
    </div>
  );
};

export default Home;
