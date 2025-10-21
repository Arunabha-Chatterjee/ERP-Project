import React from 'react';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <div className="grid grid-cols-12 w-screen">
      <div className="h-screen col-span-2 flex items-center justify-center">
        <Sidebar/>
      </div>

      <div className="col-span-10 bg-[#161e2d] h-screen flex justify-center items-center">
        <div>arunabha</div>
      </div>
    </div>
  );
};

export default Main;
