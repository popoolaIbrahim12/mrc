import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='w-full h-20  mb-20 flex justify-center items-center mt-8'>
            <div className='w-[82%] h-[85%]  flex justify-between items-center'>
                <div className='w-[12%] h-full bg-[#717171] p-2 border border-[#FD5521]'>
                    <h4 className='text-white text-center font-bold text-2xl'>MCR</h4>
                    <p className='text-white text-center'>construction</p>
                </div>
                <div className='w-[75%] h-full  flex gap-0.5 '>
                    <div className='w-[78%] h-full bg-amber-50 flex border border-[#FD5521]'>
                            <div className='w-[20%] h-full bg-[#717171] flex items-center justify-center  '>
                    <h4 className='text-white text-center'>Services</h4>
                  
                </div>
                            <div className='w-[20%] h-full bg-[#717171] flex items-center justify-center '>
                    <h4 className='text-white text-center'>projects</h4>
                  
                </div>
                            <div className='w-[20%] h-full bg-[#717171] flex items-center justify-center  '>
                    <h4 className='text-white text-center'>About Us</h4>
                  
                </div>
                            <div className='w-[20%] h-full bg-[#717171] flex items-center justify-center  '>
                    <h4 className='text-white text-center'>Careers</h4>
                  
                </div>
                            <div className='w-[20%] h-full bg-[#717171] flex items-center justify-center  '>
                    <h4 className='text-white text-center'>Contact</h4>
                  
                </div>
                    </div>
                    <div className='w-[20%] h-full bg-[#FD5521] border border-[#FD5521] flex items-center justify-center text-lg'>Call Now!</div>
                </div>
           
            </div>
        </div>
    </div>
  )
}

export default Header