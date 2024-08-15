

import seoImage from "media/seovarOne.png"
import seoImageTwo from "media/seovarTwo.png"
import seoImageThree from "media/seovarThree.png"
import seoImageFour from "media/seovarFour.png"
import seoImageFive from "media/seovaFive.png"
import seoImageSix from "media/seovarSix.png"
import Image from "next/image"
import { BlurFade } from "."


export default function VersatileSteps({
    title = `Key Features of Our<br class="hidden md:block" /> <span class="text-[#E1183A]">National SEO Services</span>`,
    desc = "From comprehensive keyword research to mobile optimization, our tailored national SEO packages are designed to achieve your business goals.",
    cardData = [
        ["Comprehensive Keyword Research", seoImage, "Our national SEO services begin with in-depth keyword research to identify the most practical terms for your business. As a professional nationwide SEO company, we ensure your content targets high-performing keywords to maximize visibility."],
        ["Custom National SEO Packages", seoImageTwo, "SEO Company offers tailored national SEO packages to meet your business needs. Our customized solutions ensure you get the most value and impact from your investment in nationwide SEO services."],
        ["Advanced On-Page Optimization", seoImageThree, "We provide expert on-page optimization to enhance your website’s relevance and authority. Our nationwide SEO Company focuses on optimizing Meta tags, content, and site structure to improve your search engine rankings."],
        ["Quality Link Building", seoImageFour, "Our national SEO services include strategic link-building campaigns to boost your website’s credibility. By acquiring high-quality backlinks, SEO Company helps you improve your domain authority and search engine positioning."],
        ["Detailed Analytics and Reporting", seoImageFive, "SEO Company offers comprehensive analytics and reporting to track the performance of your nationwide SEO efforts. Our detailed reports provide insights into traffic, rankings, and conversions, helping you make informed decisions."],
        ["Mobile SEO Optimization", seoImageSix, "Recognizing the growing importance of mobile search, our national SEO services include mobile optimization strategies. SEO Company ensures your website is mobile-friendly, providing a seamless user experience and improved rankings on mobile search results."]
    ]
}) {
    return (
        <section>
            <div>
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[50px] font-semibold" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="py-3 text-[16px] text-center font-light">
                            {desc}
                        </p>
                    </div>
                    <div className="mt-10 relative">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:gap-3 xl:gap-5">
                            {
                                cardData.map(([title, image, desc], i) => (
                                    <BlurFade delay={0.1*i} duration={1} inView={true} key={i}>
                                        <ColoCard  Color="bg-[#3BA155]" BgImage={image} title={title} description={desc} />
                                    </BlurFade>
                                ))
                            }
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
