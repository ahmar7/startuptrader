import React, { useState } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import { sidebarConst } from '../Constant';

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(-1);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='px-2 lg:px-4  mt-5 flex flex-col lg:w-60 justify-center'>
            {sidebarConst.map((item, index) => {
              
                return(
                <div key={index}
                    onClick={() => navigate(item.path)}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(-1)}
                    className={`flex items-center   space-x-4 px-3 py-3 rounded-md cursor-pointer 
                                hover:bg-[#1C2642] transition-colors duration-200
                                ${((isHovered === index) || (location.pathname === item.path ))? 'bg-[#1C2642]' : 'bg-transparent'}`}>
                    <item.icon isHovered={((isHovered === index) || (location.pathname === item.path ))} className={`text-xl ${((isHovered === index) || (location.pathname === item.path )) ? "text-[#439CFF]" : "text-[#CCCED5]"}`} />
                    <p className={`text-lg font-manrope transition-colors duration-200 ${((isHovered === index) || (location.pathname === item.path )) ? "text-[#439CFF]" : "text-[#CCCED5]"} 
                                  hidden lg:block`}>
                        {item.name}
                    </p>
                </div>
            )})}
        </div>
    );
}

export default Sidebar;
