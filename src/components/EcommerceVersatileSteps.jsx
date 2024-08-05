

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
                        Here’s Why Hiring an eCommerce SEO<br class="hidden md:block" />
                        Company Can Enhance Your ROI
                        </h2>
                        <p className="py-3 text-[16px] text-center font-light">
                        Did you know that 60% of national website traffic comes from organic searches? We <br class="hidden xl:block" /> empower your website with innovative SEO strategies designed to boost conversions.
                        </p>
                    </div>
                    <div className="mt-10 relative">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:gap-3 xl:gap-5">
                            <ColoCard Color="bg-[#0085F8]"  title="eCommerce Content Marketing" description="Boost your brand engagement and improve search engine rankings with SEO Company. Our eCommerce SEO content marketing strategies are crafted to enhance brand awareness and effectively promote your products."/>
                            <ColoCard Color="bg-[#ED4F48]" BgImage={seoImageTwo} title="Custom Ecommerce SEO Strategy" description="SEO Company offers comprehensive online marketing strategies for eCommerce stores, focusing on Shopify SEO audits, keyword research, landing page conversion optimization, and backlink analysis." />
                            <ColoCard Color="bg-[#3BA155]" BgImage={seoImageThree} title="eCommerce PPC
                            Management" description="Expanding your eCommerce store globally involves connecting with your target audience at the opportune moment through the appropriate social media platforms." />
                            <ColoCard Color="bg-[#000000]" BgImage={seoImageFour} title="Keyword Research and Optimization" description="SEO Company specializes in eCommerce SEO, understanding your niche, and enhancing your rankings for targeted search terms. We perform detailed keyword research to curate a strategic list to your website"/>

                            <ColoCard Color="bg-[#F8BA05]" BgImage={seoImageFive} title="Product Image Optimization" description="Uncertain how potential buyers search for products on your eCommerce store. Don't worry about uploading product images online, as SEO Company's product image optimization services, crafted by expert SEO specialists"/>
                          
                            <ColoCard Color="bg-[#0085F8]" BgImage={seoImageSix} title="eCommerce Social Media Marketing" description="Our eCommerce SEO managers collaborate with digital marketing experts to deliver result-driven services, including optimizing social media engagement, providing reviews, and interacting with followers to enhance competitiveness."/>

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
