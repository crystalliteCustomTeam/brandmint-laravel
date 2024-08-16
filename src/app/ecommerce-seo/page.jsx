// Components
import { Awards, CallAway, ComboPackage, Contact, FAQs, Hero, SeoServiceSteps, Testimonial, VersatileSteps, WhyChooseUs } from "@/components";
import Content from "@/components/Content";
import HeroImg from "media/ecommerceHero.png";
import Ecommerce1 from "media/ecommerce1.png";
import Ecommerce2 from "media/ecommerce2.png";
import EcommerceVersatileSteps from "@/components/EcommerceVersatileSteps";

import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";

import icon1 from "media/social-media-marketing/speech-bubble.png";
import icon2 from "media/social-media-marketing/customer-centric-approch.png";
import icon3 from "media/social-media-marketing/great-idea.png";

const dataTest = [
  {
    shadowColor: "bg-[#4E81EC]",
    review: "Working with an SEO Company has been a game-changer for our agency. Their WHITE LABEL SEO SERVICES are top-notch, allowing us to scale our offerings without compromising quality. Highly recommended for digital marketers looking to boost client satisfaction and profitability.",
    testimonialName: "Maria Parsons",
    testimonialImage: philip
  },
  {
    shadowColor: "bg-[#E1183A]",
    review: "As a reseller, I rely on SEO Company’s expertise in WHITE LABEL SEO. They handle the complexities seamlessly, ensuring our clients receive exceptional results. Hiring them has significantly enhanced our service portfolio and client retention rates.",
    testimonialName: "Dale Harvey",
    testimonialImage: chris
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "SEO Company stands out among WHITE LABEL SEO PROVIDERS. Their commitment to excellence and results-driven approach have helped our agency excel in a competitive market. They are trustworthy, reliable, and highly effective—we couldn’t ask for more!",
    testimonialName: "Marvin Duncan",
    testimonialImage: bilal
  },
  {
    shadowColor: "bg-[#24BF5A]",
    review: "Choosing an SEO Company for WHITE LABEL SEO SERVICES was one of our best decisions. Their dedication to our success is evident in every campaign they manage. They truly understand the intricacies of digital marketing and deliver results that exceed expectations.",
    testimonialName: "Ernest Griffith",
    testimonialImage: elissa
  },
  {
    shadowColor: "bg-[#4E81EC]",
    review: "Hiring SEO Company as our WHITE LABEL SEO COMPANY has been instrumental in our growth. Their tailored solutions and proactive support have allowed us to focus on client relationships while they handle the technical aspects flawlessly.",
    testimonialName: "Carroll Marsh",
    testimonialImage: joe
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "We've been collaborating with an SEO Company for RESELLER SEO SERVICES and couldn't be happier. Their expertise and professionalism make them one of the industry's best White Label SEO FIRMS. Highly recommended for agencies looking to elevate their SEO offerings.",
    testimonialName: "Roberto Bowen",
    testimonialImage: moses
  },
];

