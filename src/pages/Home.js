import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
// import Dashboard from "./Dashboard/Dashboard";
// import  {AreaChart}  from "../components/Chart/Areachart";

const Home = () => {
  return (
    <div className=" w-full flex  bg-[#171f38]">
      <div className="w-1/4  border-r-[1px] border-r-[#333C57] ">
      <Sidebar />
      </div>
      <div className="w-full">
      {/* <Dashboard /> */}
      </div>
    {/* <AreaChart /> */}
    </div>
  );
};

export default Home;
