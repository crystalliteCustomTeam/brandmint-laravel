// Next
import Image from "next/image";
import { BlurFade, BoxReveal, CTA, FadeText, WordFadeIn } from ".";
// Media
import CallAwayImageMen from "media/callaway/menLaptop.png"

export default function CallAway({
  title = "<h2>Achieve The Best SEO Results  <br class='hidden sm:block md:block lg:hidden'/> By Hiring Us! </h2>",
  desc = "<p>Need expert digital marketing help? We are here for you. We are the #1 SEO company, providing <br /> a complete digital marketing solution for your business.</p>",
  CallAwayImage = CallAwayImageMen,
  bg = "bg-gradient-to-t from-[#202124] to-[#000E2A] rounded-[40px]",
  Banner,
  btnClass = "!bg-[#EC4139] !text-white",
  btnClass2 = "!bg-white !text-black",
  btnText = "Get Started Now!",
  btnText2 = "Contact",
}) {
  return (
    <section>
      <div >
        <div className="container">
          <div className={`relative z-10 xl:py-[60px] px-[20px] lg:pl-[40px] xl:pl-[60px] lg:py-[40px] lg:pt-[50px] py-[50px] ${bg} `}>
            {Banner && <Image src={Banner} alt="banner" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10" priority={true} />}

            <div className="text-white grid md:grid-cols-12 gap-x-5 items-center text-center lg:text-left">
              <div className="lg:col-span-8 col-span-12">
                <FadeText text={title} className="text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] leading-normal font-semibold mb-4" 
                  direction="left"
                 />
                  <FadeText text={desc} className="2xl:text-[16px] text-[14px] leading-normal font-light  lg:max-w-[85%] xl:max-w-full" 
                  direction="left"
                 />
                {/* <p className="2xl:text-[16px] text-[14px] leading-normal font-light  lg:max-w-[85%] xl:max-w-full" dangerouslySetInnerHTML={{ __html: desc }} /> */}
                <div className="flex gap-4 mt-[20px] justify-center lg:justify-start">
                  <CTA text={btnText} className={`${btnClass}`} />
                  <CTA text={btnText2} variant="icon" icon={true} className={`${btnClass2}`} />
                </div>
              </div>
            </div>
            <BlurFade className="lg:absolute w-[90%] xl:max-w-[380px] 2xl:max-w-[450px] lg:max-w-[300px] lg:bottom-[-5px] lg:right-[30px] xl:right-[40px] mx-auto mt-10 lg:block hidden" >
            <Image src={CallAwayImage} alt="Call Away" />
           </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
