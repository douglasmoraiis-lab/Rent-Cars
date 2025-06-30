import React from "react";
import Bar from "../pages/features/home/bar";
import Capa from "../pages/features/home/capa";
import Location from "../pages/features/home/location";

const Home: React.FC = () => {
  return (
    <div className="p-8 h-[1200px] ">
      <Bar/>
      <Capa/>
      <Location/>
    </div>
    
  );
};

export default Home;
