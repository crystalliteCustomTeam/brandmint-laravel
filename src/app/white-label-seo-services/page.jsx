// Components
import { Awards, CallAway, Contact, FAQs, Hero, Package, SeoServiceSteps, Testimonial, VersatileSteps } from "@/components";
import Content from "@/components/Content";
// Media
import HeroImg from "media/whitelableHero.png";
import labelSeo from "media/labelSeo.png";
import whitelabel from "media/whitelabel1.png";
import CallAwayImageWomen from "media/callaway/women.png";

import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";

import seoImage from "media/seovarOne.png"
import seoImageTwo from "media/seovarTwo.png"
import seoImageThree from "media/seovarThree.png"
import seoImageFour from "media/seovarFour.png"
import seoImageFive from "media/seovaFive.png"
import seoImageSix from "media/seovarSix.png"

const dataTest = [
  {
    shadowColor: "bg-[#4E81EC]",
    review: "Working with SEO Company has been a game-changer for our agency. Their white label SEO services are top-notch, allowing us to scale our offerings without compromising quality. Highly recommended for digital marketers looking to boost client satisfaction and profitability.",
    testimonialName: "Maria Parsons",
    testimonialImage: philip
  },
  {
    shadowColor: "bg-[#E1183A]",
    review: "As a reseller, I rely on SEO Company’s expertise in WHITE LABEL SEO. They handle the complexities seamlessly, ensuring our clients receive exceptional results. Partnering with them has significantly enhanced our service portfolio and client retention rates.",
    testimonialName: "Dale Harvey",
    testimonialImage: chris
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "SEO Company stands out among white label SEO providers. Their commitment to excellence and results-driven approach have helped our agency excel in a competitive market. Trustworthy, reliable, and highly effective—couldn’t ask for more!",
    testimonialName: "Marvin Duncan",
    testimonialImage: bilal
  },
  {
    shadowColor: "bg-[#24BF5A]",
    review: "Choosing SEO Company for white label SEO services was one of our best decisions. Their dedication to our success is evident in every campaign they manage. They truly understand the intricacies of digital marketing and deliver results that exceed expectations.",
    testimonialName: "Ernest Griffith",
    testimonialImage: elissa
  },
  {
    shadowColor: "bg-[#4E81EC]",
    review: "Partnering with SEO Company as our white label SEO company has been instrumental in our growth. Their tailored solutions and proactive support have allowed us to focus on client relationships while they handle the technical aspects flawlessly.",
    testimonialName: "Carroll Marsh",
    testimonialImage: joe
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "We've been collaborating with SEO Company for reseller SEO services and couldn't be happier. Their expertise and professionalism make them one of the industry's best White Label SEO FIRMS. Highly recommended for agencies looking to elevate their SEO offerings.",
    testimonialName: "Roberto Bowen",
    testimonialImage: moses
  },
];

