import React from 'react';

const HeroContent = ({ title, description, paragraph, paragraph2 }) => {
  return (
    <div className="space-y-5 md:space-y-8 max-w-3xl">
      {title && (
        <p className="text-md sm:text-xl md:text-2xl font-medium text-gray-700">
          {title}
        </p>
      )}

      {description && (
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FD5521] leading-tight">
          {description}
        </h1>
      )}

      <div className="space-y-3 text-base sm:text-lg text-gray-600 font-light leading-relaxed">
        {paragraph && <p>{paragraph}</p>}
        {paragraph2 && <p>{paragraph2}</p>}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[80vh] bg-gray-50 overflow-hidden">
    

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
        <div className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2">
          <HeroContent
            title="Our Services"
            description="We offer a range of services to meet your needs"
            paragraph="I'm a paragraph. Click here to add your own text and edit me."
            paragraph2="Let your users get to know you better — add a short bio or mission statement here."
          />

        
        </div>
      </div>
    </section>
  );
};

export default Hero;