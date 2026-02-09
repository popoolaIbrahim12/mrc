import React from 'react';
import img7 from "../assets/img7.avif";
import settings from "../assets/settings.svg"

const TextContent = ({ icon, title, description, description2 }) => {
  return (
    <div className="space-y-5 md:space-y-6">
      {icon && (
        <img
          src={icon}
          alt="Commercial Construction icon"
          className="h-12 w-12 md:h-14 md:w-14 object-contain"
        />
      )}

      <h3 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
        {title}
      </h3>

      <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
        {description}
      </p>

      <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
        {description2}
      </p>
    </div>
    )
};

const Section5 = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Text column – comes first on mobile */}
          <div className="w-full lg:w-5/12 xl:w-2/5 mb-10 lg:mb-0">
            <TextContent
              icon={settings}
              title="Civil Engineering"
              description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content..."
              description2="This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your team and what services you provide."
            />
          </div>

          {/* Image column */}
          <div className="w-full lg:w-7/12 xl:w-3/5">
            <div className="aspect-[4/3] md:aspect-[5/3] lg:aspect-[3/2] overflow-hidden  shadow-xl">
              <img
                src={img7}
                alt="Commercial construction project"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;