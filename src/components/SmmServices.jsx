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

export default function SmmServices() {
    return (
        <section>
            <div>
                <div className="container">
                    <div>
                        <h2 className="text-[25px] md:text-[35px] lg:text-[40px] 2xl:text-[50px] font-semibold leading-snug text-center">Social Media Advertising Services <br className="hidden lg:block'"/>
                            That Grows Your Business</h2>
                        <p className=" text-[14px] xl:text-[16px] font-light text-center mt-5">Business Boost? Watch Us Doing Social Media Ad Campaign. Rest Assured, Working With Us Guarantees You <br className="hidden lg:block'"/>
                            More Clients For Your Business!</p>
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
                            description="If your target audience is present on YouTube, then our experts cash bring you closer to your visual marketing goal. We bring you subscriptions, likes, and shares on your videos or channels with carefully targeted captions and tags."
                            btnColor="!bg-[#EF7D80]"
                            btnText="Get Started"
                            image={Two}
                        />
                        <COLORCARD
                            title="Technical SEO"
                            description="Instagram is home to billions of active users scrolling through news feeds every day. We bring your brand closer to your audience with Instagram availability with thousands of daily views and interactions with potential customers."
                            btnColor="!bg-[#6FC683]"
                            btnText="Get Started"
                            image={Three}
                        />

                        <COLORCARD
                            title="Local SEO"
                            description="Our team of professional in-house Twitter marketing experts, media strategists, and content creators drive attention by building brand awareness, influencer relations, and follower engagement."
                            btnColor="!bg-[#545051]"
                            btnText="Get Started"
                            image={Four}
                        />
                        <COLORCARD
                            title="On-Page SEO"
                            description="If your target audience is present on YouTube, then our experts cash bring you closer to your visual marketing goal. We bring you subscriptions, likes, and shares on your videos or channels with carefully targeted captions and tags."
                            btnColor="!bg-[#E1C044]"
                            btnText="Get Started"
                            image={Five}
                        />
                        <COLORCARD
                            title="Off-Page SEO"
                            description="Instagram is home to billions of active users scrolling through news feeds every day. We bring your brand closer to your audience with Instagram availability with thousands of daily views and interactions with potential customers."
                            btnColor="!bg-[#56BFFF]"
                            btnText="Get Started"
                            image={Six}
                        />
                        <COLORCARD
                            title="Shopify SEO"
                            description="Keyword Research & Strategy Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing "
                            btnColor="!bg-[#FE8F9B]"
                            btnText="Get Started"
                            image={Seven}
                        />
                        <COLORCARD
                            title="Ecommerce SEO"
                            description="If your target audience is present on YouTube, then our experts cash bring you closer to your visual marketing goal. We bring you subscriptions, likes, and shares on your videos or channels with carefully targeted captions and tags."
                            btnColor="!bg-[#63BD7E]"
                            btnText="Get Started"
                            image={Eight}
                        />
                        <COLORCARD
                            title="Content Writing"
                            description="If your target audience is present on YouTube, then our experts cash bring you closer to your visual marketing goal. We bring you subscriptions, likes, and shares on your videos or channels with carefully targeted captions and tags."
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
