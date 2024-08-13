// Next
import Image from "next/image";
import { AutoScrollSlider, BlurFade, FadeText } from "@/components";

// Media
import iconimage from "media/testimonial/stars.png";
import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";

import { CTA } from "@/components";
// Testimonial Data

export default function testimonial({
  subTitle, title = "<h2>What Makes Us #1?</h2>",
  desc = "<p>See Real Client Reviews</p>",
  data
}) {
  return (
    <section>
      <div>
        <div className="container">
          <div className="text-center mb-12">
            {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">{subTitle}</span>}
            {title &&
              <FadeText text={title} className={`text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] xs:leading-tight font-semibold text-[#202124] mb-2`}
                direction="up"
              />}


            {desc &&
              <FadeText text={desc} className={`text-[14px] lg:text-[16px] 2xl:w-[75%] lg:w-[85%] mx-auto block leading-[26px]`}
                direction="up"
              />



            }
          </div>
          <div className={`md:grid lg:grid-cols-3 md:grid-cols-2  gap-4 gap-x-4 gap-y-5 mb-10 hidden`}>
            {data?.map((e, i) => (
              <BlurFade delay={0.1 * i} duration={1} inView={true} key={i}>
                <div

                  className={`bg-transparent border-[1px] shadow-lg rounded-[15px] py-8 px-6 transition-all ease-in-out duration-1000 group items-center overflow-hidden relative`}
                >
                  <div
                    className={`w-36 h-36 rounded-full transition-all ease-in-out duration-1000 group-hover:bottom-[180px] group-hover:right-[280px] blur-2xl ${e.shadowColor} bg-opacity-50 absolute right-0 bottom-0`}
                  ></div>
                  <Image src={iconimage} alt="Icon Image" className="mb-4" width={100} height={15} />
                  <p className="md:text-[18px] text-[16px] mb-3 font-normal leading-normal h-[140px] overflow-y-auto custom-scrollbar pe-2" dangerouslySetInnerHTML={{ __html: e.review }} />
                  <div>
                    <div className="flex gap-2 items-center">
                      <Image alt="Testimonial image" src={e.testimonialImage} className="rounded-full" width={68} height={15} />
                      <span className="text-[18px] font-medium capitalize" dangerouslySetInnerHTML={{ __html: e.testimonialName }} />
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <AutoScrollSlider>
            {data?.map((e, i) => (
              <div key={i} className="grow-0 group shrink-0 basis-auto min-w-0 pl-4 max-w-[350px] md:hidden block">
                <div
                  key={i}
                  className={`bg-transparent border-[1px] shadow-lg rounded-[15px] py-8 px-6 transition-all ease-in-out duration-1000 group items-center overflow-hidden relative`}
                >
                  <div
                    className={`w-36 h-36 rounded-full transition-all ease-in-out duration-1000 group-hover:bottom-[180px] group-hover:right-[280px] blur-2xl ${e.shadowColor} bg-opacity-50 absolute right-0 bottom-0`}
                  ></div>
                  <Image src={iconimage} alt="SEO company" className="mb-4" width={100} height={15} />
                  <p className="md:text-[18px] text-[16px] mb-3 font-normal leading-normal h-[148px] overflow-y-auto custom-scrollbar" dangerouslySetInnerHTML={{ __html: e.review }} />
                  <div>
                    <div className="flex gap-2 items-center">
                      {e.testimonialImage && (<Image alt="SEO company" src={e.testimonialImage} className="rounded-full" width={68} height={15} />)}
                      <span className="text-[18px] font-medium capitalize" dangerouslySetInnerHTML={{ __html: e.testimonialName }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AutoScrollSlider>
          <div className="flex justify-center mt-8 md:mt-0">
            <CTA text={"Read More Local Maps 360 Reviews"} className="!bg-[#4E81EC] hover:!bg-[#EC4139]" />
          </div>
        </div>
      </div>
    </section>
  );
}
