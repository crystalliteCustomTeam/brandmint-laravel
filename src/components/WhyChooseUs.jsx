"use client";
// Next
import Image from "next/image";
import { useState } from "react";

// Media
import icon1 from "media/social-media-marketing/speech-bubble.png";
import icon2 from "media/social-media-marketing/customer-centric-approch.png";
import icon3 from "media/social-media-marketing/great-idea.png";
import { BlurFade, FadeText, WordFadeIn } from ".";

const WhyChooseUs = ({
  subTitle = "Why Choose Us",
  title = "<h2>Because We Help Your Business Get <br class='lg:block hidden'/> Bigger Every Passing Day!</h2>",
  desc = "<p>We know, and you know too, that business survival is so challenging in the internet-focused world. And when 90% of U.S. firms use social media, it becomes even more challenging to survive and keep moving. However, with a sound digital marketing agency that doesn't use cookie-cutter marketing, brands can enjoy impressive growth and sales. But the question arises, where to find such an authentic marketing agency? </p>",
  data = [
    [icon1, "Clear <br/> Communication", "We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication."],
    [icon2, "Customer-Centric <br/> Approch", "We prioritize our client's success, understand your unique needs, and deliver tailored solutions that drive your"],
    [icon3, "Innovation and <br/> Excellence", "We consistently deliver innovative, highquality solutions as a team on the cutting edge of technology trends."],
  ],
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <section>
      <div>
        <div className="container">
          <div className=" mb-16">
            {subTitle && (
              <BlurFade delay={0.1} duration={1} inView={true} >
                <span className="md:text-[20px] text-[16px] lg:text-[25px] bg-[#F8BF19] w-max mx-auto rounded-full md:py-3 py-2 px-[2.5rem] block leading-tight font-normal uppercase text-black mb-6 shadow-sm">
                  {subTitle}
                </span>
              </BlurFade>
            )}
            {title &&
              <FadeText text={title} className={`text-center text-[28px] sm:text-[32px] lg:text-[40px] xl:text-[50px] font-semibold text-[#202124] mx-auto text-[#202124]"  mb-5`} />
            }
            {desc &&
              <FadeText text={desc} className={`text-[14px] lg:text-[16px] mx-auto block leading-[26px] font-light text-[#202124] md:text-center !text-justify" `} />
            }
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-3">
            {data?.map(([image, title, desc], i) => (
                <BlurFade delay={0.1*i} duration={1} inView={true}   key={i}>
              <div
              
                onMouseEnter={() => setActiveIndex(i)}
                className={`relative flex flex-col justify-center gap-3 md:min-h-[450px] min-h-[400px] hover:border-[1px] hover:border-solid hover:shadow-lg lg:px-[25px] px-[15px] lg:py-[50px] py-[30px] hover:rounded-[30px] group ${i === activeIndex ? "border-[1px] shadow-lg border-solid rounded-[30px]" : ""
                  }`}
              >
                <div className={`xl:w-[20%] lg:w-[30%] md:w-[35%] w-max group-hover:p-5 p-5 h-full rounded-full mb-[0px] ${i === activeIndex ? "bg-[#EC4139] p-5" : ""}`}>
                  <Image
                    src={image}
                    alt="SEO company"
                    className={`md:w-[45px] w-[30px] relative z-20 transition-all duration-400 ease-in-out ${i === activeIndex ? "brightness-0 invert" : ""}`}
                    width={50}
                    height={50}
                    quality={95}
                  />
                </div>

                <h3 className={`xl:text-[30px] md:text-[20px] text-[25px] font-semibold border-b-[4px]  ${i === activeIndex ? "border-b-[#EC4139] " : ""} transition-all duration-500 border-b-[#EBEBEB] pb-5 mb-5`} dangerouslySetInnerHTML={{ __html: title }} />
                <p className="xl:text-[16px] text-[14px] font-light" dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
