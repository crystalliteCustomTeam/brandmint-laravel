// Components
import { Awards, CallAway, ComboPackage, Contact, FAQs, Hero, SeoServiceSteps, Testimonial, WhyChooseUs } from "@/components";
import Content from "@/components/Content";
// Media
import HeroImg from "media/onpageseoHero.png";
import googleCrawl from "media/on-page-seo/google-crawl.png";
import pageSeo from "media/on-page-seo/page-seo.png";
import seoService from "media/on-page-seo/seo-service-business.png";
import UiUx from "media/on-page-seo/ui-ux-check.png";

import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";

import icon1 from "media/social-media-marketing/speech-bubble.png";
import icon2 from "media/social-media-marketing/customer-centric-approch.png";
import icon3 from "media/social-media-marketing/great-idea.png";

// listing Data
let data = [
  {
    Heading: "Improved User Experience:",
    spanDesc: "Our on-page SEO service ensures a seamless and engaging UX.",
  },
  {
    Heading: "Internal Linking:",
    spanDesc: "We will add relevant internal links to make sure it is easier for users to navigate.",
  },
  {
    Heading: "Mobile-Friendly Design:",
    spanDesc: "Our on-page SEO company strategies ensure your site looks great and functions well on all devices.",
  },
];

const dataTest = [
  {
    shadowColor: "bg-[#4E81EC]",
    review: "Impressed with the detailed on-page SEO strategies. They know how to optimize for both search engines and users!",
    testimonialName: "Alex M",
    testimonialImage: philip,
  },
  {
    shadowColor: "bg-[#E1183A]",
    review: "Exceptional service! The on-page SEO improvements significantly boosted our site’s ranking and visibility.",
    testimonialName: "Sarah L",
    testimonialImage: chris,
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "Highly recommend their on-page SEO services. Professional, effective, and excellent results in a short time.",
    testimonialName: "John D",
    testimonialImage: bilal,
  },
  {
    shadowColor: "bg-[#24BF5A]",
    review: "I can't say enough good things about the on page SEO this company has done for me. Their On page strategies are well-planned, and worked wonders for my website. Absolutely recommended!",
    testimonialName: "Jessica K",
    testimonialImage: elissa,
  },
  {
    shadowColor: "bg-[#4E81EC]",
    review: "Five stars for SEO Company. Their on page SEO techniques really helped me improve my website’s content and that also increased the authority in days, hiring them was the best decision I made.",
    testimonialName: "Glenn Smith",
    testimonialImage: joe,
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "SEO Company delivers effective on-page optimization services, enhancing website visibility and rankings. Their expert team focuses on content quality, meta tags, and site structure, driving organic traffic and improving search engine performance for businesses. ",
    testimonialName: "Amanda",
    testimonialImage: moses,
  },
];

