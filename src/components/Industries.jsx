// Components
import {AutoScrollSlider} from "@/components";
// Media
import industries1 from "media/industries/automotive.png";
import industries2 from "media/industries/buisness.png";
import industries3 from "media/industries/construction.png";
import industries4 from "media/industries/education.png";
import industries5 from "media/industries/travel.png";
// Next
import Image from "next/image";

export default function Industries({subTitle, title, desc, theme = "light"}) {
  return (
    <section>
      <div >
        <div className="container">
          <div className="text-center mb-12">
            {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">{subTitle}</span>}
            {title && <h3 className={`text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] xs:pb-[10px] font-semibold text-[#202124] ${theme == "light" ? "text-[#202124]" : "text-white"} mb-2`} dangerouslySetInnerHTML={{__html: title}} />}
            {desc && (
              <p
                className={`text-[14px] lg:text-[16px] 2xl:w-[75%] lg:w-[85%] mx-auto block leading-[26px] font-normal ${theme == "light" ? "text-[#202124]" : "text-white"}`}
                dangerouslySetInnerHTML={{__html: desc}}
              />
            )}
          </div>
          <div>
            <AutoScrollSlider wrapperClasses="mt-[50px]" direction="forward">
              {[
                [industries1, "Automotive", "Maximize your online presence and captivate <br/> your audience with BrandMint's."],
                [industries2, "Business", "Maximize your online presence and captivate <br/> your audience with BrandMint's."],
                [industries3, "Construction", "Maximize your online presence and captivate <br/> your audience with BrandMint's."],
                [industries4, "Education", "Maximize your online presence and captivate <br/> your audience with BrandMint's."],
                [industries5, "Travel", "Maximize your online presence and captivate <br/> your audience with BrandMint's."],
              ].map(([img, title, desc], i) => (
                <div key={i} className="grow-0 group shrink-0 basis-auto min-w-0 pl-4">
                  <div className="relative">
                    <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-foreground opacity-0 rounded-[10px] group-hover:opacity-0 transition-opacity"></div>
                    <Image tabIndex={0} key={i} src={img} alt="Industries" className="rounded-[10px]" width={400} height={400} />
                    <h4 className="text-[20px] font-medium mt-5 mb-3" dangerouslySetInnerHTML={{__html: title}} />
                    <p className="text-[16px] font-light" dangerouslySetInnerHTML={{__html: desc}} />
                  </div>
                </div>
              ))}
            </AutoScrollSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
