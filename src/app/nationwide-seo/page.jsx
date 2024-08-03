// Components
import { CallAway, ComboPackage, FAQs, Hero, SeoServiceSteps, Testimonial, VersatileSteps, WhyChooseUs } from "@/components"
import Content from "@/components/Content"
// Media
import HeroImg from "media/nationwideseoHero.png"
import ImageOne from "media/nationwideImageOne.png"
import ImageTwo from "media/nationwideImageTwo.png"
import ImageThree from "media/nationwideImageThree.png"
import CallAwayImageWomen from "media/callaway/women.png"

import icon1 from "media/social-media-marketing/speech-bubble.png";
import icon2 from "media/social-media-marketing/customer-centric-approch.png";
import icon3 from "media/social-media-marketing/great-idea.png";

// Why Choose Section Data
const chooseData = [
    [icon1, "Dedicated Support and Expertise", "Our team of national SEO experts is committed to your success. We offer dedicated support and work closely with you to understand your business needs. With our expert guidance and comprehensive nationwide SEO service, you can navigate the complexities of SEO and achieve outstanding results."],
    [icon2, "Comprehensive Reporting and Analytics", "Transparency is key to our approach. We provide detailed reports and analytics to keep you informed about your campaign's progress. Our insights help you understand your ROI and make informed decisions about your marketing strategy."],
    [icon3, "Customized SEO Strategies", "We understand that every business is unique, so we create customized SEO plans that cater to your needs. Our approach ensures maximum effectiveness and efficiency, helping you reach your specific business goals with our top nationwide SEO services."],
  ];

