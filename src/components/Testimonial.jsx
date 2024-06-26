// Next
import Image from "next/image";

// Image
import iconimage from "../../public/card/stars.png";
import cardImage from "../../public/card/philip.png";
import { CTA } from ".";
export default function Card({subTitle, title, desc, bgClass, classes = " ", gridsClasses = " ", cta = "", variant = "steps", data, theme = "light"}) {
  return (
    <section>
      <div className="py-[80px]">
        <div className="container">
          <div className="text-center mb-12">
            {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">{subTitle}</span>}
            {title && <h3 className={`lg:text-[50px] text-[40px] font-semibold text-[#202124] ${theme == "light" ? "text-[#202124]" : "text-white"} mb-2`} dangerouslySetInnerHTML={{__html: title}} />}
            {desc && (
              <p
                className={`text-[14px] lg:text-[16px] 2xl:w-[75%] lg:w-[85%] mx-auto block leading-[26px] ${theme == "light" ? "text-[#202124]" : "text-white"}`}
                dangerouslySetInnerHTML={{__html: desc}}
              />
            )}
          </div>
          <div className={`grid ${gridsClasses} gap-x-4 gap-y-5 mb-10`}>
            {data?.map((e, i) => (
              <div key={i} className={`${bgClass} py-8 px-6 transition-all ease-in-out duration-1000 group items-center overflow-hidden relative xl:min-h-[350px] lg:min-h-[380px] min-h-[320px]`}>
                <div className={`w-36 h-36 rounded-full transition-all ease-in-out duration-1000 group-hover:bottom-[180px] group-hover:right-[280px] blur-2xl ${e.shadowColor} bg-opacity-50 absolute right-0 bottom-0`}></div>
                {iconimage && <Image src={e.iconimage} alt="Icon Image" className="mb-4" width={100} height={15} />}
                <p className="md:text-[18px] text-[16px] mb-3 font-normal leading-normal" dangerouslySetInnerHTML={{__html: e.review}} />
                <div className="absolute bottom-4 left-6">
                  <div className="flex gap-2 items-center">
                    <Image alt="Testimonial image" src={e.testimonialImage} className="rounded-full" width={68} height={15} />
                    <span className="text-[18px] font-medium capitalize" dangerouslySetInnerHTML={{__html: e.testimonialName}} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <CTA text={"Read More Local Maps 360 Reviews"} className="!bg-[#4E81EC] hover:!bg-[#202124]" />
          </div>
        </div>
      </div>
    </section>
  );
}
