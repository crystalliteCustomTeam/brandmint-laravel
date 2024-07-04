// Components
import { Awards, CallAway, ComboPackage, Contact, FAQs, Hero, Package, Platforms, SeoSteps, ServicesTabs, TechnologiesTabs, Testimonial, WhyChooseUs } from "@/components"
// Media
import HeroImg from "media/offpageseoHero.png"
import one from "media/off-page-seo-hurdles/1.png";
import two from "media/off-page-seo-hurdles/2.png";
import three from "media/off-page-seo-hurdles/3.png";
import four from "media/off-page-seo-hurdles/4.png";
import five from "media/off-page-seo-hurdles/5.png";
import six from "media/off-page-seo-hurdles/6.png";
import seven from "media/off-page-seo-hurdles/7.png";
import wordpress from "media/technologies-tabs/wordpress.svg";
import CallAwayImageWomen from "media/callaway/women.png";

export default function Page() {
    return (
        <main>
            <Hero
                subTitle="Professional Offline Off page SEO"
                title="Services That Grow Traffic And Increase Revenue"
                desc="Jump To 1 is the best SEO service provider that guarantees your Website gains more Sales , more Traffic, and maximizes your return on investment. Whether your target market is Local SEO or Nationwide SEO, we have got you covered. Call us now, and let one of our SEO specialist help your website Jump To 1."
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss="xs:text-[30px] sm:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px]"
                spaceBottom="pb-0"
                marqueeCss="pb-[80px] pt-[50px] xs:pt-[50px] sm:pt-[80px]"
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
            />
            <div>
                <Platforms variant={"logo"} images={
                    [
                        one,
                        two,
                        three,
                        four,
                        five,
                        six,
                        seven
                    ]
                } />
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <Package id={1} />
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <Testimonial />
            </div>
            <div>
                <ComboPackage />
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <WhyChooseUs />
            </div>
            <div className="xs:py-[50px] py-[90px]" >
                <SeoSteps />
            </div>
            <div className="xs:py-[50px] py-[90px]" >
                <Contact />
            </div>
            <div className="xs:py-[50px] py-[90px]" >
                < TechnologiesTabs />
            </div>
            <div className="xs:py-[50px] py-[90px]">
                <CallAway CallAwayImage={CallAwayImageWomen} bg="bg-[#E1183A] rounded-[40px]" btnClass="!bg-[#202124] !text-white" btnClass2="!bg-white !text-black" />
            </div>
            <div className="xs:py-[50px] py-[90px]" >
                <FAQs
                    items={[
                        {
                            title: "How long does SEO take to generate results?",
                            content:
                                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                        {
                            title: "What Includes In on page SEO services?",
                            content:
                                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                        {
                            title: "Why is SEO important for your business?",
                            content:
                                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                        {
                            title: "How Does Jumpto1 Carry Its SEO service delivery?",
                            content:
                                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                        {
                            title: "Why Should You Partner With Us?",
                            content:
                                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                        {
                            title: "Why is SEO important for your business?",
                            content:
                                "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries.",
                        },
                    ]}
                />
            </div>
        </main>
    )
}
