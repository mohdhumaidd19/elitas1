import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#bad8d9] flex px-16 pt-6 flex-col space-y-12'>
    <div className='flex justify-between w-full items-center'>
        <div>
        <p className='text-sm font-semibold'>Write your query to us. We</p>
        <p className='text-sm font-semibold'>will contact you.</p>
        </div>
        <div className='space-x-1'>
            <input className='bg-[#bad8d9] rounded-full p-1 border pl-2 border-gray-700 focus:outline-none text-black placeholder:text-black' type="text" placeholder='Enter your email'/>
            <button className='bg-[#1c2931] rounded-full px-3 py-1 text-white'>Send</button>
        </div>
    </div>
    <div className='flex justify-between'>
        <div>
            <img className='w-[100px]' src="./image10.png" alt="" />
            <p className='font-semibold'>Elitas Appliances Pvt. Ltd.</p>
            <p className='text-[12px] font-normal tracking-wide'>Redefined Comfort,Elevating</p>
            <p className='text-[12px] font-normal tracking-wide'>Sustainability</p>
        </div>
        <div>
            <h3 className='font-semibold'>Our Story</h3>
            <ul>
                <li>- History</li>
                <li>- Awards & Recognition</li>
            </ul>
        </div>
        <div>
            <h3 className='font-semibold'>Solutions</h3>
        <ul>
                <li>- Air conditioner</li>
                <li>- Water Dispenser</li>
            </ul>
        </div>
        <div>
           <h3 className='font-semibold'>Connect</h3> 
        <ul>
                <li>- Contact Us</li>
                <li>- Become a trade partner-</li>
            </ul>
        </div>
    </div>
    <div></div>
</div>
  )
}

export default Footer