export default function Page() {
    return (
        <main>
            <Hero
                subTitle="Want to see your business dominate the national market?"
                title="Grow Your Business All Over America With Our Nationwide SEO Services"
                desc="Increase your business's online presence with SEO Company's expert nationwide SEO services. Our national SEO experts use cutting-edge strategies to ensure your brand ranks high across the country. Experience exponential growth and outshine your competitors with our proven national SEO services."
                img={HeroImg}
                variant="default"
                marqueeTheme="light"
                titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]"
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
                <WhyChooseUs
                title="Top Reasons to Partner with Our Leading <br class='lg:block hidden'/> Nationwide SEO Company"
                desc="We are the top national SEO agency that offers innovative strategies to boost business growth and visibility. Transform your online presence and position your brand as a market leader by hiring us."
                data={chooseData}   
                />
            </div>
            <div className="xs:py-[30px] md:py-[50px] ">
                <div className="my-5">
                    <Content title={"What is Nationwide SEO?"} desc={"Nationwide SEO involves optimizing your online presence to reach a broad audience across the entire country. At SEO Company, our nationwide SEO services are designed to promote your brand beyond local confines. </br> </br>With the expertise of our national SEO experts, we implement cutting-edge strategies to ensure your business stands out in search results. As the best national SEO Company, we tailor our approach to meet your unique needs, driving growth and visibility on a national scale. Hire our national SEO expert to experience the transformative power of national SEO services and dominate the market from coast to coast."}
                        img1={ImageOne}
                    />
                </div>

                <div className="my-5">
                    <Content direction="flex-row-reverse" title={"The Added Benefits of Hiring Our Nationwide SEO Company for Your Business!"} desc={"Isn't it time to upgrade your business with nationwide SEO?</br></br> SEO Company is the leading national SEO company that offers comprehensive nationwide SEO services to enhance your brand's visibility and reach. Our expert strategies attract a broader audience, increase organic traffic, and boost conversion rates. By choosing our services, you can ensure your business stays ahead of the competition and achieve sustainable growth."}
                        img1={ImageTwo}
                    />
                </div>
                <div className="my-5">
                    <Content title={"How Can You Overcome Nationwide SEO Challenges for Greater Rewards?"} desc={"Creating a successful nationwide SEO strategy involves many attributes essential for making your brand recognizable. It begins with a well-devised marketing strategy where lead generation and nationwide SEO services are pivotal. Lead generation ensures a steady flow of quality leads essential for sales and growth. Despite challenges, nationwide SEO services offer substantial rewards. At SEO Company, we excel in enhancing online visibility through effective strategies like keyword optimization and SEO audits. Let us empower your business to stand out and thrive. Hire nationwide SEO Company today to transform challenges into success!"}
                        img1={ImageThree}
                    />
                </div>
            </div>
            <div className="xs:py-[50px] py-[90px] ">
                <CallAway
                title="Dominate National Rankings with Our SEO Expertise"
                desc="SEO Company offers expert national SEO services to maximize online visibility and drive results. We use strategic keyword targeting, comprehensive audits, and proven techniques to drive businesses to the forefront of search engine results."
                />
            </div>
            <div className="xs:py-[50px] py-[90px] ">
                <SeoServiceSteps
                title={`Expand Your Reach with Our Specialized <br class='hidden md:block' /> <span class="text-[#E1183A]">National SEO Services</span>`}
                description="Explore our comprehensive collection of on-page SEO services designed to improve your website’s performance and visibility."
                items={[
                    {
                        no: "01",
                        title: "SEO Company",
                        content: "offers customized strategies to enhance online visibility, drive traffic, and improve brand recognition, ensuring top search engine rankings nationwide.",
                        borderColor: "border-[#0085F8]"
                    },
                    {
                        no: "02",
                        title: "Keyword Research and Analysis",
                        content: "Our nationwide SEO services begin with comprehensive keyword research to identify the most relevant and high-performing keywords for your business. SEO Company ensures that your content targets the right audience, enhancing your visibility across the country.",
                        borderColor: "border-[#EF4252]"
                    },
                    {
                        no: "03",
                        title: "On-Page Optimization",
                        content: "As a leading nationwide SEO company, we optimize every element of your website, from Meta tags to content, ensuring that search engines can easily find and rank your pages. Our on-page optimization strategies improve your site’s relevance and authority.",
                        borderColor: "border-[#34A854]"
                    },
                    {
                        no: "04",
                        title: "Content Creation and Marketing",
                        content: "SEO Company provides top-notch content creation services, developing engaging and SEO-friendly content that resonates with your audience. Our content marketing efforts help you establish a strong online presence, positioning you as an authority in your industry.",
                        borderColor: "border-[#000000]"
                    },
                    {
                        no: "05",
                        title: "Link Building Services",
                        content: "Our national SEO services include strategic link-building campaigns to enhance your website’s credibility and authority. SEO Company uses ethical and effective techniques to acquire high-quality backlinks from reputable sources.",
                        borderColor: "border-[#F8BA05]"
                    },
                    {
                        no: "06",
                        title: "Technical SEO Audits",
                        content: "We conduct thorough technical SEO audits to identify and fix issues that could hinder your website’s performance. Our experts at SEO Company ensure that your site is fast, secure, and fully optimized for search engines.",
                        borderColor: "border-[#0085F8]"
                    },
                    {
                        no: "07",
                        title: "Region-Specific Content Marketing",
                        content: "By creating geographically relevant content, we help boost your search rankings, engage regional customers, and strengthen your brand's presence in diverse markets. This approach combines national reach with localized appeal for comprehensive SEO success.",
                        borderColor: "border-[#EF4252]"
                    },
                    {
                        no: "08",
                        title: "Competitor Analysis",
                        content: "Our nationwide SEO services include in-depth competitor analysis to understand your market. SEO Company identifies your competitors’ strengths and weaknesses, helping you stay ahead with targeted strategies.",
                        borderColor: "border-[#34A854]"
                    },
                    {
                        no: "09",
                        title: "Analytics and Reporting",
                        content: "SEO Company provides detailed analytics and reporting to track the performance of your nationwide SEO campaigns. Our transparent reporting helps you understand the impact of our efforts and make data-driven decisions.",
                        borderColor: "border-[#000000]"
                    },
                    {
                        no: "10",
                        title: "E-commerce SEO",
                        content: "Our best national SEO Company offers specialized e-commerce SEO services for online retailers. We optimize product listings, categories, and overall site architecture to improve your online store’s visibility and drive sales.",
                        borderColor: "border-[#F8BA05]"
                    },
                    {
                        no: "11",
                        title: "Mobile SEO Optimization",
                        content: "Recognizing the importance of mobile search, SEO Company ensures your website is fully optimized for mobile devices. Our mobile SEO strategies enhance user experience and improve your rankings on mobile search results.",
                        borderColor: "border-[#F8BA05]"
                    }
                ]}
                />

            </div>
            <div className="xs:py-[50px] py-[90px] ">
                <VersatileSteps/>
            </div>
            <div className="xs:py-[50px] py-[90px] ">
                <CallAway
                    CallAwayImage={CallAwayImageWomen}
                    bg="bg-[#E1183A] rounded-[40px]"
                    btnClass="!bg-[#202124] !text-white"
                    btnClass2="!bg-white !text-black"
                    title="Boost Your Rankings with Our Expert National SEO Company – Get Your Free Consultation Today!"
                    desc="Contact us now to get started with our expert national SEO services and watch your business grow."
                />
            </div>
            <div className="xs:py-[50px] py-[30px]">
                <FAQs items={[
                    {
                        title: "What is Nationwide SEO?",
                        content: "Nationwide SEO is a strategy to optimize a website for search visibility across an entire country. It involves targeting national keywords, creating location-specific content, and implementing techniques to rank well in multiple regions simultaneously, enhancing overall online presence and reach."
                    },
                    {
                        title: "What is the average cost for Nationwide SEO services?",
                        content: "The average cost for Nationwide SEO services varies widely, typically ranging from $2,000 to $10,000+ monthly. Factors influencing price include business size, competition, target locations, and service scope. Custom quotes are usually necessary for accurate pricing."
                    },
                    {
                        title: "Is it worth paying for Nationwide SEO services?",
                        content: "Investing in Nationwide SEO services can be worthwhile for businesses targeting a broad audience. It can significantly improve online visibility, drive organic traffic, and increase leads across multiple regions. However, the value depends on your specific business goals and budget."
                    },
                    {
                        title: "How long does it take to see results from Nationwide SEO?",
                        content: "Results from nationwide SEO typically take 4-6 months to become noticeable, with significant improvements often seen within 6-12 months. However, this timeline can vary based on factors like competition, website age, and the aggressiveness of the SEO strategy implemented."
                    },
                    {
                        title: "What's the difference between Local SEO and Nationwide SEO?",
                        content: "Local SEO focuses on optimizing for specific geographic areas, targeting local keywords and listings. Nationwide SEO aims to improve visibility across an entire country, using broader keywords and strategies to reach a wider audience. Local SEO is location-specific, while Nationwide SEO has a broader scope."
                    },
                    {
                        title: "How do you measure the success of a Nationwide SEO campaign?",
                        content: "Success in Nationwide SEO is measured through key metrics like organic traffic growth, keyword rankings across regions, domain authority improvements, conversion rates, and ROI. Tools like Google Analytics and Search Console help track these metrics, providing insights into the campaign's effectiveness and areas for improvement.    "
                    }
                ]} />
            </div>
        </main>
    )
}
