import React from 'react';

const Image = () => {
  return (
    <div
      className=' h-[450px] flex items-center justify-center overflow-hidden w-[100vw]'
      style={{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
      
      }}
    >
      <img src="image11.jpg" alt="" className='w-full h-full object-cover' />
      <img src="image12.png" alt="" className='mt-[-80px] absolute flex  justify-center w-1/2 h-1/2 object-contain ' />
      <div className='absolute flex items-center justify-center text-white top-1/2 mt-[100px] w -5 text-lg'>
        Introducing the Next-Gen Inverter & Non-Inverter
      </div>
      <div className='absolute flex items-center justify-center text-white top-1/2 mt-[150px] w -5 font-bold text-5xl'>
      Split Air Conditioners
      </div>
    </div>
  );
};

export default Image;