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
        <div className="flex lg:flex-row flex-col-reverse -mx-4 ">
          <div className="w-full  xl:w-1/4 px-4 order-1 md:order-2 text-right flex justify-end">
            {/* <div className='w-2/4'> */}
            <div className='relative py-5 '>
              <div className='absolute  top-0 bottom-0  right-0 -translate-x-[15px] -translate-y-[2px] rounded-tl-full rounded-bl-full border-1 border-dashed border-[#9fa8ae] w-[270px] md:w-[310px] xl:w-[290px] h-[300px] md:h-[350px] xl:h-[320px]'></div>

              <div className="hero-avatar relative z-10">
                <Image
                  src="/images/avatar.webp"
                  alt="Avatar"
                  width={300}
                  height={300}
                  className="rounded-tl-full rounded-bl-full"
                />

              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="w-full  xl:w-3/4 px-4 py-4 lg:py-0 order-3 md:order-1">
            <div className="w-3/4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
                Hi There! I&apos;m Khadija. A Beginner Frontend-Developer based on Next.js
              </h1>
              <div className=" mt-3 flex items-center rounded-full border-[#9fa8ae] border-dashed border-1 px-4 py-2 w-[190px]">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                Available for work
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
            <p className="text-gray-500 mt-2">Project Experience</p>
          </div>

          {/* Right Side - Description */}
          <div className="col-span-2">
            <p className="text-4xl text-gray-900 font-medium leading-tight">
            Developed 10+ frontend projects using HTML, CSS, JavaScript, and frameworks like Bootstrap, Tailwind.
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
