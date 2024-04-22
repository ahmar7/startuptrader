import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sidebarConst } from '../Constant';

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(-1);
    const navigate = useNavigate();

    return (
        <div className='px-2 lg:px-4 mt-5 flex flex-col w-full justify-center'>
            {sidebarConst.map((item, index) => (
                <div key={index}
                    onClick={() => navigate(item.path)}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(-1)}
                    className={`flex items-center   space-x-4 px-3 py-3 rounded-md cursor-pointer 
                                hover:bg-[#1C2642] transition-colors duration-200
                                ${isHovered === index ? 'bg-[#1C2642]' : 'bg-transparent'}`}>
                    <item.icon className={`text-xl ${isHovered === index ? "text-[#439CFF]" : "text-[#CCCED5]"}`} />
                    <p className={`text-xl font-manrope transition-colors duration-200 ${isHovered === index ? "text-[#439CFF]" : "text-[#CCCED5]"} 
                                  hidden lg:block`}>
                        {item.name}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
