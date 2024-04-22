import React from 'react'
import { DonutChart } from '../Chart/DonutChart'
const colors = [
    "#165CEE",
  "#B0FF72",
  "#74DEFF",

  "#9a6fb0",
  "#a53253",
  "#69b3a2",
];
const data = [
    {name:"FoodTech", value: 50},
    {name:"Healthcare", value: 25},
    {name:"Education", value: 25},
];

const IndustryFoucsCard = () => {
  return (
    <div className='bg-[#1C2642] flex-col flex mt-5 rounded-lg w-full '>
        <p className='text-[#FFFFFF] font-manrope font-bold px-5 pt-5 text-lg'>Industry focus</p>
        <div className='flex justify-center mt-10 items-center'>
        <DonutChart data={data} colors={colors} />
        </div>
        <div className='p-5 flex flex-col gap-3'>
        {data.map((v,i)=> <div style={{ borderColor: colors[i], borderLeftWidth: '4px', borderStyle: 'solid' }} className={`flex justify-between `}>
            <div className='pl-4'>
            <p className='font-manrope text-sm font-semibold text-[#FFFFFF]'>{v.name}</p>
            <p className='text-[#CCCED5] font-manrope font-normal text-[12px]'>2 assets</p>
            </div>
            <p className='font-manrope text-lg font-medium text-[#FFFFFF]'>{v.value}%</p>
        </div>)}
        <p className='text-[12px] text-[#CCCED5] font-manrope flex justify-center py-4 font-normal'>You only have 3 Industries  </p>
        </div>
       
        </div>
  )
}

export default IndustryFoucsCard