let cardData = [
  ["Using Google Analytics", seoImage, "Our company monitors SEO progress and addresses visibility issues effectively."],
  ["Concrete Outcomes", seoImageTwo, "Benefiting from years of expertise, SEO Company secures an unmatched position. We deliver our clients tangible, enduring results that stand the test of time."],
  ["Supplementary Offerings", seoImageThree, "Drawing on years of experience, SEO Company has established an unparalleled reputation. We provide our clients with tangible, enduring results that remain sustainable for years to come."],
  ["Creative SEO Strategies and Tools", seoImageFour, "We combine on-site optimization with off-site SEO efforts and devise innovative tactics designed to withstand the changes in the digital scene."],
  ["Innovative SEO Methods and Tools", seoImageFive, "We integrate on-site optimization with off-site SEO strategies, crafting distinctive tactics built to direct the shifts in the digital environment."],
  ["Affordable SEO Packages", seoImageSix, "Our local SEO packages are budget-friendly and accessible to businesses of all sizes, providing conversion-focused local SEO recommendations."]
];

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="White Label SEO Services"
        title="Boost Your Clients' Rankings with Our White Label SEO Services"
        desc="Are you looking to nurture strategic partnerships with fellow digital marketing agencies that deliver premium marketing solutions? Fret not. At SEO Company, we ensure profitability every step of the way. Our white label SEO services empower digital firms globally to achieve profitability effortlessly."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[80px] pt-[90px] xs:pt-[50px] sm:pt-[90px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        gridleft="col-span-12 lg:col-span-7"
        gridright="col-span-12 lg:col-span-5"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial
          title="Our Vault of Customer Satisfaction"
          desc="See what our customers have to say about us"
          data={dataTest}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Contact
          title={`Schedule a <strong>Free Strategy </strong> <br class="hidden sm:block"/>
        Session with Our White Label <br class="hidden sm:block"/>
        SEO Providers for the <br class="hidden sm:block"/>
        <strong> Best Results</strong>`}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Package id={1}
          title={`Topple Your Competition Without <br class='hidden md:block' />
            <span class="text-[#E1183A]">Draining Your Budget</span>`}
          desc="At SEO Company, we offer nothing but the best to our clients. We offer multiple white label SEO solutions to best align with your diverse budgets and business goals."
        />
      </div>
      <div className="xs:py-[30px] md:py-[50px]">
        <div className="my-5">
          <Content
            title={"Why Should Your Business Consider White Label SEO Services?"}
            desc={
              "Partnering with a white label SEO provider can equip your website with essential backlinks, on-page SEO, and content strategies. With that said, we effectively serve your local customer base, especially for companies lacking internal resources. With SEO Company, you can broaden your SEO service capabilities without the need to hire additional SEO staff. With our extensive experience in white label SEO marketing, we guarantee result-driven services that will impress your clients effectively."
            }
            img1={labelSeo}
          />
        </div>

        <div className="my-5">
          <Content
            title={"Why Choose SEO Company For Your White Label SEO Needs?"}
            desc={
              "SEO Company is your comprehensive destination for White Label SEO solutions. We offer a complete suite of white label SEO services, proven to boost organic traffic, online authority, and conversions across numerous websites. We handle every aspect flawlessly from keyword research to content creation and off-page optimization. With us, there's no need to build an internal team or worry about capacity constraints. Our White Label SEO services equip you with the tools to meet client deliverables effectively. It's time to expand your business capabilities with our ready-to-deploy White Label SEO solutions, seamlessly integrating into your service offerings."
            }
            img1={whitelabel}
            direction="flex-row-reverse"
          />
        </div>
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Need a Digital Marketing Expert? Look No Further!"
          desc="We are your ultimate one-stop white label SEO provider, offering solutions to all your online business challenges."
          titleClass="!text-[24px] sm:!text-[32px]  lg:!text-[40px] xl:!text-[45px] 2xl:!text-[55px]"
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <SeoServiceSteps
          title="8 Advantages Your Agency Gains from <br class='lg:block hidden'/> <span class='text-[#E1183A]'>Partnering with Our White Label SEO Services</span>"
          description="Our White Label SEO Services Providing the Edge to Your Digital Agency"
          items={[
            {
              no: "01",
              title: "Team Of Experts",
              content:
                "As your company's recognition grows, the need for quality links will increase, necessitating more SEO staff. This can consume more of your time and reduce work efficiency. At SEO Company, our team of professionals is ready to meet your SEO needs.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "02",
              title: "Agency Growth",
              content:
                "Our pre-packaged SEO services enhance your agency's offerings, allowing you to deliver essential work to your clients without hiring an in-house team. SEO Company's White Label SEO services provide the resources to fulfill client deliverables.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "03",
              title: "Improved SEO Performance",
              content:
                "Our white-hat link-building services enable you to monitor campaign progress with a brandable SEO dashboard, showcasing keyword rankings, Google Analytics, and traffic improvements. We assist in creating customizable White Label SEO reports that can be sent directly to clients, all available through our White Label SEO company.",
              borderColor: "border-[#34A854]",
            },
            {
              no: "04",
              title: "SEO Tools",
              content:
                "In-house SEO requires costly tools. By subscribing to our White Label SEO services, you benefit from SEO Company's investment in these tools, helping you save on expenses.",
              borderColor: "border-[#000000]",
            },
            {
              no: "05",
              title: "Quality Backlinks",
              content:
                "Link building requires expertise. By choosing our White Label SEO services, you are assured of high-quality backlinks. These backlinks send strong signals to major search engines like Google, Yahoo, and Bing, demonstrating competence and expertise. Quality backlinks improve your website's rankings and attract more potential clients.",
              borderColor: "border-[#F8BA05]",
            },
            {
              no: "06",
              title: "Work Freedom",
              content:
                "White Label SEO is cost-effective. Our White Label SEO company offers wholesale pricing, allowing you the freedom to set your client markup.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "07",
              title: "Increased revenues",
              content:
                "Our White Label SEO tools help generate leads and improve customer satisfaction, resulting in more reliable clients and increased revenues for your digital agency. Our services save you time and money, enhancing business efficiency and profitability.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "08",
              title: "Experts On Your Side",
              content:
                "Providing top SEO advice requires years of expertise and continuous adaptation to changing search engine algorithms. At SEO Company, we optimize your clients' websites and implement effective SEO strategies full-time.",
              borderColor: "border-[#34A854]",
            },
          ]}
        />
      </div>

      <div className="xs:py-[50px] py-[90px] ">
        <VersatileSteps
          title={"Our Complete White Label SEO Services Encompass Diverse Strategies"}
          desc={"At SEO Company, we empower your website through innovative SEO approaches aimed at enhancing your website's conversion rates!"}
          cardData={cardData}
        />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway CallAwayImage={CallAwayImageWomen} bg="bg-[#E1183A] rounded-[40px]" btnClass="!bg-[#202124] !text-white" btnClass2="!bg-white !text-black"
          title="Expert Digital Marketing Just a Phone Call Away"
          desc="Look no further than SEO Company for all-inclusive White Label SEO solutions. We are your ultimate one-stop shop for resolving all your online business challenges."
          titleClass="!text-[24px] sm:!text-[32px]  lg:!text-[40px] xl:!text-[45px] 2xl:!text-[55px]"
        />
      </div>


      <div className="xs:py-[50px] py-[90px]">
        <FAQs
          items={[
            {
              title: "How long does SEO take to see results?",
              content:
                "SEO typically takes time to yield noticeable results, often several months depending on various factors such as competition, industry, and current website status.",
            },
            {
              title: "What is included in on-page SEO services?",
              content:
                "On-page SEO services encompass optimizing web content, meta tags, headings, and internal links to enhance search engine rankings and user experience.",
            },
            {
              title: "Why is SEO crucial for your business?",
              content:
                "SEO is crucial for your business as it boosts online visibility, drives organic traffic, and enhances credibility and conversions.",
            },
            {
              title: "How does SEO Company execute its SEO service delivery?",
              content:
                "SEO Company implements its SEO services through comprehensive strategies, including keyword research, content optimization, technical SEO, and ongoing adjustments.",
            },
            {
              title: "What are the benefits of partnering with us?",
              content:
                "Partnering with us provides access to top-tier White Label SEO services, ensuring effective solutions for your clients without the need for in-house expertise.",
            },
            {
              title: "Why is SEO important for your business?",
              content:
                "SEO is essential for maintaining online visibility, attracting potential customers, and remaining competitive in today's digital scene.",
            },
          ]}
        />
      </div>
    </main>
  );
}
