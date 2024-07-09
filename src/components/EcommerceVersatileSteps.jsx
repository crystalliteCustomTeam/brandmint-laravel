

import seoImage from "media/seovarOne.png"
import seoImageTwo from "media/seovarTwo.png"
import seoImageThree from "media/seovarThree.png"
import seoImageFour from "media/seovarFour.png"
import seoImageFive from "media/seovaFive.png"
import seoImageSix from "media/seovarSix.png"
import Image from "next/image"


export default function EcommerceVersatileSteps() {
    return (
        <section>
            <div>
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-[26px] sm:text-[38px] lg:text-[45px] xl:text-[50px] font-semibold">
                            Here are Jumpto1's eCommerce SEO<br class="hidden md:block" />
                            Services that are worth your investment
                        </h2>
                        <p className="py-3 text-[16px] text-center font-light">
                            Did you know 60% of national website traffic is sourced from organic searches? Jumpto1 powers your website with creative SEO tactics to improve <br class="hidden xl:block" /> conversions on your website! Here’s what we do to offer you the best nationwide SEO services.
                        </p>
                    </div>
                    <div className="mt-10 relative">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:gap-3 xl:gap-5">
                            <ColoCard Color="bg-[#0085F8]"  title="eCommerce Content Marketing" description="Enhance your brand engagement and rank better on search engines with Jumpto1. Our eCommerce SEO content marketing strategies focus on creating brand awareness and advertising your products more effectively. We create regular blog posts, product descriptions, social media content and enhance brand authority."/>
                            <ColoCard Color="bg-[#ED4F48]" BgImage={seoImageTwo} title="Custom Ecommerce SEO Strategy" description="Simply having an eCommerce store or social media page is no longer sufficient to position your product in front of your target market. It would be best to have a holistic online marketing strategy to promote your products and services to the targeted audience and grow your brand. At Jumpto1, we conduct Shopify SEO audits, keyword research, landing page conversion, and backlink analyses." />
                            <ColoCard Color="bg-[#3BA155]" BgImage={seoImageThree} title="eCommerce PPC
                            Management" description="eCommerce optimization is growing your eCommerce store across the globe to connect your online store with the targeted audience at the right time using the right social media platform. Our eCommerce marketing company conducts advertising analyses to help you obtain qualified traffic from high-intent customers. We offer on-page and off-page optimization, paid advertising, and eCommerce remarketing." />
                            <ColoCard Color="bg-[#000000]" BgImage={seoImageFour} title="Keyword Research and Optimization" description="Jumpto1 is an eCommerce SEO company that understands your niche and boosts your ranking for targeted search terms. Our SEO specialist reviews the keywords your website is currently ranking for and conducts additional keyword research to create a list that makes the most sense for your website and the digital landscape."/>

                            <ColoCard Color="bg-[#F8BA05]" BgImage={seoImageFive} title="Product Image Optimization" description="Are you uncertain how buyers look for what you sell on your eCommerce store? There is no need to fear uploading product images online because our product image optimization Services, designed by SEO experts, help your product gain visibility on the top pages your target audience is searching for."/>
                          
                            <ColoCard Color="bg-[#0085F8]" BgImage={seoImageSix} title="eCommerce Social Media Marketing" description="Our eCommerce SEO managers work closely with our digital marketing experts to provide results-driven eCommerce SEO marketing services. We execute organic and paid social media marketing strategies to increase your competitive edge. Our team optimizes your social media engagement, provides reviews, interacts with your followers, and conveys valuable content."/>

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
        <> <div className={`relative rounded-[20px] md:rounded-[30px] overflow-hidden z-10  h-[330px] xl:h-[430px]   px-[20px] md:px-[15px] lg:px-[30px] xl:px-[40px]  flex flex-col justify-center text-center `}>
            <Image src={BgImage} fill={true} className="-z-10 object-cover blur-[2px]" alt="SEO company" />
            <h3 className="sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[25px]  text-white mb-5 leading-relaxed font-semibold capitalize [text-shadow:_0_1px_0_rgb(0_0_0_/_40%) ]"> {title}</h3>
            <p className="md:text-[13px]  lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-white font-light  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{description}</p>
        </div>


        </>


    )
}
