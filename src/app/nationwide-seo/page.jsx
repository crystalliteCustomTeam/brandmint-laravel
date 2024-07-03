// Components
import {  CallAway, ComboPackage, Hero, SeoServiceSteps, Testimonial, WhyChooseUs } from "@/components"
import Content from "@/components/Content"
// Media
import HeroImg from "media/nationwideseoHero.png"
import ImageOne from "media/nationwideImageOne.png"
import ImageTwo from "media/nationwideImageTwo.png"
import ImageThree from "media/nationwideImageThree.png"

export default function Page() {
    return (
        <main>
            <Hero
                subTitle="Nationwide SEO Services"
                title="Mind-Blowing Nationwide SEO Services To Help You Blow Out Your Competition!"
                desc="Local SEO is always a smart move to help your business acquire qualified leads and convert them into sales. So, what’s stopping you from getting BIGGER and VISIBLE? Now every “business near me” query will bring your company in front of the ideal customers. Have our top-leading local SEO Company on your side, and let us combat the digital marketing tides."
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss="xs:text-[30px] sm:text-[35px] lg:text-[30px] xl:text-[42px] 2xl:text-[55px]"
                spaceBottom="pb-0"
                marqueeCss="pb-[80px] pt-[50px] "
                imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
                gridleft="col-span-12 lg:col-span-8"
                gridright="col-span-12 md:col-span-4"
            />
            <div className="xs:py-[50px] py-[90px]">
                <Testimonial />
            </div>
            <div>
                <ComboPackage />
            </div>
            <div className="xs:py-[50px] py-[90px] ">
                <WhyChooseUs />
            </div>
            <div className="xs:py-[50px] py-[90px] ">
                <div className="my-10">
                <Content title={"What Is Nationwide SEO?"} desc={"As the name suggests, nationwide SEO targets audiences across the country. Unlike local SEO efforts that focus on ranking geography-based keywords, national SEO focuses on comprehensive and more generic keywords. The aim of doing nationwide SEO is to reach scattered consumers and help your business extend both locally and internationally. </br> </br>Nationwide SEO is more than just comprehensive keyword research and website optimization. It is all about fine-tuning the business website to help brands expand and grow beyond expectations. To cut a long story short, it is a systematic process that entails the optimization of a business website around search engine attributes. This methodology is aimed at improving the site’s local rankings across a scattered geographic locality instead of a unique geographic region or no geographical proximity at all!"}
                img1={ImageOne}
                />
                </div>
               
                <div className="my-10">
                <Content direction="flex-row-reverse" title={"What Added Benefits You Get For Doing Nationwide SEO For Your Business?"} desc={"If you are a business owner and offer your services nationwide, you must be aware of how challenging it is to spread the word and garner a significant market share. With nationwide SEO, there is no more fear of losing clients or sustaining them.</br></br> To say the least, nationwide SEO turns website traffic into higher ROI, which indeed is everything for a business.</br></br>So if you run a business, no matter the size, have us on your side to leave a giant digital footprint and gain coast-to-coast success!"}
                img1={ImageTwo}
                />
                </div>
                <div className="my-10">
                <Content title={"How Our Nationwide SEO Helps Your Business Gain A Competitive Edge?"} desc={"Many attributes go into the process of creating a successful local SEO strategy for making the brand recognizable. It starts with devising a marketing strategy where lead generation and local SEO services hold a prominent position. It goes unsaid that lead generation serves as the lifeblood of any business. Without a steady stream of quality leads, firms of all shapes and sizes toil to make sales and grow. And, let alone local SEO acts as a funnel attracting prospects to your business."}
                img1={ImageThree}
                />
                </div>
            </div>
            <div className="xs:py-[50px] py-[90px] ">
                <CallAway />
            </div>
            <div className="xs:py-[50px] py-[90px] ">
                <SeoServiceSteps />
            </div>
        </main>
    )
}
