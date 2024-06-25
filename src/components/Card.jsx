// Next
import Image from "next/image";

// Image
import iconimage from "../../public/card/stars.png";
import cardImage from "../../public/card/philip.png";
export default function Card({subTitle, title, desc, bgClass, classes = " ", gridsClasses = " ", cta = "", variant = "steps", data, theme = "light"}) {
  return (
    <section>
      <div className="py-[80px]">
        <div className="container">
          <div className="text-center mb-5">
            {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">{subTitle}</span>}
            {title && <h3 className={`lg:text-[50px] text-[40px] font-semibold text-[#202124] ${theme == "light" ? "text-[#202124]" : "text-white"} mb-2`} dangerouslySetInnerHTML={{__html: title}} />}
            {desc && (
              <p
                className={`text-[14px] lg:text-[16px] 2xl:w-[75%] lg:w-[85%] mx-auto block leading-[26px] ${theme == "light" ? "text-[#202124]" : "text-white"}`}
                dangerouslySetInnerHTML={{__html: desc}}
              />
            )}
          </div>
          <div className={`grid ${gridsClasses} gap-x-4 gap-y-5`}>
            {data?.map((e,i)=> (
                <div key={i} className={`${bgClass} py-8 px-6 items-center relative md:min-h-[280px]`}>
              {iconimage && <Image src={e.iconimage} alt="Icon Image" className="mb-4 " width={100} height={15}/>}
              <p className="lg:text-[16px] text-[12px] mb-3" dangerouslySetInnerHTML={{__html : e.review}}/>
              <div className="absolute bottom-4 left-6">
                <div className="flex gap-2 items-center">
                  <Image alt="card image" src={e.testimonialImage} className="rounded-full" width={68} height={15}/>
                  <span className="text-[16px] font-normal" dangerouslySetInnerHTML={{__html: e.testimonialName}}/>
                </div>
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
