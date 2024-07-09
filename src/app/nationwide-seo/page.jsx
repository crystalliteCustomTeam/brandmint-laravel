// Components
import { CallAway, ComboPackage, FAQs, Hero, SeoServiceSteps, Testimonial, VersatileSteps, WhyChooseUs } from "@/components"
import Content from "@/components/Content"
// Media
import HeroImg from "media/nationwideseoHero.png"
import ImageOne from "media/nationwideImageOne.png"
import ImageTwo from "media/nationwideImageTwo.png"
import ImageThree from "media/nationwideImageThree.png"
import CallAwayImageWomen from "media/callaway/women.png"

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
                <SeoServiceSteps items={[
                    {
                        no: "01",
                        title: "Website Audit & SEO Assessment",
                        content: "We give you a detailed analysis of the website and content infrastructure. Our nationwide SEO experts conduct a thorough SEO audit of your website to specify technical issues and other SEO troubles so that Jumpto1 can offer reasonable solutions.",
                        borderColor: "border-[#0085F8]"
                    },
                    {
                        no: "02",
                        title: "Detailed Backlink Audit",
                        content: "Our nationwide SEO experts specialists study all links on your site to evaluate their value. We then recognize and delete toxic and spammy links.",
                        borderColor: "border-[#EF4252]"
                    },
                    {
                        no: "03",
                        title: "Demographic Analysis",
                        content: "We help identify extensive parallels and target similar customers in diverse regions in the country. We study your customers thoroughly and determine new forms to extend your reach and encourage loyalty among existing clients.",
                        borderColor: "border-[#34A854]"
                    },
                    {
                        no: "04",
                        title: "Region-Specific Keyword Research",
                        content: "Our team comprehends consumer disparities and employs our expertise for improved keywords research, utilizing a potent blend of short and long-termed keywords.",
                        borderColor: "border-[#000000]"
                    },
                    {
                        no: "05",
                        title: "On-page SEO",
                        content: "Our team carries out a custom-fit actionable plan for your brand and troubleshoots your technical SEO problems. By doing this, we get an insight into how we can boost your website's overall user experience.",
                        borderColor: "border-[#F8BA05]"
                    },
                    {
                        no: "06",
                        title: "National SEO Competitor Analysis",
                        content: "We want you to stay ahead of your competitors. Our SEO experts conduct exhaustive research of your competitors within the region to explore groundbreaking marketing opportunities. We assess your competitors' keyword strategy to identify their weak and strong points. This helps us devise a better and unique marketing plan for achieving your desired results.",
                        borderColor: "border-[#0085F8]"
                    },
                    {
                        no: "07",
                        title: "Region-Specific Content Marketing",
                        content: "To represent your business on a national level, you need to have authentic and relevant content. Our veteran writers develop well-researched content that is optimized with the relevant keywords and enthralling. The write-ups help your brand rank high on the major search engines.",
                        borderColor: "border-[#EF4252]"
                    },
                    {
                        no: "08",
                        title: "Video/Infographics",
                        content: "Our video-production crew formulates optimized promotional videos and infographics to hit the chord with the target audience and CONVERT them.",
                        borderColor: "border-[#34A854]"
                    },
                    {
                        no: "09",
                        title: "Link-building Services",
                        content: "Our SEO experts spring a countrywide portfolio of backlinks from regional directories and relevant high domain authority (DA) guest blogging podiums. Our company assists you in earning better organic visibility via white-hat link-building benefits. In affiliation with ethical and high-domain sites, we increase your national rankings.",
                        borderColor: "border-[#000000]"
                    },
                    {
                        no: "10",
                        title: "Hyper-Local SEO Marketing",
                        content: "Our SEO professionals utilize geo-fencing to target ads toward certain locations our clients want to target in their SEO campaign.",
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
                />
            </div>
            <div className="xs:py-[50px] py-[30px]">
                <FAQs items={[
                    {
                        title: "How long does SEO take to generate results?",
                        content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
                    },
                    {
                        title: "What Includes In on page SEO services?",
                        content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
                    },
                    {
                        title: "Why is SEO important for your business?",
                        content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
                    },
                    {
                        title: "How Does Jumpto1 Carry Its SEO service delivery?",
                        content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
                    },
                    {
                        title: "Why Should You Partner With Us?",
                        content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
                    },
                    {
                        title: "Why is SEO important for your business?",
                        content: "<strong>1. Dedicated team:</strong> Animation Studios literally gives your marketing and creative teams superpowers. You can rapidly bring any idea to life and make it work for your business. <br /> <br /> <strong>2. Fully managed:</strong> Skip the hassle of managing video production on your own and plan, shoot, edit, and produce your content through Animation Studios. <br /> <br /> <strong>3. Results-first:</strong> We’ve battle-tested what works and what doesn’t work over hundreds of different campaigns and for a variety of different businesses and industries."
                    }
                ]} />
            </div>
        </main>
    )
}
