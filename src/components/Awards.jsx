// Components
import { AutoScrollSlider, BoxReveal, BlurFade, CTA } from "@/components";
// Media
import award1 from "media/awards/1.png";
// import award2 from "media/awards/2.png";
import award3 from "media/awards/3.png";
import award4 from "media/awards/4.png";
import award5 from "media/awards/5.png";
import award6 from "media/awards/6.png";
import award7 from "media/awards/7.png";

// Next
import Image from "next/image";

const list = [
  {
    listTitle: "5,000 Fastest Growing Private Companies in America",
    listComapny: "Inc. Magazine 2018-2023",
  },
  {
    listTitle: "Premiere Google Ads Certified Partner",
    listComapny: "4.7 ★ average review rating on Google with 110+ reviews",
  },
  {
    listTitle: "Fastest Growing Companies in North America 2020-2024",
    listComapny: "Recognized By Financial Times",
  },
  {
    listTitle: "4.7 ★ average review rating on Featured Customers",
    listComapny: "1,200+ reviews of satisfied clients",
  },
  {
    listTitle: "50 Fastest Growing Companies in USA",
    listComapny: "Awarded By Business Journal 2017-2021",
  },
];

export default function Awards() {
  return (
    <section>
      <div className="relative  overflow-hidden">
        <div className="container">
          <div className="md:flex items-center justify-between">
            <div className="text-card-foreground md:w-[55%] lg:w-[50%] xl:w-[47%] 2xl:w-[40%] pb-[50px] md:py-[50px] relative before:content-[''] before:absolute before:hidden md:before:block before:w-[1px] before:h-full before:right-0 before:top-0 before:bottom-0 before:bg-[#707070] md:before:right-[-1rem] lg:before:right-[-1.5rem] xl:before:right-[-0.5rem] 2xl:before:right-[-2.5rem]">
              <BoxReveal boxColor="#ec4139">
                <h2 className="font-semibold xs:text-[30px] text-[35px] lg:text-[40px] xl:text-[45px] leading-snug mb-4">
                  Awards <span className="text-[#E1183A]">&  </span>Recognition
                </h2>
              </BoxReveal>
              <BoxReveal boxColor="#ec4139">
                <p className="text-[#202124] text-[16px] leading-relaxed ">Our commitment to excellence in SEO has not gone unnoticed. We take pride in our accolades and industry recognition, which highlight our dedication to delivering outstanding results. These awards reflect our innovative strategies, exceptional service, and the significant impact we've made for our clients. Explore how our expertise sets us apart and drives success in the digital landscape.</p>
              </BoxReveal>
              <BoxReveal boxColor="#ec4139">
                <CTA text="Get Started Now" className="mt-5"/>
                <CTA text="Call Us Now!" className="mt-5 bg-gray-800 ml-4" />
              </BoxReveal>


            </div>
            <div className="md:w-[40%] lg:w-[45%] xl:w-[50%] 2xl:w-[55%] md:absolute md:top-0 md:bottom-0 md:right-0 flex items-center md:overflow-hidden">
              <AutoScrollSlider wrapperClasses="overflow-visible">


                <div  className="grow-0 shrink-0 basis-auto pl-4">
                  <BlurFade delay={0.1} duration={2} inView={true} inViewMargin="-50px">
                    <Image src={award7} alt="books" className="h-[350px] object-contain w-max py-5" />
                  </BlurFade>
                  
                </div>
                <div  className="grow-0 shrink-0 basis-auto pl-4">
                  <BlurFade delay={0.1} duration={2} inView={true} inViewMargin="-50px">
                    <Image src={award3} alt="books" className="h-[350px] object-contain w-max py-5" />
                  </BlurFade>
                  
                </div>
                <div  className="grow-0 shrink-0 basis-auto pl-4">
                  <BlurFade delay={0.1} duration={2} inView={true} inViewMargin="-50px">
                    <Image src={award6} alt="books" className="h-[350px] object-contain w-max py-5" />
                  </BlurFade>
                  
                </div>
                <div  className="grow-0 shrink-0 basis-auto pl-4 ">
                  <BlurFade delay={0.1} duration={2} inView={true} inViewMargin="-50px">
                    <Image src={award4} alt="books" className="h-[350px] object-contain w-max py-5" />
                  </BlurFade>
                  
                </div>


              </AutoScrollSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
