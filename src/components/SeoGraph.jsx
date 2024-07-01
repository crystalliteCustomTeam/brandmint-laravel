import Image from "next/image";

import seoGraph  from "media/seograph.png";

export default function SeoGraph() {
    return (
        <section>
            <div >
                <div className="container">
                    <h2 className="xs:text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[48px] 2xl:text-[58px]   font-semibold leading-snug">Other SEO agencies promise results.
                        We’ve got dozens of case studies to prove it</h2>
                    <div className="my-10">
                        {
                            [
                                "On average, we’ve helped our clients get a 780% return on investment.",
                                "Oh and one time we helped a client go from zero clicks per day to 6,600 clicks per day.",
                                "Don’t believe it? Take a look:"
                            ].map((e, i) => (
                                <p className="my-5 font-medium" key={i}>{e}</p>
                            ))
                        }
                    </div>
                    <div className="mt-[15px]">
                        <div className="flex items-center gap-3">
                            <div className="w-[18px] h-[18px] bg-[#EC4139] rounded-full"></div>
                            <p className="font-medium">Organic traffic</p>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-[2px] h-[30px] bg-[#EC4139]"></div>
                            <p className="font-medium">Brandmint start border</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Image src={seoGraph} alt="SEO company" className="max-w-[90%] lg:max-w-[80%] mx-auto" />
                    </div>
                    <div className="grid grid-cols-3  items-center text-center gap-5 mt-5">
                      
                            {
                                [
                                    ["+570%","Return on Investment"],
                                    ["170,000","Monthly Organic Traffic"],
                                    ["20,600","Ranking Keywords"]
                                ].map(([num,text], i) => (
                                    <div className="my-5 font-medium" key={i}>
                                        <h4 className="text-[#4E81EC] font-semibold sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[58px]">{num}</h4>
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
