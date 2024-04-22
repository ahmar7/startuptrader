import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex bg-[#171f38] w-full overflow-hidden">
        <div className="border-r-[1px] border-r-[#333C57] w-32 lg:w-[20%] ">
          <Sidebar />
        </div>
        <div className="flex-grow overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
