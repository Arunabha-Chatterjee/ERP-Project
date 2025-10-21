import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { PiKeyReturnBold } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
const Sidebar = () => {
  return (
      <div className='w-full h-full bg-[#0e1624] text-white'>

        <div className='h-[12%] pl-2 pt-3'>
          <div className='font-bold text-2xl text-gray-400 h-auto 
          hover:text-white  cursor-pointer font-mono'>RetailOne</div>
        </div>

        <div className='h-[87%] w-full flex flex-col justify-between'>

          <div className=' w-[96%] h-auto text-gray-400 pl-1
                        tracking-wide flex flex-col gap-2'>

            <div className='flex flex-row gap-2 items-center py-1.5 pl-2
                        hover:bg-[#1a222f] hover:text-white rounded-sm cursor-pointer'>
              <span className='text-lg'><RxDashboard /></span>
              <span className='text-lg'>Dashboard</span>
            </div>

            <div className='flex flex-row gap-2 items-center py-1.5 pl-1.5
                        hover:bg-[#1a222f] hover:text-white rounded-sm cursor-pointer'>
              <span className='text-2xl'><LiaFileInvoiceSolid /></span>
              <span className='text-lg'>POS</span>
            </div>

            <div className='flex flex-row gap-2 items-center py-1.5 pl-2
                        hover:bg-[#1a222f] hover:text-white rounded-sm cursor-pointer'>
              <span className='text-2xl'><PiKeyReturnBold /></span>
              <span className='text-lg'>Returns</span>
            </div>

            <div className='flex flex-row gap-2 items-center py-1.5 pl-2
                        hover:bg-[#1a222f] hover:text-white rounded-sm cursor-pointer'>
              <span className='text-xl'><FiUsers /></span>
              <span className='text-lg'>Customers</span>
            </div>
          </div>

          <div>
            Arunabha
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
