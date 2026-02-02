import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-full h-75  mt-10 flex justify-center'>
            <div className='w-[86%] h-full bg-white flex justify-between'>
                <div className='w-[10%] h-full '>
                <h1 className='font-bold text-2xl'>MCR</h1>
                <p>Construction</p>
                </div>
                <div className='w-[35%] h-full  flex justify-between'>
                    <div className='w-[45%] h-full'>
                        <h1 className='font-normal text-3xl mb-7'>Head Office</h1>
                        <p className='font-light mb-7'>500 Terry Francine Street San Francisco, CA 94158</p>
                        <p className='font-light'>123-456-7890<br/>

info@mysite.com</p>
                    </div>
                    <div className='w-[45%] h-full '>
                        <h1 className='font-normal text-3xl mb-7' >Socials</h1>
                        <p className='font-light mb-2'>Facebook</p>
                        <p className='font-light mb-2'>Instagram</p>
                        <p className='font-light mb-2'>LinkendIn</p>
                    </div>
                </div>
                <div className='w-[35%] h-full  flex justify-between'>
                    <div className='w-[45%] h-full bg-white'>
                         <h1 className='font-normal text-3xl mb-7'>Inquiries</h1>
                        <p className='font-light mb-7'>For any inquiries, questions or commendations, please call: 123-456-7890</p>
                    </div>
                    <div className='w-[45%] h-full'>
                        <button className='mt-20 w-[160px] h-[60px] bg-[#FD5521] hover:bg-white hover:border border-black'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-5 ml-26 mb-12 font-light'>© 2035 by MCR Construction. Powered and secured by Wix</div>
    </div>
  )
}

export default Footer