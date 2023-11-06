import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Productivity from "./component/Productivity/Productivity";


function App() {
  return (
    <div className=" ">
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
        <div>
          <div className="overflow-hidden">
            <div className="relative">
              <img
                className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image"
                width={4377}
                src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
                alt=""
              />
            </div>
            <div className="hero-section px-3 ">
              <Hero />
            </div>
            <div
              id="productivity"
              className="home-campaign-productivity px-4 pt-8 overflow-hidden"
            >
              <Productivity />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
