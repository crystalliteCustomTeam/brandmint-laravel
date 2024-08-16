// Components
import { CallAway, Contact, FAQs, Hero, Package, Testimonial } from "@/components";
import Content from "@/components/Content";
// Media
import HeroImg from "media/googleservicesHero.png";
import GoogleService1 from "media/google-services1.png";
import GoogleService2 from "media/google-services2.png";
import GoogleService3 from "media/google-services3.png";
import GoogleServices from "@/components/GoogleServices";

import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";

const dataTest = [
  {
    shadowColor: "bg-[#4E81EC]",
    review: "Choosing SEO Company was a game-changer for my business. Their Google Screened Services not only boosted my online visibility but also instilled trust in potential customers. Highly recommend!",
    testimonialName: "Traci Mack",
    testimonialImage: philip
  },
  {
    shadowColor: "bg-[#E1183A]",
    review: "As a small business owner, I was skeptical about investing in Google Screened Ads. However, after partnering with SEO Company, I’ve seen a noticeable increase in leads and inquiries. Their expertise in the Google Screened Program is unmatched.",
    testimonialName: "Nathan Wilkerson",
    testimonialImage: chris
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "SEO Company helped us achieve the Google Screened Badge swiftly and efficiently. Now, our customers feel more confident in choosing our services, thanks to their credibility and professionalism.",
    testimonialName: "Ellis Mccoy",
    testimonialImage: bilal
  },
  {
    shadowColor: "bg-[#24BF5A]",
    review: "I’m thrilled with the results from SEO Company’s Google Screened Services. Our ranking on Google has improved significantly, and we’re getting more clicks than ever before. Thank you for your dedication and expertise!",
    testimonialName: "Rudy Rowe",
    testimonialImage: elissa
  },
  {
    shadowColor: "bg-[#4E81EC]",
    review: "After struggling to compete in a crowded market, SEO Company’s Google Screened services gave us the edge we needed. Our business is now thriving, and we’re attracting higher-quality leads consistently.",
    testimonialName: "Juanita Maldonado",
    testimonialImage: joe
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "Choosing SEO Company for their Google Screened Business services was one of the best decisions we made. The trust and credibility that come with the Google Screened Badge have helped us establish a stronger presence online.",
    testimonialName: "Iris Harmon",
    testimonialImage: moses
  },
];

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="Wouldn't you love for your Google Screened Badge to shine brighter than your competitors?"
        title="We Guarantee High Standards and Exceptional Results with Our Google Screened Services"
        desc="Wouldn't you love for your Google Screened Badge to shine brighter than your competitors? Our Google Screened Program optimization services ensure your profile stands out. If your Google Screened Badge isn't delivering the expected results, trust us to lift your presence to new heights."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] sm:text-[30px] lg:text-[38px] xl:text-[45px] 2xl:text-[50px]"
        spaceBottom="pb-0"
        marqueeCss="py-[80px] md:pb-[100px] "
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        gridleft="col-span-12 lg:col-span-7"
        gridright="col-span-12 lg:col-span-5"
        ctaText="Call us today!"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial
          title="Don’t Believe Us? See for Yourself"
          desc="If you believe otherwise, see what our clients say about us."
          data={dataTest}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <GoogleServices />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <Content
          title="Build a Trusted Reputation with Our Google Screened Services"
          desc="We are here to inform you that your Google My Business soared above your competitors easily! That sounds fascinating, doesn’t it? Well, if your current GMB listing isn’t delivering the results you need, we are here to transform it into a top performer. <br/><br/> Whether it’s Google Screened Ads, or optimizing your Google Screened Business, our expertise ensures you stand out as a Google Screened Firm."
          img1={GoogleService1}
          ctaText="Connect with us!"
        />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <Content
          title="Get Sales-Ready Leads and Experience Success with Our Google Screened Services!"
          desc="At SEO Company, we specialize in Google Screened Services to promote your business."
          direction="flex-row-reverse"
          img1={GoogleService2}
          ctaText="Ready to Connect?"
        />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <Content
          title="Increase Your Credibility with Our Google Screened Services"
          desc="We make it easy for you to earn customer trust with the prestigious Google Screened Badge."
          img1={GoogleService3}
          ctaText="Connect Now"
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Our Google Screened Services Are Just a Call Away"
          desc="Our Google Screened Services ensure your business stands out with the prestigious Google Screened Badge, furthering your credibility and trust."
          btnText="Let’s Connect!"
          titleClass="xs:text-[22px] text-[24px] sm:text-[32px]  lg:text-[35px] xl:text-[45px] 2xl:text-[50px] "
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Package
          id={1}
          title={`Crush Your Competition Without <br class='hidden md:block' />
          <span class="text-[#E1183A]">Crushing Your Budget</span>`}
          desc="At SEO Company, we deliver results-driven SEO services at unbeatable rates. Our tailored SEO packages are designed to fit your budget and business goals perfectly."
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Contact
          title={`Claim Your <strong>Free 30-Minute </strong> <br class="hidden sm:block"/>
          Google Screened Ads Strategy <br class="hidden sm:block"/>
          Session At $300 Value from <br class="hidden sm:block"/>
          <strong> Our Experts!</strong>`}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <FAQs
          items={[
            {
              title: "How long does SEO take to generate results?",
              content:
                "SEO is a marathon, not a sprint. Typically, you can expect to see initial improvements within 3-6 months, with more substantial results building over time as your Google Screened strategy takes effect.",
            },
            {
              title: "What Includes In on-page SEO services?",
              content:
                "Our on-page SEO services cover everything from keyword optimization and content creation to technical tweaks and user experience enhancements. We ensure your Google Screened Business shines with optimized Google Screened Ads and the coveted Google Screened Badge.",
            },
            {
              title: "Why is SEO important for your business?",
              content:
                "SEO is crucial for visibility and credibility. It helps your Google Screened Company rank higher in search results, driving more traffic and potential clients to your site. With our Google Screened Program, your business stands out as a trusted Google Screened Firm.",
            },
            {
              title: "How does SEO Company carry out its SEO service delivery?",
              content:
                "We combine data-driven insights with personalized strategies. From broad audits to continuous optimization, we ensure your Google Screened Services deliver maximum impact. Our team is dedicated to transforming your business into a leading Google Screened Company.",
            },
            {
              title: "Why should you partner with us?",
              content:
                "Partnering with SEO Company means gaining a dedicated team of experts committed to your success. We provide tailored solutions to help your Google Screened Business thrive, utilizing cutting-edge techniques and the latest Google Screened works to achieve outstanding results.",
            },
            {
              title: "Why is SEO important for your business?",
              content:
                "SEO is the key to unlocking online growth. By improving your search engine rankings, we help your Google Screened Firm attract more clients and establish a stronger digital presence. Our all-inclusive Google Screened Services are designed to propel your business to new heights.",
            },
          ]}
        />
      </div>
    </main>
  );
}
