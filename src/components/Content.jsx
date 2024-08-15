import Image from "next/image";
import React from "react";
import { BlurFade, BoxReveal, CTA, FadeText, GradualSpacing } from ".";

export default function Content({ subTitle, title, desc, list = false, listingData, classes = "", direction = "", img1, ctaText = "Get Started Now!", ctaText2 = "Contact" }) {
  return (
    <section>
      <div className={` ${classes} bg-cover bg-center`}>
        <div className="container">
          <div className={`flex gap-x-20 gap-y-10 items-center justify-center flex-wrap lg:flex-nowrap ${direction}`}>
            <div className="basis-4/12">
              <BlurFade delay={0.1} duration={1} inView={true}>
                <Image src={img1} alt="SEO company" className="lg:max-w-full max-w-[300px]" width={600} height={500} />
              </BlurFade>
            </div>
            <div className="basis-7/12">
              <div>

                {subTitle && <BoxReveal> <span className="text-[12px]" dangerouslySetInnerHTML={{ __html: subTitle }} />  </BoxReveal>}
                <BoxReveal delay={0.1} duration={1} inView={true} boxColor="#ec4139">
                  {title && <h3 className="2xl:text-[50px] xl:text-[45px] md:text-[40px] text-[30px] font-medium leading-snug mb-3" dangerouslySetInnerHTML={{ __html: title }} />}
                </BoxReveal>
               
                {desc &&
                  <FadeText text={desc} className="2xl:text-[18px] xl:text-[16px] text-[14px] font-light mb-5" />

                }
                {list && (
                  <ol className="list-decimal pl-4 text-[25px] font-semibold space-y-[60px] my-5">
                    {listingData?.map((e, i) => (
                      <li key={i} className="">
                        <h4 className="text-[25px] font-semibold" dangerouslySetInnerHTML={{ __html: e.Heading }} />
                        <span className="block text-[18px] font-light" dangerouslySetInnerHTML={{ __html: e.spanDesc }} />
                      </li>
                    ))}
                  </ol>
                )}

                <div className="flex gap-2 mt-5">
                  <CTA text={ctaText} />
                  <CTA text={ctaText2} variant="icon" icon={true} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
