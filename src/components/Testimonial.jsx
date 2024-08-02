// Next
import Image from "next/image";
import { AutoScrollSlider } from "@/components";

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
const data = [
  {
    shadowColor: "bg-[#4E81EC]",
    review: "SEO Company has completely transformed our online presence. Their advanced SEO tactics have boosted our website's traffic and increased our conversions immensely. Their expertise in keyword research, content optimization, and link-building is unmatched. Highly recommend their services!",
    testimonialImage: philip,
    testimonialName: "Philip",
    minHeight:"2xl:min-h-[380px] xl:min-h-[430px] lg:min-h-[510px] min-h-[430px]",
    minHeightMob:"min-h-[400px]"
  },
  {
    shadowColor: "bg-[#E1183A]",
    review: "SEO Company has been a game-changer. Their all-around SEO strategies helped us rank higher on search engines and attract more visitors. Their team is super knowledgeable and always ready to help. Five stars!",
    testimonialImage: chris,
    testimonialName: "Chris",
    minHeight:"2xl:min-h-[380px] xl:min-h-[430px] lg:min-h-[510px] min-h-[430px]",
    minHeightMob:"min-h-[400px]"
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "If you're looking for professional SEO services that deliver real results, SEO Company is your place to go. Their advanced SEO tactics and commitment to understanding our business have propelled us to the top of search results. Their team is amazing, and their services are worth every penny.",
    testimonialImage: bilal,
    testimonialName: "Bilal",
    minHeight:"2xl:min-h-[380px] xl:min-h-[430px] lg:min-h-[510px] min-h-[430px]",
    minHeightMob:"min-h-[400px]"
  },
  {
    shadowColor: "bg-[#24BF5A]",
    review: "I can't say enough good things about SEO Company. Their SEO strategies are well-planned, and work wonders for our search rankings. Their monthly updates keep us informed and confident. Highly recommended!",
    testimonialImage: elissa,
    testimonialName: "Elissa Kidarshan",
    minHeight:"2xl:min-h-[380px] xl:min-h-[430px] lg:min-h-[510px] min-h-[430px]",
    minHeightMob:"min-h-[400px]"
  },
  {
    shadowColor: "bg-[#4E81EC]",
    review: "If you want SEO services that really work, go with SEO Company. Their advanced SEO tactics and deep understanding of our business got us to the top of search results. Their team is awesome, and their services are worth every penny.",
    testimonialImage: joe,
    testimonialName: "Joe Francis",
    minHeight:"2xl:min-h-[380px] xl:min-h-[430px] lg:min-h-[510px] min-h-[430px]",
    minHeightMob:"min-h-[400px]"
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "SEO Company has a proven success record, and we’ve seen it ourselves. Their custom SEO plans helped us reach our target audience better, and their ongoing support ensures we keep growing. They're the best SEO firm out there.",
    testimonialImage: moses,
    testimonialName: "Moses",
    minHeight:"2xl:min-h-[380px] xl:min-h-[430px] lg:min-h-[510px] min-h-[430px]",
    minHeightMob:"min-h-[400px]"
  },
];
export default function testimonial({
  subTitle, title = "Still Not Convinced?",
  desc = "Discover What Customers Have To Say About Us",
  data
}) {
  return (
    <section>
      <div>
        <div className="container">
          <div className="text-center mb-12">
            {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">{subTitle}</span>}
            {title && <h3 className={`text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] xs:leading-tight font-semibold text-[#202124] mb-2`} dangerouslySetInnerHTML={{ __html: title }} />}
            {desc && <p className={`text-[14px] lg:text-[16px] 2xl:w-[75%] lg:w-[85%] mx-auto block leading-[26px]`} dangerouslySetInnerHTML={{ __html: desc }} />}
          </div>
          <div className={`md:grid lg:grid-cols-3 md:grid-cols-2  gap-4 gap-x-4 gap-y-5 mb-10 hidden`}>
            {data?.map((e, i) => (
              <div
                key={i}
                className={`bg-transparent border-[1px] shadow-lg rounded-[15px] py-8 px-6 transition-all ease-in-out duration-1000 group items-center overflow-hidden relative ${e.minHeight}`}
              >
                <div
                  className={`w-36 h-36 rounded-full transition-all ease-in-out duration-1000 group-hover:bottom-[180px] group-hover:right-[280px] blur-2xl ${e.shadowColor} bg-opacity-50 absolute right-0 bottom-0`}
                ></div>
                <Image src={iconimage} alt="Icon Image" className="mb-4" width={100} height={15} />
                <p className="md:text-[18px] text-[16px] mb-3 font-normal leading-normal" dangerouslySetInnerHTML={{ __html: e.review }} />
                <div className="absolute bottom-4 left-6">
                  <div className="flex gap-2 items-center">
                    <Image alt="Testimonial image" src={e.testimonialImage} className="rounded-full" width={68} height={15} />
                    <span className="text-[18px] font-medium capitalize" dangerouslySetInnerHTML={{ __html: e.testimonialName }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <AutoScrollSlider>
            {data?.map((e, i) => (
              <div key={i} className="grow-0 group shrink-0 basis-auto min-w-0 pl-4 max-w-[350px] md:hidden block">
                <div
                  key={i}
                  className={`bg-transparent border-[1px] shadow-lg rounded-[15px] py-8 px-6 transition-all ease-in-out duration-1000 group items-center overflow-hidden relative ${e.minHeightMob}`}
                >
                  <div
                    className={`w-36 h-36 rounded-full transition-all ease-in-out duration-1000 group-hover:bottom-[180px] group-hover:right-[280px] blur-2xl ${e.shadowColor} bg-opacity-50 absolute right-0 bottom-0`}
                  ></div>
                  <Image src={iconimage} alt="SEO company" className="mb-4" width={100} height={15} />
                  <p className="md:text-[18px] text-[16px] mb-3 font-normal leading-normal" dangerouslySetInnerHTML={{ __html: e.review }} />
                  <div className="absolute bottom-4 left-6">
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
