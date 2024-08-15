// Components
import { AutoScrollSlider, BlurFade, FadeText } from "@/components";
// Media
import industries1 from "media/industries/ecommerce.png";
import industries4 from "media/industries/it.png";
import industries3 from "media/industries/health.png";
import industries2 from "media/industries/education.png";
import industries5 from "media/industries/conquered3.png";
// Next
import Image from "next/image";

export default function Industries({
  subTitle,
  title = "Industries We Proudly Serve",
  desc = "No matter the NATURE or SCALE of your business, enhance your online value with our assistance!",
  data = [
    [industries1, "E-commerce", "Boost your online store's traffic and sales <br/> with a targeted SEO Company that enhances <br/> product visibility."],
    [industries2, "Education", "Attract more students by optimizing your academic <br/> institution's online presence."],
    [industries3, "Hospitality", "Increase bookings and attract travelers with <br/> SEO Company for hotels, restaurants, and <br/> travel hubs."],
    [industries4, "Technology and IT", " Expand your tech company's reach with <br/> SEO Company strategies tailored to <br/> technology-specific keywords."],
    [industries5, "Automotive", "Drive local customer traffic to your dealership <br/> or auto repair shop with a focused automotive <br/> SEO Company."],
  ]
}) {
  return (
    <section>
      <div className="overflow-hidden">
        <div className="container">
          <div className="text-center mb-12">
            {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">{subTitle}</span>}

            {title && <FadeText text={title} className={`text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] xs:pb-[10px] font-semibold text-[#202124]  mb-2`}
              direction="up"
            />}
            {desc && (
             
              <FadeText text={desc}  className={`text-[14px] lg:text-[16px] 2xl:w-[75%] lg:w-[85%] mx-auto block leading-[26px] font-normal `}
              direction="up"
            />
            )}
          </div>
          <div>
            <AutoScrollSlider wrapperClasses="mt-[50px] overflow-visible" direction="forward">
              {data.map(([img, title, desc], i) => (

                <div key={i} className="grow-0 group shrink-0 basis-auto min-w-0 pl-4">
                  <BlurFade>
                    <div className="relative">
                      <div className="absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] bg-foreground opacity-0 rounded-[10px] group-hover:opacity-0 transition-opacity"></div>
                      <Image tabIndex={0} key={i} src={img} alt="SEO company" className="rounded-[30px]  border border-[#ccc]" width={400} height={400} />
                      <h4 className="text-[20px] font-medium mt-5 mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                      <p className="text-[16px] font-light" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                  </BlurFade>
                </div>

              ))}
            </AutoScrollSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
