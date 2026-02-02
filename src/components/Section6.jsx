import React from 'react'
import img6 from "../assets/img6.avif"
import tractor from "../assets/tractor.svg"

const TextContent = (props) => {
    return(
        <div>
            <img src={props.icon} alt="" style={{width:"20%",height:"30%", padding:"0"}} />
            <h3 className='font-medium text-2xl mb-7'>{props.title}</h3>
            <p className='font-light mb-7 text-pretty'>{props.description}</p>
            <p className='font-light'>{props.description2}</p>
        </div>
    )
}
const Section6 = () => {
  return (
    <div>
        <div className='w-full h-[90vh] flex justify-center'>
            <div className='w-[85%] h-full bg-white flex justify-between'>
                <div className='w-[60%] h-full '>
                     <img src={img6} alt="img1" style={{width:"100%",height:"100%"}} />
                </div>
            <div className='w-[38%] h-full flex items-center '>
               <div className='w-full h-[70%] bg-white mt-20'>
                                    <TextContent
                                    icon = {tractor}
                                    title = {"Infrastructure Construction"}
                                    description = {"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page."}
                                    description2 = {"This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide."}
                                    />
                                </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Section6