// Why Choose Section Data
const chooseData = [
  [icon1, "Expert Team", "Our SEO professionals offer top-notch services, boosting organic traffic by 150% within six months, boosting conversion rates by 25%, and achieving 200% ROI and 30% increase in high-quality leads."],
  [icon2, "Customized Strategies", "We create customized on-page SEO strategies that align with your business objectives and target audience."],
  [icon3, "Proven Results", "Our track record of success speaks for itself, with numerous clients experiencing significant improvements in their search engine rankings and traffic."],
];

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="On Page SEO Services"
        title="Build Your Website’s Authority With Our Expert On-Page SEO Services"
        desc="Need help to attract more organic traffic and increase your website’s authority? We’re here to help and increase your website’s performance through our proven on-page SEO services. We specialize in optimizing every element of your site to enhance search engine rankings and improve user experience. "
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] sm:text-[35px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[80px] pt-[50px] xs:pt-[50px] sm:pt-[80px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        ctaText="Get a Custom SEO Strategy!"
      // ctaText2="Contact Us for Expert SEO Solutions!"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial
          data={dataTest}
        />
      </div>

      <div>
        <ComboPackage />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs
          title="Why SEO Company Is Your Go-To <br class='lg:block hidden'/> On-Page SEO Agency"
          desc="Choosing the right on page SEO agency is essential for maximizing your website's potential. At SEO Company, we offer specialized on-page SEO services tailored to your unique needs. As a leading on-page SEO company, we ensure your website’s content is optimized to achieve higher rankings and attract more organic traffic."
          data={chooseData}
        />
      </div>

      <div className="xs:py-[40px] md:py-[50px]">
        <div className="my-5">
          <Content
            title="Let Google Index Your Website Content Faster with Our On-Page SEO Services"
            desc="Maximize your website's potential with our comprehensive on-page SEO services. Our on-page optimization services ensure that every element of your site is fine-tuned for peak performance. From keyword integration to content adjustments, we provide a holistic approach that drives organic traffic and boosts search engine rankings. Trust our team to deliver strategies that enhance user experience and improve your site's indexability."
            img1={googleCrawl}
            // ctaText="Start Improving Your SEO Today!"
            // ctaText2="See Real Results with Our Services!"
          />
        </div>
        <div className="my-5">
          <Content
            title="How Does On-Page SEO Work?"
            desc="Understanding how on-page SEO works is important before you dive into it. At our on page SEO agency, we optimize various aspects of your website to enhance visibility and user experience. Our on page SEO services include keyword optimization, meta-tag improvements, and enhancing heading structures. Our on-page SEO team analyzes and adjusts these elements to ensure your site ranks higher on search engines."
            img1={pageSeo}
            direction="flex-row-reverse"
            ctaText="Get in touch with us today!"
          />
        </div>

        <div className="my-5">
          <Content
            title="Why On-Page SEO is Essential for Your Search Engine Ranking"
            desc="On-page SEO is vital in determining your website’s search engine ranking. Effective on-page SEO services enhance your site's visibility, making it easier for potential customers to find you. As a leading on page SEO company, we provide tailored solutions to improve your ranking and drive organic traffic."
            img1={seoService}
            // ctaText="Get Started with Professional SEO Services!"
          />
        </div>

        <div className="my-5">
          <Content title="Improve UI/UX With Our On-Page SEO Services" list={true} listingData={data} img1={UiUx} direction="flex-row-reverse" />
        </div>
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Achieve Top SERP Ranks With Our On-Page SEO Services"
          desc="Experience the benefits of optimized content, improved user experience, and higher search engine<br class='xl:block hidden'/> rankings with our tailored on-page SEO solutions."
          titleClass="!text-[24px] sm:!text-[32px]  lg:!text-[30px] xl:!text-[45px] 2xl:!text-[55px]"
        />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <SeoServiceSteps
          title={`Drive Organic Traffic with Targeted <br class='hidden md:block' /> <span class="text-[#E1183A]">On Page SEO Services</span>`}
          description="Explore our comprehensive collection of on-page SEO services designed to improve your website’s performance and visibility."
          items={[
            {
              no: "01",
              title: "On-Page SEO Audit:",
              content: "Our on page SEO specialists conduct thorough audits to identify and fix any issues impacting your website's performance.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "02",
              title: "Keyword Research & Planning:",
              content: "Our on-page SEO consultants develop a targeted keyword strategy to boost your search engine rankings.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "03",
              title: "On-Page SEO Optimization:",
              content: "We implement a robust on-page SEO plan to ensure that every element of your site is optimized for success.",
              borderColor: "border-[#34A854]",
            },
            {
              no: "04",
              title: "Title & Meta Tag Optimization:",
              content: "Our on page SEO marketing services include crafting compelling titles and meta tags to attract more clicks.",
              borderColor: "border-[#000000]",
            },
            {
              no: "05",
              title: "URLs Optimization:",
              content: "With our on page SEO solutions, we streamline your URLs to enhance user experience and search engine friendliness.",
              borderColor: "border-[#F8BA05]",
            },
            {
              no: "06",
              title: "Complete Internal Linking:",
              content: "Our on page SEO companies create a strategic internal linking structure to improve site navigation and ranking.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "07",
              title: "Improved Heading Hierarchy:",
              content: "With our expert on page SEO services, we improve your website’s heading hierarchy so that your content is easier to understand.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "08",
              title: "Image Optimization:",
              content:
                "Our on page search engine optimization services include optimizing images to improve load times and SEO performance.",
              borderColor: "border-[#34A854]",
            },
          ]}
        />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Contact
          title={`Enhance <strong>Your Rankings </strong>with <br class="hidden sm:block"/>
        a Custom On-Page<br class="hidden sm:block"/>
        <strong> SEO Strategy!</strong>`}
        />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <FAQs
          items={[
            {
              title: "What is on-page SEO, and why is it vital?",
              content:
                "On-page SEO involves optimizing individual web pages to improve search engine rankings and attract more relevant traffic. It requires keyword usage, meta tags, and content quality to improve visibility and user experience.",
            },
            {
              title: "How can an on-page SEO agency help my business?",
              content:
                "An on page SEO agency like ours provides specialized on page SEO marketing services, ensuring that every element of your site is optimized for search engines and users, boosting your rankings and driving organic traffic.",
            },
            {
              title: "What services are included in on-page SEO?",
              content:
                "Our on-page SEO services include keyword research, meta-tag optimization, content enhancement, internal linking, and site structure improvements. These services collectively enhance your website’s search engine performance.",
            },
            {
              title: "Why choose an SEO Company for on-page SEO optimization?",
              content:
                "As one of the best on page SEO services providers, our team of on-page SEO experts tailors strategies to your business needs, ensuring effective and sustainable improvements in search engine rankings and user engagement.",
            },
            {
              title: "How is on-page SEO different from off-page SEO?",
              content:
                "On-page SEO focuses on optimizing elements within your website, like content and meta tags, while off-page SEO involves external factors, such as backlinks. Both are essential for comprehensive on page search engine optimization services.",
            },
            {
              title: "What results can I expect from your on-page SEO services?",
              content:
                "With our best on page SEO service, you can expect improved search engine rankings, increased organic traffic, and enhanced user experience. This ultimately leads to higher conversions and business growth.",
            },
          ]}
        />
      </div>
    </main>
  );
}
