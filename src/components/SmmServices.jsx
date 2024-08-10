import { COLORCARD } from ".";

import One from "media/smmOne.png"
import Two from "media/smmTwo.png"
import Three from "media/smmThree.png"
import Four from "media/smmFour.png"
import Five from "media/smmFive.png"
import Six from "media/smmSix.png"
import Seven from "media/smmSeven.png"
import Eight from "media/smmEght.png"
import Nine from "media/smmNine.png"

export default function SmmServices({
    title = `Social Media Advertising Services <br class="hidden lg:block'"/>
                            That Grows Your Business`,
    desc = `Business Boost? Watch Us Doing Social Media Ad Campaign. Rest Assured, Working With Us Guarantees You <br class="hidden lg:block'"/>
                            More Clients For Your Business!`
}) {
    return (
        <section>
            <div>
                <div className="container">
                    <div>
                        <h2 className="text-[25px] md:text-[35px] lg:text-[40px] 2xl:text-[50px] font-semibold leading-snug text-center" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className=" text-[14px] xl:text-[16px] font-light text-center mt-5" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                    <div className="grid xs:grid-cols-1  grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                        <COLORCARD
                            title="Keyword Search & Strategy"
                            description="Keyword Research & Strategy Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing"
                            btnColor="!bg-[#56BFFF]"
                            btnText="Get Started"
                            image={One}
                        />
                        <COLORCARD
                            title="Link Building"
                            description="Our SEO services excel in strategic link building, a crucial aspect of off-page SEO. We acquire high-quality backlinks from authoritative sources, boosting your site's credibility and search rankings for long-term success."
                            btnColor="!bg-[#EF7D80]"
                            btnText="Get Started"
                            image={Two}
                        />
                        <COLORCARD
                            title="Technical SEO"
                            description="Optimize your site's foundation with our technical SEO expertise. We enhance site speed, mobile-friendliness, and crawlability, ensuring search engines easily index and rank your content. Boost performance and user experience simultaneously."
                            btnColor="!bg-[#6FC683]"
                            btnText="Get Started"
                            image={Three}
                        />

                        <COLORCARD
                            title="Local SEO"
                            description="Dominate your local market with our targeted local SEO strategies. We optimize your Google Business Profile, manage citations, and create location-specific content to boost visibility in local searches and attract nearby customers."
                            btnColor="!bg-[#545051]"
                            btnText="Get Started"
                            image={Four}
                        />
                        <COLORCARD
                            title="On-Page SEO"
                            description="At SEO Company, we perfect your on-page elements. From optimizing meta tags and content to enhancing site structure and internal linking, we ensure every page maximizes its potential for higher rankings."
                            btnColor="!bg-[#E1C044]"
                            btnText="Get Started"
                            image={Five}
                        />
                        <COLORCARD
                            title="Off-Page SEO"
                            description="Elevate your online authority through our comprehensive off-page SEO strategies. We focus on robust link building, brand mentions, and social signals to boost your site's credibility and improve search rankings across the web."
                            btnColor="!bg-[#56BFFF]"
                            btnText="Get Started"
                            image={Six}
                        />
                        <COLORCARD
                            title="Shopify SEO"
                            description="As a specialized SEO service provider, we optimize your Shopify store for maximum visibility. We enhance product pages, streamline site structure, and improve technical elements to boost your e-commerce rankings and drive more sales."
                            btnColor="!bg-[#FE8F9B]"
                            btnText="Get Started"
                            image={Seven}
                        />
                        <COLORCARD
                            title="Ecommerce SEO"
                            description="Boost your online store's visibility and sales with our tailored ecommerce SEO strategies. We optimize product pages, enhance site structure, improve user experience, and implement schema markup to drive targeted traffic and increase conversions."
                            btnColor="!bg-[#63BD7E]"
                            btnText="Get Started"
                            image={Eight}
                        />
                        <COLORCARD
                            title="Content Writing"
                            description="Engage your audience and boost SEO with our expert content writing services. We craft compelling, keyword-optimized articles, blog posts, and web copy that inform, persuade, and drive organic traffic to your site."
                            btnColor="!bg-[#545051]"
                            btnText="Get Started"
                            image={Nine}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
