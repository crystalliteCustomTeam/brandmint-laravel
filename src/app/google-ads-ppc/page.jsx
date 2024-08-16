// Components
import { CallAway, Contact, FAQs, Hero, Industries, Package, Testimonial, WhyChooseUs } from "@/components";
import ImageComponent from "@/components/ImageComponent";

// Media
import HeroImg from "media/googleAdsHero.png";

import industries1 from "media/industries/automotive.png";
import industries2 from "media/industries/buisness.png";
import industries3 from "media/industries/construction.png";
import industries4 from "media/industries/education.png";
import industries5 from "media/industries/travel.png";

import icon1 from "media/social-media-marketing/speech-bubble.png";
import icon2 from "media/social-media-marketing/customer-centric-approch.png";
import icon3 from "media/social-media-marketing/great-idea.png";

import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";


// Why Choose Section Data
const chooseData = [
  [icon1, "Targeted Ad Creation", "We'll design high-converting ads that resonate with your ideal customers, whether it's text ads for search results or captivating display ads."],
  [icon2, "Strategic Bidding & Budget Management", "Our experts will handle bidding to ensure your ads appear in the most prominent positions while staying within budget."],
  [icon3, "In-depth Performance Tracking", "We'll closely monitor your campaigns, analyze results, and make data-driven adjustments to maximize your return on investment (ROI)."],
];

const dataTest = [
  {
    shadowColor: "bg-[#4E81EC]",
    review: "SEO Company has completely transformed our online presence. Their advanced SEO tactics have boosted our website's traffic and increased our conversions immensely. Their expertise in keyword research, content optimization, and link-building is unmatched. Highly recommend their services!",
    testimonialImage: philip,
    testimonialName: "Philip",
  },
  {
    shadowColor: "bg-[#E1183A]",
    review: "SEO Company has been a game-changer. Their all-around SEO strategies helped us rank higher on search engines and attract more visitors. Their team is super knowledgeable and always ready to help. Five stars!",
    testimonialImage: chris,
    testimonialName: "Chris",
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "If you're looking for professional SEO services that deliver real results, SEO Company is your place to go. Their advanced SEO tactics and commitment to understanding our business have propelled us to the top of search results. Their team is amazing, and their services are worth every penny.",
    testimonialImage: bilal,
    testimonialName: "Bilal",
  },
  {
    shadowColor: "bg-[#24BF5A]",
    review: "I can't say enough good things about SEO Company. Their SEO strategies are well-planned, and work wonders for our search rankings. Their monthly updates keep us informed and confident. Highly recommended!",
    testimonialImage: elissa,
    testimonialName: "Elissa Kidarshan",
  },
  {
    shadowColor: "bg-[#4E81EC]",
    review: "If you want SEO services that really work, go with SEO Company. Their advanced SEO tactics and deep understanding of our business got us to the top of search results. Their team is awesome, and their services are worth every penny.",
    testimonialImage: joe,
    testimonialName: "Joe Francis",
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "SEO Company has a proven success record, and we’ve seen it ourselves. Their custom SEO plans helped us reach our target audience better, and their ongoing support ensures we keep growing. They're the best SEO firm out there.",
    testimonialImage: moses,
    testimonialName: "Moses",
  },
];

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="# Pay Per Click Agency"
        title="Get Your Website Noticed With Our Google Ads Services."
        desc="Do you want your customers to find you easily? We can help you do that! Our precision targeting through our Google ads management services positions your campaigns prominently, ensuring swift and impactful results."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]"
        spaceBottom="pb-0"
        marqueeCss="py-[80px] md:pb-[100px] "
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        ctaText="Get Started Now!"
        />
      <ImageComponent />
      <div className="xs:py-[50px] py-[90px]">
        <Package
          id={1}
          title={`Convert Browsers into Buyers With Our  <br class='hidden md:block' />
            <span class="text-[#E1183A]">Google Ads Services</span>`}
            desc="Engage your target audience with Google Ads, capturing more leads by featuring prominently on Google’s first page, where interested users are already searching for your offer. "
            />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="All You Got To Do Is Reach Out To Our Google Ads Experts!"
          desc="With SEO Company by your side, all your online business hurdles are history. Experience the best Google ad service today."
          btnText="Give Us a Ring!"
          titleClass="xs:text-[22px] text-[24px] sm:text-[32px]  lg:text-[35px] xl:text-[45px] 2xl:text-[50px] "
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs
          subTitle="Ready to attract more qualified leads?"
          title="Here’s What You Get With Our <br class='lg:block hidden'/> Google Ads Services"
          desc="Our Google Advertising Services can help attract more qualified leads. We offer an all-around PPC (pay-per-click) solution, encompassing everything from Google PPC services to expert ad management service and campaign optimization."
          data={chooseData}
        />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Testimonial data={dataTest} />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Industries
          title="Customer Base From Different Industries"
          desc="Businesses of every GENRE or SCALE are more than welcome to increase their DIGITAL worth with us!"
          data={[
            [industries1, "Retail", " Drive more traffic to your e-commerce store <br/>  and increase sales with targeted ads."],
            [industries2, "Healthcare", "Connect with patients searching for your services <br/> and build a stronger online presence."],
            [industries3, "Technology", "Showcase your innovative products and solutions  <br/>to tech-savvy audiences."],
            [industries4, "Finance", "Reach potential clients looking for financial  <br/> advice, investment opportunities, and banking <br/>services."],
            [industries5, "Education", "Attract students and parents to your <br/>educational programs and institutions."],
          ]}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Contact />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <FAQs
          items={[
            {
              title: "What are Google Ads Services?",
              content:
                "Google Ads Services helps businesses manage their advertising campaigns on Google's vast network. This includes creating, optimizing, and tracking ads to reach potential customers at the right moment.",
            },
            {
              title: "What are the benefits of using Google Ads Services?",
              content:
                "Many benefits include increased website traffic, more leads and sales, improved brand awareness, and reaching a targeted audience.",
            },
            {
              title: "How much do Google Ads Services cost?",
              content:
                "You set your own budget for Google Ads, so you have control over your spending. Costs depend on factors like your industry, keywords targeted, and ad competition.",
            },
            {
              title: "Do I need experience to use Google Ads Services?",
              content:
                "No prior experience is necessary. Google offers tools and resources to get you started, and there are also Google Ads management agencies like us that can handle everything for you.",
            },
            {
              title: "What type of ads can I create with Google Ads?",
              content:
                "There are several ad formats, including text ads on search results pages, display ads on websites across the web, and shopping ads that showcase your products.",
            },
            {
              title: "How can I track the performance of my Google Ads campaigns?",
              content:
                "Google Ads provides detailed reporting tools that allow you to track your ads' performance, track conversions, and optimize your campaigns for better results.",
            },
          ]}
        />
      </div>
    </main>
  );
}
