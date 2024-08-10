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

// Media
import icon1 from "media/social-media-marketing/speech-bubble.png";
import icon2 from "media/social-media-marketing/customer-centric-approch.png";
import icon3 from "media/social-media-marketing/great-idea.png";

import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";

const dataTest = [
  {
    shadowColor: "bg-[#4E81EC]",
    review: "SEO Company's off-page SEO services transformed our online presence! Their expert team helped us climb the search rankings and attract more traffic. The best part? Their affordable pricing didn't strain our budget. Highly recommend their off-page SEO expertise!",
    testimonialName: "Sarah L",
    testimonialImage: philip
  },
  {
    shadowColor: "bg-[#E1183A]",
    review: "We've tried several SEO companies, but SEO Company stands out. Their off-page SEO techniques are top-notch, and we've seen a significant boost in our website's domain authority. Plus, their flexible pricing packages make finding a solution that fits our needs easy.",
    testimonialName: "David M",
    testimonialImage: chris
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "Working with SEO Company was a game-changer for our business. Their off-page SEO services delivered tangible results, increasing our visibility and sales. The team is knowledgeable, responsive, and genuinely cares about our success. Their off-Page SEO service is worth every penny!",
    testimonialName: "Emily R",
    testimonialImage: bilal
  },
  {
    shadowColor: "bg-[#24BF5A]",
    review: "I was skeptical about SEO services until I partnered with SEO Company. Their off-site SEO services and targeted off-Page SEO techniques helped us outrank our competitors. The customer service is excellent, and they offer the best value for money. A fantastic off-page SEO company!",
    testimonialName: "Mark T",
    testimonialImage: elissa
  },
  {
    shadowColor: "bg-[#4E81EC]",
    review: "SEO Company's off-page SEO agency exceeded our expectations. Their personalized approach and strategic off-page SEO optimization improved our online presence dramatically. We've seen a surge in traffic and conversions. Their affordable pricing made it an easy decision.",
    testimonialName: "Jessica H",
    testimonialImage: joe
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "If you're looking for effective off-page SEO services, look no further than SEO Company. Their team of off-page SEO experts knows how to get results. We appreciated their transparent pricing and customized plans that aligned perfectly with our goals. They've earned our trust and business.",
    testimonialName: "Chris B",
    testimonialImage: moses
  },
];

// Why Choose Section Data
const chooseData = [
  [icon1, "Clear <br> Communication", "At SEO Company, we believe that integrity and trust form the foundation of successful partnerships. We ensure clear communication throughout our collaboration, delivering on our promises with transparency."],
  [icon2, "Customer-Centric Approach", "We place your success at the heart of everything we do. SEO Company takes the time to understand your unique needs and provides tailored Off-Page SEO Services that drive real results."],
  [icon3, "Innovation and Excellence", "Innovation is our driving force at SEO Company. Our team stays ahead of technology trends to deliver high-quality, innovative, Off-Page SEO Services."],
];

