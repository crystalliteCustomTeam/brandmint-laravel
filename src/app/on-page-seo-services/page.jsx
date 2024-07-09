// Components
import {Awards, CallAway, ComboPackage, Contact, FAQs, Hero, SeoServiceSteps, Testimonial, WhyChooseUs} from "@/components";
import Content from "@/components/Content";
// Media
import HeroImg from "media/onpageseoHero.png";
import googleCrawl from "media/on-page-seo/google-crawl.png";
import pageSeo from "media/on-page-seo/page-seo.png";
import seoService from "media/on-page-seo/seo-service-business.png";
import UiUx from "media/on-page-seo/ui-ux-check.png";

// listing Data
let data = [
  {
    Heading: "Usability Testing",
    spanDesc: "We partner with our customers to build websites that address real user needs.",
  },
  {
    Heading: "User Research",
    spanDesc: "We do comprehensive research to build up user personas to map your website’s full customer journey.",
  },
  {
    Heading: "UX Design",
    spanDesc: "We bring together user experience design and top-notch technology to deliver persuasive web experiences.",
  },
];

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="On Page SEO Services"
        title="The practice of optimizing your website to help your web pages rank higher on Google!"
        desc="On page SEO refers to the marketing measures taken by marketers to optimize individual web pages, including URLs and HTML. On page SEO is the basis of all SEO success. By adjusting the on-page elements, you can increase your chances of ranking for targeted keywords, generating more organic traffic, and making your site more friendly to users and search engine algorithms."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] sm:text-[35px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[80px] pt-[50px] xs:pt-[50px] sm:pt-[80px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial />
      </div>

      <div>
        <ComboPackage />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs />
      </div>

      <div className="xs:py-[40px] md:py-[50px]">
        <div className="my-5">
          <Content
            title="Help Google Crawl Your Website With Our On Page SEO Services!"
            desc="On page SEO is an ongoing, long-term investment — SEO allows you to quickly keep pace with marketing transformations so that your business is ever-present and ever-agile. Every time you want your website to rank on page 1 for a targeted keyword, on-page SEO comes into play. On page SEO research entails a mix of activities that reveal your website's existing position and authority in search and highlight avenues for business growth."
            img1={googleCrawl}
          />
        </div>
        <div className="my-5">
          <Content
            title="What Is On-Page SEO"
            desc="On-Page SEO is the primary step to ranking your website on search engines like Google, Yahoo, and Bing. You will need to track-down keywords your clients may search to find businesses like yours and place them in your content. You will need to optimize your website’s URLs, meta tags, header tags, page content, and much more to optimize your website for On-Page SEO."
            img1={pageSeo}
            direction="flex-row-reverse"
          />
        </div>

        <div className="my-5">
          <Content
            title="How Can On-Page SEO <br className='lg:block hidden'/> Services Help Your <br className='lg:block hidden'/> Business?"
            desc="By using website SEO services to optimize your business, you will save a lot of time and relieve the stress associated with technical SEO problems. Executing an SEO strategy is not an easy task. From trying to grasp how to optimize your online business to keyword research, it can be very overwhelming. If your SEO is done inaccurately, it can cost you a ton of missed leads and revenue for your brand.
        At Jumpto1, we pride ourselves on having on-page SEO experts who are experienced and highly skilled. They improve your website's online visibility, making it easier for searchers to find your content and algorithms to crawl and index your webpage pages."
            img1={seoService}
          />
        </div>

        <div className="my-5">
          <Content title="UI/UX Check" list={true} listingData={data} img1={UiUx} direction="flex-row-reverse" />
        </div>
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <SeoServiceSteps
          items={[
            {
              no: "01",
              title: "Website Audit",
              content: "We begin our on-page SEO optimization strategy by analyzing your website, its structure, keyword density, content.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "02",
              title: "Technical SEO",
              content: "At jumpto1, we check a number of technical parameters to determine areas for improvement to help your website rank higher in the search results.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "03",
              title: "Keyword research",
              content: "We conduct keyword research and provide you with a list of potential keywords your website should be focusing on.",
              borderColor: "border-[#34A854]",
            },
            {
              no: "04",
              title: "On page SEO strategy",
              content: "Our team at Jumpto1 identifies content gaps and maps out the entire SEO architecture to execute across the website.",
              borderColor: "border-[#000000]",
            },
            {
              no: "05",
              title: "On-page SEO optimization",
              content: "Armed with all the details about your website, we establish an on-page SEO optimization strategy and build you an effective SEO architecture.",
              borderColor: "border-[#F8BA05]",
            },
            {
              no: "06",
              title: "Meta Tags",
              content: "We optimize your page for SEO and use custom meta tags to influence users and increase your clickthrough rate (CTR).",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "07",
              title: "URLs",
              content: "When we set a URL for your website page, we include the keyword in the URL as if we're trying to rank for a particular keyword; Google will look for it in the URL.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "08",
              title: "Local SEO",
              content:
                "At Jumpto1, we align these on-page and off-page efforts by optimizing your web pages for local-intent keywords and correcting information on the web about your website, sending Google mixed signals.",
              borderColor: "border-[#34A854]",
            },
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
  );
}
