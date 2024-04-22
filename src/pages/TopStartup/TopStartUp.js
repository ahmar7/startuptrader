import React from 'react'
import DashboardLayout from '../../layout/DashboardLayout/DashboardLayout'
import DownColorIcon from '../../components/Icons/DownColorIcon'
import { SearchIcon } from '../../components/Icons/SearchIcon'
import StarIcon from '../../components/Icons/StarIcon'
import UpValueIcon from '../../components/Icons/UpValueIcon'
import { AreaChart } from '../../components/Chart/Areachart'
import DownIcon from '../../components/Icons/DownIcon'
import UnfoldMoreIcon from '../../components/Icons/UnfoldMoreIcon'

const TopStartUp = () => {
  return (
    <DashboardLayout>
      <div className='p-5 h-screen font-manrope'>
        <p className='text-white text-lg font-bold'>Browse Startups</p>
        <div className='flex justify-between mt-6 flex-wrap'>
          <div className='flex items-center border border-[#4C546C] rounded-full w-full lg:w-96 p-1 my-2'>
            <SearchIcon />
            <input type='text' placeholder='Search by company name or keywords'
              className='bg-transparent placeholder:text-[#CCCED5] placeholder:pl-3 focus:outline-none w-full text-sm'
            />
          </div>
          <div className='flex gap-2 items-center my-2'>
            <p className='text-[#637381] text-sm font-semibold'>Sort by:</p>
            <p className='text-[#0062FF] text-sm font-bold '>Popular</p>
            <DownColorIcon />
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className="min-w-full mt-8">
            <thead>
              <tr>
                <th className="text-[#CCCED5] text-sm"> # </th>
                <th className="text-[#CCCED5] text-sm text-left pl-3"> Name </th>
                <th className="text-[#CCCED5] text-sm">
                  <div className='flex items-center gap-2'>
                    Industry <UnfoldMoreIcon />
                  </div>
                </th>
                <th className="text-[#CCCED5] text-sm">
                  <div className='flex items-center gap-2'>
                    Total Value <UnfoldMoreIcon />
                  </div>
                </th>
                <th className="text-[#CCCED5] text-sm">
                  <div className='flex items-center gap-2'>
                    Stock price <UnfoldMoreIcon />
                  </div>
                </th>
                <th className="text-[#CCCED5] text-sm text-left"> Price chart </th>
                <th className="text-[#CCCED5] text-sm">
                  <div className='flex items-center gap-2'>
                    Change <DownIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, i) => (
                <tr key={i} className='border-b border-[#333C57]'>
                  <td className='text-white text-sm'>{i + 1}</td>
                  <td>
                    <div className='flex items-center py-5 gap-2'>
                      <img src={`/images/c${i}.png`} alt='' className='w-6 h-6 rounded-full' />
                      <p className='text-white text-sm'>Company name</p>
                    </div>
                  </td>
                  <td className='text-white text-sm'>Industry type</td>
                  <td className='text-white text-sm'>$23,447.64</td>
                  <td className='text-white text-sm'>$23,447.64</td>
                  <td><AreaChart height={28} width={100} color1={'#0F9663'} color2={'#0F9663'} /></td>
                  <td>
                    <div className='flex items-center'>
                      <UpValueIcon />
                      <p className='text-[#3DCC43] pl-1 text-sm'>2.56%</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TopStartUp