let count = [
  {
    title: "Understanding <br class='lg:block hidden'/> Your Goals",
    desc: "We begin by assessing your SEO aspirations and launching our thorough SEO process with a comprehensive SEO analysis and audit of your website. Our off-page SEO specialists methodically assess what's missing and what needs enhancement. We then provide you with a detailed Search Engine Optimization report, highlighting the areas our team will improve and outlining clear future strategies.",
  },
  {
    title: "SEO Audit",
    desc: "We recognize that understanding your competitors is important for effective website SEO. Our SEO specialists conduct thorough industry research to pinpoint key competitors. This insight forms the foundation of our strategy, guiding our approach to marketing and new link-building services.",
  },
  {
    title: "Analyzing Competitor Link Profiles",
    desc: "We understand that digital authority is paramount to gaining Google's favor which is why our dedicated team of Off page SEO experts research and analyze backlink profiles of your competitors to ensure that our off page efforts always stay ahead of the competition.",
  },
  {
    title: "Off-Page Optimization",
    desc: "At SEO Company, our journey begins with understanding your business and marketing objectives through initial meetings. This deep dive allows us to craft robust link building & SEO strategies tailored specifically to your needs. We are dedicated to pushing boundaries by delivering satisfactory and measurable results consistently. Our goal is to provide out of the box link building solutions.",
  },
  {
    title: "Reporting Analysis",
    desc: "At SEO Company, transparency is key. We believe in keeping our clients informed every step of the way throughout the SEO process. We offer various reporting options — weekly, bi-monthly, and monthly — allowing you to choose what suits your needs best. Our reports feature data-focused comparisons that inform our strategy planning. Our detailed result analysis and month-on-month estimates empower our clients to see the tangible differences our off-page optimization efforts make.",
  },
  {
    title: "Staying Updated With Google Algorithms",
    desc: "At SEO Company, we understand the pivotal role of Off-page optimization in the broader SEO scene. Our SEO experts stay updated with Google's latest algorithms to ensure your website backlinks are of the highest quality. This critical step guarantees that your website is easily indexable on all major search engines.",
  },
];

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="Wondering how to enhance your site’s performance?"
        title="Off-Page SEO Services That Get Your Website Ranked"
        desc="At SEO Company, we excel in Off-Page SEO, driving your website to peak success. Our top-tier Off-Page SEO Agency can help increase your website’s authority by strategic and effective link building."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] sm:text-[35px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[80px] pt-[50px] xs:pt-[50px] sm:pt-[80px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        ctaText="Get a Custom SEO Strategy!"
      />
      <div>
        <Platforms variant={"logo"}
          title={`Don’t Just Wait for Miracles, <br class='hidden sm:block' />
                    Let’s Grow Your Business with The SEO Company`}
          desc="No matter if you are a fresh-faced start-up or a professional enterprise, there are essentials you constantly strive for. At SEO Company, we specialize in transforming your online presence."
          images={
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
        <Package id={1}
          title={`Outshine Your Competitors Without <br class='hidden md:block' />
                    <span class="text-[#E1183A]">Draining Your Budget</span>`}
          desc="At SEO Company, we take pride in delivering results-driven off-page SEO services at incredibly competitive rates. Have a look at what we offer."
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial
          title="Don’t Believe Us?"
          desc="Well, you can believe our clients and what they say about us."
          data={dataTest}
        />
      </div>
      <div>
        <ComboPackage />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs

          title="Get Effective Results By Hiring Our Off-Page <br class='lg:block hidden'/> SEO Service!"
          desc="With 90% of U.S. businesses vying for attention on social media, keeping your business noticeable is a formidable challenge. SEO Company is here to help you navigate these complexities and transform potential hurdles into significant growth opportunities."
          data={chooseData}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]" >
        <SeoSteps
          title={`Our 6-Step Off-Page SEO Process Ensures Your Customer Can Easily <br class="2xl:block hidden" />  Find Your Website!`}
          count={count}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]" >
        <Contact
          title={`Claim Your <strong>Complimentary 30-minute </strong><br class="hidden sm:block"/>
                Strategy Session with a Professional<br class="hidden sm:block"/>
                SEO Expert – Valued at<br class="hidden sm:block"/>
                <strong> $300 USD!</strong>`}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]" >
        < TechnologiesTabs />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <CallAway CallAwayImage={CallAwayImageWomen} bg="bg-[#E1183A] rounded-[40px]" btnClass="!bg-[#202124] !text-white" btnClass2="!bg-white !text-black"
          title="Quality Off-Page SEO Services Are Just a Call Away!"
          desc="Quality Off-Page SEO Services Are Just a Call Away!We’re here to serve you! Look no further than SEO Company for all your online business challenges as your one-stop for Off-Page services. "
        />
      </div>
      <div className="xs:py-[50px] py-[90px]" >
        <FAQs
          items={[
            {
              title: "What are Off-Page SEO Services, and why does my business need them?",
              content:
                "Off-Page SEO Services optimize factors outside your website to improve search engine rankings. These include building quality backlinks, social media engagement, and managing online reputation.",
            },
            {
              title: "How can SEO Company's Off-Page SEO Services benefit my business?",
              content:
                "SEO Company specializes in off-page SEO strategies that boost your website's authority and relevance in search engines. We employ advanced techniques such as link building, content marketing, and influencer outreach to improve your rankings and drive targeted traffic to your site.",
            },
            {
              title: "What makes SEO Company's Off-Page SEO Experts effective?",
              content:
                "Our Off-Page SEO Experts are skilled in implementing strategies like building high-quality backlinks from authoritative sites, managing online reviews, and leveraging social media platforms. These efforts increase your website's credibility and trustworthiness, leading to better search engine rankings and increased organic traffic.",
            },
            {
              title: "Why should I choose SEO Company for Off-Page SEO Services over others?",
              content:
                "SEO Company stands out by delivering tailored Off-Page SEO Services that align with your business goals. We focus on ethical SEO practices, provide transparent reporting, and stay updated with the latest techniques to ensure long-term success for your website.",
            },
            {
              title: "How soon can I expect results from SEO Company's Off-Page SEO Services?",
              content:
                "The timeline for seeing results from off-page SEO efforts can vary based on factors like industry competitiveness and current website authority. Generally, noticeable improvements in rankings and traffic can be observed within a few months, with continued growth over time.",
            },
            {
              title: "How does SEO Company enhance my website's visibility through off-page SEO?",
              content:
                "We employ a strategic approach to off-page SEO to improve your website's authority and visibility. We focus on ensuring high-quality backlinks from authoritative websites, engaging effectively on social media platforms to amplify your brand's reach, managing and improving your brand's online reputation across various channels, and implementing content marketing strategies that enhance your SEO efforts and attract organic traffic.",
            },
          ]}
        />
      </div>
    </main>
  )
}
