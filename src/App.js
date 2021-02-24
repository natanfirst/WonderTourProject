import React from "react";
import "./App.css";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Discoverbox from "./components/Discoverbox";
import Servicesbox from "./components/Servicesbox";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="Container">
        <Header />
        <Banner />
        <div className="All">
          <div className="Cards">
            <Card />
          </div>
          <h2 ClassName="Other">other Tours</h2>
          <div ClassName="Discover">
            <Discoverbox />
          </div>
          <h3 ClassName="OurTitle">Our Services</h3>
          <div ClassName="Services">
            <Servicesbox />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
