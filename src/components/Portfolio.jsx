// Next
import Image from "next/image";
import React from "react";

// Media
import Portfolio1 from "media/website-design-and-development/portfolio1.png";
import Portfolio2 from "media/website-design-and-development/portfolio2.png";
import Portfolio3 from "media/website-design-and-development/portfolio3.png";
import {CTA} from ".";

export default function Portfolio() {
  return (
    <section>
      <div>
        <div className="container">
          <div className="text-center mb-8">
            <span className="md:text-[20px] text-[16px] lg:text-[25px] bg-[#F8BF19] w-max mx-auto rounded-full md:py-3 py-2 px-[2.5rem] block leading-tight font-normal uppercase text-black mb-6 shadow-sm">Portfolio</span>
            <h3 className={`text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] font-semibold text-[#202124] mx-auto text-[#202124]"  mb-5`}>Making Brands The Best Of What They Can Be</h3>
            <p className={`text-[14px] lg:text-[16px] mx-auto block leading-[26px] font-light`}>
              Our team of experts focus on the needs of our client and their specific requirements to develop a custom solution tailored to their needs. Our ideology is DEFYING BRANDING NORMS, SETTING
              NEW HORIZONS! This is one of the main reasons why our work is internationally recognized.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-5 mb-2">
            <div className="md:col-span-5 col-span-12">
              <Image src={Portfolio1} alt="SEO company Portfolio" className="w-full" width={400} height={300} quality={95} />
            </div>
            <div className="md:col-span-7 col-span-12">
              <Image src={Portfolio2} alt="SEO company Portfolio" className="w-full" width={800} height={300} quality={95} />
            </div>
            <div className="col-span-12 relative">
            <Image src={Portfolio3} alt="SEO company Portfolio" className="w-full" width={1000} height={500} quality={95} />
            <CTA text={"View More Website Portfolio"} variant="icon" icon={true} className="!bg-[#414141] hover:!bg-[#EC4139] md:absolute static xl:left-[38%] lg:left-[34%] md:left-[30%] lg:bottom-16 md:bottom-10 mx-auto mt-5 md:mt-0" />
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
