import React from 'react'


const HeroContent = (props) => {
    return(
        <div>
            <p className='font-sans mb-5 text-xl font-medium'>{props.title}</p>
            <h1 className='text-[#FD5521] font-bold text-5xl mb-5'>{props.description}</h1>
            <p className='font-light'>{props.paragraph}</p>
            <p className='font-light'>{props.paragraph2}</p>
        </div>
    )

}
const Hero = () => {
  return (
    <div>
        <div className='w-full h-60 mb-16'>
        <div className='w-[50%] h-full bg-white ml-28'>
                <HeroContent 
            title = {"Our Services"}
            description = {"We offer a range of services to meet your needs"}
            paragraph = {"I'm a paragraph. Click here to add your own text and"}
            paragraph2 = {"edit me. Let your users get to know you."}
            />
        </div>
        </div>
    </div>
  )
}

export default Hero