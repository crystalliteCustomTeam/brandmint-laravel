

import seoImage from "media/seovarOne.png"
import seoImageTwo from "media/seovarTwo.png"
import seoImageThree from "media/seovarThree.png"
import seoImageFour from "media/seovarFour.png"
import seoImageFive from "media/seovaFive.png"
import seoImageSix from "media/seovarSix.png"
import Image from "next/image"


export default function VersatileSteps(
    {
    title=`Our National SEO Services Entail<br class="hidden md:block" /> <span class="text-[#E1183A]">A Versatile Series of Steps</span>`,
    desc = `Did you know 60% of national website traffic is sourced from organic searches? Jumpto1 powers your website with creative SEO tactics to improve <br class="hidden xl:block" /> conversions on your website! Here’s what we do to offer you the best nationwide SEO services.`
    }) {
    return (
        <section>
            <div>
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[50px] font-medium" dangerouslySetInnerHTML={{__html: title}} />
                        <p className="py-3 text-[16px] text-center font-light" dangerouslySetInnerHTML={{__html: desc}} />
                    </div>
                    <div className="mt-10 relative">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:gap-3 xl:gap-5">
                            <ColoCard Color="bg-[#3BA155]"  title="Google Analytics Reports" description="With the help of Google Analytics, our company tracks the Nationwide SEO progress, troubleshoot the visibility problems"/>
                            <ColoCard Color="bg-[#ED4F48]" BgImage={seoImageTwo} title="Tangible Results" description="With years of experience, Jumpto1 has bagged a position unbeatable by anyone. We offer our clients tangible results, which are sustainable for many more years to come." />
                            <ColoCard Color="bg-[#3BA155]" BgImage={seoImageThree} title="Complimenting Services" description="With years of experience, Jumpto1 has bagged a position unbeatable by anyone. We offer our clients tangible results, which are sustainable for many more years to come." />
                            <ColoCard Color="bg-[#3BA155]" BgImage={seoImageFour} title="Ingenious SEO Techniques and Tools" description="Ingenious SEO Techniques and Tools
We join on-site optimization with offsite SEO efforts and develop unique tactics that can survive the fluctuations of the digital landscape."/>

                            <ColoCard Color="bg-[#3BA155]" BgImage={seoImageFive} title="Ingenious SEO Techniques and Tools" description="Ingenious SEO Techniques and Tools
We join on-site optimization with offsite SEO efforts and develop unique tactics that can survive the fluctuations of the digital landscape."/>
                          
                            <ColoCard  BgImage={seoImageSix} title="SEO Packages That Doesn’t Cost You Fortune" description="Our local SEO packages don't come as a burden on wallets, and they are accessible for businesses of any size., and offers you conversion-driven local SEO suggestions  "/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ColoCard({
    Color = "bg-[#45A6FA]",
    BgImage = seoImage,
    title = "SEO Packages That Doesn’t Cost You Fortune",
    description = "Our local SEO packages don't come as a burden on wallets, and they are accessible for businesses of any size."
}) {
    return (
        <> <div className={`relative rounded-[20px] md:rounded-[30px] overflow-hidden z-10  h-[330px] xl:h-[430px]   px-[20px] md:px-[15px] lg:px-[30px] xl:px-[40px]  flex flex-col justify-center  `}>
            <Image src={BgImage} fill={true} className="-z-10 object-cover blur-[2px]" alt="SEO company" />
            <h3 className="sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[25px]  text-white mb-5 leading-relaxed font-semibold capitalize [text-shadow:_0_1px_0_rgb(0_0_0_/_40%) ]"> {title}</h3>
            <p className="md:text-[13px]  lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-white font-light  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-justify">{description}</p>
        </div>


        </>


    )
}