// Why Choose Section Data
const chooseData = [
  [icon1, "Clear Communication", "We build relationships based on integrity and trust. As the best eCommerce SEO agency, we deliver on our promises and always maintain clear communication."],
  [icon2, "Customer-Centric Approach", "We prioritize our client's success by understanding their unique needs delivering results. As the best eCommerce SEO agency, our eCommerce SEO specialists are committed to providing personalized eCommerce SEO services that help your business flourish."],
  [icon3, "Innovation and Excellence", "As the best eCommerce SEO agency, our eCommerce SEO specialists leverage the latest advancements to provide top-tier eCommerce SEO services that drive your business forward."],
];

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="Do you want to attract more customers to your store?"
        title="Drive More Sales with Our Ecommerce SEO Services."
        desc="At SEO Company, we specialize in eCommerce SEO services designed to raise your online presence and attract more customers to your store. As the best eCommerce SEO agency, we partner with you to amplify your revenue through tailored strategies. By expertly targeting a wide range of keywords, our eCommerce SEO specialists ensure that more qualified buyers discover your products, leading to increased conversions and revenue."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] sm:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px]"
        spaceBottom="pb-0"
        marqueeCss="py-[80px] md:pb-[100px] "
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        ctaText="Hire us!"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial
          title="Don’t Believe Us?"
          desc="See what our customers have to say about us"
          data={dataTest}
        />
      </div>
      <div>
        <ComboPackage />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs
          title="Increase Your Online Sales, With Our <br class='lg:block hidden'/> Perfect SEO Strategy!"
          desc="Surviving and thriving in business is more challenging than ever. The competition is fierce with 90% of U.S. firms leveraging social media. That's where SEO Company comes in. As the best eCommerce SEO agency, we don't believe in cookie-cutter marketing."
          data={chooseData}
        />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <div className="my-5">
          <Content
            title={"Why Do Businesses Need An eCommerce SEO Company?"}
            desc={
              "Despite SEO offering the highest ROI among eCommerce marketing strategies, many online stores neglect search engine optimization, favoring social media marketing or other paid ads. However, SEO delivers consistent, high-converting traffic that other methods can't match.<br/> <br/> The SEO Company offers eCommerce SEO services to improve product rankings for target audience keywords. They understand SEO is a one-time effort, delivering autopilot sales with no ongoing expenses and conducting comprehensive audits for business growth."
            }
            img1={Ecommerce1}
            
          />
        </div>

        <div className="my-5">
          <Content
            title={"Here’s Why Your Business Needs SEO for eCommerce!"}
            desc={
              "Having your store online is a great start, but you risk missing out on new opportunities and potential leads without taking bold steps to enhance your visibility. SEO Company is a full-service digital marketing agency committed to genuine, results-driven strategies. Our eCommerce SEO services are designed to help your online store outperform competitors and dominate the market. As the best eCommerce SEO company, we offer comprehensive SEO for eCommerce websites, including keyword research, product markup, content promotion, and online product management."
            }
            img1={Ecommerce2}
            direction="flex-row-reverse"
            
          />
        </div>
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Our Professional Ecommerce SEO Expert is Just A Call Away"
          desc="We are the ultimate one-stop solution for all your digital marketing challenges. Our eCommerce SEO services are designed to tackle every problem your business faces online."
          btnText="Hire Our SEO Team!"
          titleClass="xs:text-[22px] text-[24px] sm:text-[32px]  lg:text-[30px] xl:text-[40px] 2xl:text-[50px] "
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <SeoServiceSteps
          title="What Makes Our eCommerce  <span class='text-[#E1183A]'> SEO <br class='lg:block hidden'/> Services the Best Choice?</span>"
          description="Leverage SEO Company to your advantage and surpass the online competition by delivering the finest customer experience. As the best eCommerce SEO company, we bring a touch of excellence to your business."
          items={[
            {
              no: "01",
              title: "Boost Your <br class='lg:block hidden'/> Business Efficiency",
              content:
                "With the expertise of the SEO Company, you can raise your eCommerce business, expand your product range, and streamline your operations. Our eCommerce SEO services enable you to implement data-driven strategies that align with your marketing goals. As the best eCommerce SEO company, we position your brand in front of potential buyers, turning them into loyal customers.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "02",
              title: "Strengthen Your Online Foundation rack Record",
              content:
                "Over the years, SEO Company has built a successful digital marketing campaign portfolio that reflects our commitment to excellence.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "03",
              title: "Client-Focused Approach",
              content:
                "At SEO Company, we prioritize your goals above all else. Our team of eCommerce SEO experts ensures everyone is aligned and committed to delivering exceptional results for your projects.",
              borderColor: "border-[#34A854]",
            },
            {
              no: "04",
              title: "We Value Honesty",
              content:
                "If you opt for in-house SEO, investing in expensive SEO tools can incur significant costs. Alternatively, choosing our white-label SEO services at SEO Company can save you expenses while ensuring top-quality SEO solutions.",
              borderColor: "border-[#000000]",
            },
          ]}
        />
        <div className="xs:py-[50px] py-[90px] ">
          <EcommerceVersatileSteps />
        </div>
        <div className="xs:py-[50px] py-[90px]">
          <Contact
            title={`Schedule a <strong>Free Strategy </strong> <br class="hidden sm:block"/>
            Session with Our White Label <br class="hidden sm:block"/>
            <strong> Providers </strong>`}
            btnText="Get Started with eCommerce SEO Now!"
          />
        </div>
        <div className="xs:py-[50px] py-[90px]">
          <FAQs
            items={[
              {
                title: "What are eCommerce SEO services?",
                content:
                  "eCommerce SEO services enhance online store visibility in search engine results through keyword research, on-page and off-page SEO, content optimization, and technical SEO tailored for eCommerce websites.",
              },
              {
                title: "How can eCommerce SEO benefit my online store?",
                content:
                  "eCommerce SEO enhances website visibility, organic traffic, leads, conversion rates, and sales by targeting relevant keywords and optimizing product pages.",
              },
              {
                title: "Why should I choose an SEO Company for eCommerce SEO?",
                content:
                  "The SEO Company specializes in eCommerce SEO, utilizing expert team members to conduct thorough keyword research, implement strategies, and provide tailored solutions to improve online store performance.",
              },
              {
                title: "What does an eCommerce SEO audit involve?",
                content:
                  "An eCommerce SEO audit by SEO Company evaluates a website's technical SEO performance, site structure, content quality, and keyword analysis and identifies areas for improvement to improve overall SEO effectiveness.",
              },
              {
                title: "How does product image optimization help my eCommerce store?",
                content:
                  "Product image optimization services by SEO Company ensure that your product images are optimized for search engines. This enhances visibility in image search results and improves user experience, leading to increased clicks and potential conversions.",
              },
              {
                title: "What sets SEO Company's eCommerce SEO services apart?",
                content:
                  "The SEO Company provides customized eCommerce SEO strategies, ensuring sustainable growth and competitiveness through effective tactics, continuous optimization, and transparent reporting.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
