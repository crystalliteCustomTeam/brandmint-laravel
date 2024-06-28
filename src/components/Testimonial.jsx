// Next
import Image from "next/image";

// Image
import iconimage from "media/card/stars.png";
import { CTA } from ".";
// Testimonial Data
let data = [
  {
    shadowColor: "bg-[#4E81EC]",
    iconimage: "/card/stars.png",
    review: "'Business Name' is my go-to site for getting the reviews for my business accounts. Since the time I have known this site, I haven't visited any other.",
    testimonialImage: "/card/philip.png",
    testimonialName: "Philip",
  },
  {
    shadowColor: "bg-[#E1183A]",
    iconimage: "/card/stars.png",
    review: "Having positive reviews on the website and account feels so good. It is so encouraging to drive the business. I got them from Business Name and I love them.",
    testimonialImage: "/card/chris.png",
    testimonialName: "Chris",
  },
  {
    shadowColor: "bg-[#F5C228]",
    iconimage: "/card/stars.png",
    review: "If you are looking to build a strong review profile, I suggest you see BuyReviewz. They have an expert team and fulfill the order in a professional manner.",
    testimonialImage: "/card/bilal.png",
    testimonialName: "Bilal",
  },
  {
    shadowColor: "bg-[#24BF5A]",
    iconimage: "/card/stars.png",
    review: "'Business Name' is my go-to site for getting the reviews for my business accounts. Since the time I have known this site, I haven't visited any other.",
    testimonialImage: "/card/elissa.png",
    testimonialName: "Elissa Kidarshan",
  },
  {
    shadowColor: "bg-[#4E81EC]",
    iconimage: "/card/stars.png",
    review: "Having positive reviews on the website and account feels so good. It is so encouraging to drive the business. I got them from Business Name and I love them.",
    testimonialImage: "/card/joe.png",
    testimonialName: "Joe Francis",
  },
  {
    shadowColor: "bg-[#F5C228]",
    iconimage: "/card/stars.png",
    review: "If you are looking to build a strong review profile, I suggest you see BuyReviewz. They have an expert team and fulfill the order in a professional manner.",
    testimonialImage: "/card/moses.png",
    testimonialName: "Moses",
  },
];
export default function Card({subTitle, title, desc, bgClass, classes = " ", gridsClasses = " ", cta = "", variant = "steps", theme = "light"}) {
  return (
    <section>
      <div>
        <div className="container">
          <div className="text-center mb-12">
            {subTitle && <span className="text-[20px] lg:text-[30px] block leading-tight font-semibold font-sans text-[#40BEE2] mb-2">{subTitle}</span>}
            {title && <h3 className={`text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] xs:leading-tight font-semibold text-[#202124] ${theme == "light" ? "text-[#202124]" : "text-white"} mb-2`} dangerouslySetInnerHTML={{__html: title}} />}
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
            <CTA text={"Read More Local Maps 360 Reviews"} className="!bg-[#4E81EC] hover:!bg-[#EC4139]" />
          </div>
        </div>
      </div>
    </section>
  );
}
