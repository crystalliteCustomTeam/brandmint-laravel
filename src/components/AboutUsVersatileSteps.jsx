

import seoImage from "media/seovarOne.png"
import seoImageTwo from "media/seovarTwo.png"
import seoImageThree from "media/seovarThree.png"
import seoImageFour from "media/seovarFour.png"
import seoImageFive from "media/seovaFive.png"
import seoImageSix from "media/seovarSix.png"
import Image from "next/image"


export default function AboutUsEcommerceVersatileSteps() {
    return (
        <section>
            <div>
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[50px] font-semibold">
                            Here are SEO Company's SEO <br class="hidden md:block" />
                            Services that are worth your investment
                        </h2>
                        <p className="py-3 text-[16px] text-center font-light">
                            Did you know 60% of national website traffic is sourced from organic searches? SEO Company powers your website with creative SEO tactics to improve
                            conversions on your website! Here’s what we do to offer you the best SEO services.

                        </p>
                    </div>
                    <div className="mt-10 relative">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:gap-3 xl:gap-5">
                            <ColoCard Color="bg-[#0085F8]" BgImage={false} title="Client-first Attitude" description="We treat customers like royalty. To surpass their expectations, our digital marketing gurus go above and beyond, making a world of difference in their online standing. We ensure the client's happy exit from our arena every time!" />
                            <ColoCard Color="bg-[#ED4F48]" BgImage={false} title="Results That Speak For Themselves" description="We propose solutions that are empowered with the ability to sustain the highly-competitive digital landscape. Expect to receive solutions that will sustain for many more years to come!" />
                            <ColoCard Color="bg-[#3BA155]" BgImage={false} title="Sheer Expertise to the Table" description="We share an extensive network of CREATIVES, including seasoned designers, SEO experts, professional content writers, experienced website designers and developers, and other marketing specialists who bring unmatchable expertise to the path to your business excellence." />

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
        <> <div className={` ${Color} relative rounded-[20px] md:rounded-[30px] overflow-hidden z-10  h-[330px] xl:h-[430px]   px-[20px] md:px-[15px] lg:px-[30px] xl:px-[40px]  flex flex-col justify-center text-center  `}>
            {BgImage &&
                <Image src={BgImage} fill={true} className="-z-10 object-cover blur-[2px]" alt="SEO company" />
            }
            <h3 className="sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[25px]  text-white mb-5 leading-relaxed font-semibold capitalize [text-shadow:_0_1px_0_rgb(0_0_0_/_40%) ]"> {title}</h3>
            <p className="md:text-[13px]  lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-white font-light  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{description}</p>
        </div>


        </>


    )
}
