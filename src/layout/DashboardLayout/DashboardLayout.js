import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import NabarResponsive from '../../components/Navbar/NabarResponsive';

const DashboardLayout = ({ children }) => {
  return (
    <>
    <NabarResponsive />
 
      <div className="flex bg-[#171f38] w-full overflow-hidden">
        <div className="border-r-[1px] md:block hidden border-r-[#333C57]  ">
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
