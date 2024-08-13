import Image from "next/image";

import seoGraph  from "media/seograph.png";
import { BlurFade, NumberTicker, WordFadeIn } from ".";

export default function SeoGraph() {
    return (
        <section>
            <div >
                <div className="container">
                <WordFadeIn words="Many SEO Companies Promise Results. SEO Company Has The Proof To Back It Up." className="text-left xs:text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[48px] 2xl:text-[55px]   font-semibold leading-snug" />

                   
                    <div className="my-10">
                        {
                            [
                                "Our Professional SEO Company proudly presents numerous case studies demonstrating our achievements. Our clients often see an astounding 200% return on their investment.",
                                "In one prominent instance, we increased a client's daily clickthrough rate from 0 to a whopping 6,600.",
                                "Having doubts? Check out the evidence for yourself"
                            ].map((e, i) => (
                                <BlurFade delay={0.1} duration={1} inView={true} inViewMargin="-50px" key={i}>
                                <p className="my-5 font-medium" >{e}</p>
                                </BlurFade>
                            ))
                        }
                    </div>
                  
                    <div className="mt-15">
                    <BlurFade delay={0.1} duration={1} inView={true} inViewMargin="-50px">
                        <Image src={seoGraph} alt="SEO company" className="max-w-[90%] lg:max-w-[80%] mx-auto" />
                        </BlurFade>
                    </div>
                    <div className="grid grid-cols-3  items-center text-center gap-5 mt-5">
                      
                            {
                                [
                                    ["200%","Return on Investment"],
                                    ["170,000","Monthly Organic Traffic"],
                                    ["20,600","Ranking Keywords"]
                                ].map(([num,text], i) => (
                                    <div className="my-5 font-medium" key={i}>
                                        <h4 className=""><NumberTicker value={`${num}`} className="text-[#4E81EC] font-semibold sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[58px]"/></h4>
                                        <p className="xs:text-[8px] sm:text-[14px] md:text-[16px] ">{text}</p>
                                    </div>
                                ))
                            }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
