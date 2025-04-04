import Image from 'next/image';
import React from 'react';
import Cards from './component/cards/page';
import Skills from './component/skills/page';
import SkillsExperience from './component/detailing/page';
import EducationCards from './component/education/page';
import AnimatedTextBanner from './component/animatedText/page';
import PortfolioCarousel from './component/recentWork/page';

function Page() {
  return (
    <div className='bg-[#f1f5fa] pt-30 px-15'>
      {/* //////////// section 1 /////////////// */}
      <section className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-4 ">
          <div className="w-full md:w-1/3 xl:w-1/4 px-4 order-1 md:order-2 text-right">
            {/* <div className='w-2/4'> */}
            <div className='relative '>
              <div className='absolute top-0 bottom-0 left-0 right-0 -translate-x-[20px] -translate-y-[15px] rounded-tl-full rounded-bl-full border-1 border-dashed border-[#9fa8ae] w-[280px] h-[300px]'></div>

              <div className="hero-avatar relative z-10">
                <Image
                  src="/images/avatar.webp"
                  alt="Avatar"
                  width={300}
                  height={400}
                  className="rounded-tl-full rounded-bl-full"
                />

              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="w-full md:w-2/3 xl:w-3/4 px-4 order-3 md:order-1">
            <div className="w-3/4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
                Hi There! I&apos;m Chrisy. A Professional Digital Marketer based in Mongolia
              </h1>
              <div className="hire-status mt-3 flex items-center rounded-full border-[#9fa8ae] border-dashed border-1 px-4 py-2 w-[180px]">
                <span className="dot-available w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                Available for hire
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////// section 2 /////////////// */}
      <Cards />
      {/* ////////////// section 3 ////////////////  */}
      <section className="container mx-auto py-16 px-6 md:px-20 flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* Left Side - Years of Experience */}
          <div className="text-left lg:text-center">
            <h2 className="text-6xl font-bold text-gray-900">10+</h2>
            <p className="text-gray-500 mt-2">Years of Experience</p>
          </div>

          {/* Right Side - Description */}
          <div className="col-span-2">
            <p className="text-4xl text-gray-900 font-medium leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
        </div>
      </section>
      {/* //////////////// section 4 ////////////////  */}
      <Skills />
      {/* ///////////////// section 5 ////////////////  */}
      <PortfolioCarousel />
      {/* ////////////////// section 6 ///////////////////  */}
      <SkillsExperience />
      {/* //////////// section 7 ///////////////  */}
      <EducationCards />
      {/* /////////// section 8 /////////////////  */}
      <AnimatedTextBanner />
    </div>
  );
}

export default Page;
