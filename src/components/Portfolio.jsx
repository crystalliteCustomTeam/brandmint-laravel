// Next
import Image from "next/image";
import React from "react";

// Media
import Portfolio1 from "media/website-design-and-development/portfolio1.png";
import Portfolio2 from "media/website-design-and-development/portfolio2.png";
import Portfolio3 from "media/website-design-and-development/portfolio3.png";
import { CTA } from ".";

export default function Portfolio() {
  return (
    <section>
      <div>
        <div className="container">
          <div className="text-center mb-8">
            <span className="text-[20px] lg:text-[25px] bg-[#F8BF19] w-max mx-auto rounded-full py-3 px-[2.5rem] block leading-tight font-normal uppercase text-black mb-6 shadow-sm">Portfolio</span>
            <h3 className={`lg:text-[50px] md:text-[40px] text-[25px] font-medium text-[#202124] mx-auto mb-2`}>Making Brands The Best Of What They Can Be</h3>
            <p className={`text-[14px] lg:text-[16px] mx-auto block leading-[26px] font-light`}>
              Our team of experts focus on the needs of our client and their specific requirements to develop a custom solution tailored to their needs. Our ideology is DEFYING BRANDING NORMS, SETTING
              NEW HORIZONS! This is one of the main reasons why our work is internationally recognized.
            </p>
          </div>

          <div className="flex gap-2 mb-2">
            <Image src={Portfolio1} alt="Brandmint Portfolio" className="w-[800px]" width={400} height={500} quality={95} />
            <Image src={Portfolio2} alt="Brandmint Portfolio" className="w-full" width={500} height={500} quality={95} />
          </div>
          <div className="relative">
            <Image src={Portfolio3} alt="Brandmint Portfolio" className="w-full relative -z-20" width={1000} height={500} quality={95} />
            <CTA text={'View More Website Portfolio'} variant='icon' icon={true} className="!bg-[#414141] hover:!bg-[#EC4139] absolute bottom-14 left-[39%]"/>
          </div>
        </div>
      </div>
    </section>
  );
}
