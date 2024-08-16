// Components
import {Awards, CallAway, FAQs, Hero, Package, SeoServiceSteps, Testimonial, WhyChooseUs} from "@/components";
import Content from "@/components/Content";
// Media
import HeroImg from "media/localseoservicesHero.png";
import seoImg from "media/local-seo-service/seo.png";
import BusinessSeoImg from "media/local-seo-service/business-seo.png";
import qualityLeadsImg from "media/local-seo-service/qualityLeads.png";
import CallAwayImageMen from "media/callaway/menLaptop.png";
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

// Why Choose Section Data
const chooseData = [
  [icon1, "Custom Plans:", "We create strategies tailored to your business needs, ensuring the best results."],
  [icon2, "Proven Results:", "Our local business SEO services have a history of driving growth and sales."],
  [icon3, "Expert Team:", "Our knowledgeable team stays updated with the latest SEO trends, keeping you ahead of the game."],
];

const dataTest=[
  {
    shadowColor: "bg-[#4E81EC]",
    review: "Since partnering with SEO Company, our local visibility has skyrocketed! We've seen a substantial increase in foot traffic and online inquiries. They really know their stuff when it comes to local SEO!",
    testimonialName: "James Anderson",
    testimonialImage: philip
  },
  {
    shadowColor: "bg-[#E1183A]",
    review: "The team at SEO Company is nothing short of spectacular. They helped us refine our local SEO strategy, and now we're consistently topping local search results!",
    testimonialName: "Michael Johnson",
    testimonialImage: chris
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "If you want to get noticed in your local area, an SEO Company is the way to go. Their tailored strategies have made a noticeable difference in our business's online presence.",
    testimonialName: "William Thompson",
    testimonialImage: bilal
  },
  {
    shadowColor: "bg-[#24BF5A]",
    review: "Investing in SEO Company's services has been the best decision for our business. We've seen a dramatic increase in local search rankings and overall brand recognition.",
    testimonialName: "Emily Roberts",
    testimonialImage: elissa
  },
  {
    shadowColor: "bg-[#4E81EC]",
    review: "What sets SEO Company apart is their professionalism and client commitment. They revamped our local SEO strategy, and we immediately saw the impact. They're truly committed to helping businesses succeed.",
    testimonialName: "Sophia Martinez",
    testimonialImage: joe
  },
  {
    shadowColor: "bg-[#F5C228]",
    review: "SEO Company has truly set a new standard for what we expect from an SEO service. Their dedication to improving our local search rankings has resulted in a noticeable uptick in foot traffic. We're absolutely thrilled with the progress!",
    testimonialName: "Alexander Davis",
    testimonialImage: moses
  },
];

export default function Page() {
  return (
    <main>
      <Hero
        subTitle="Our Local SEO Services"
        title="Expand Your Reach with <br class='xl:block hidden '/> Local SEO Services!"
        desc="Accelerate your business success with SEO Company. We specialize in attracting new clients using innovative digital strategies and local SEO services that stand out in a crowded market."
        img={HeroImg}
        variant="default"
        marqueeTheme="light"
        titleCss="xs:text-[30px] text-[40px] md:text-[45px] lg:text-[45px] xl:text-[55px] 2xl:text-[60px]"
        spaceBottom="pb-0"
        marqueeCss="pb-[80px] xs:pt-[50px] sm:pt-[50px]"
        imgCss="absolute lg:relative bottom-0 left-0 right-0 top-0 max-w-[80%] object-cover -z-10 right-0  lg:max-w-full opacity-15 lg:opacity-100"
        gridleft="col-span-12 lg:col-span-7"
        gridright="col-span-12 lg:col-span-5"
        ctaText="Get in Touch Now!"
      />
      <div className="xs:py-[50px] py-[90px]">
        <Package 
        id={1}
        title={`Drive Results with Our <br class='hidden md:block' />
                        <span class="text-[#E1183A]">Affordable Local SEO Services</span>`}
        desc="You can get a wide selection of the best local SEO services, all of which are customized to different business requirements."
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs
        subTitle="Why Opt for Us?"
        title="To See Your Business Thrive <br class='sm:block hidden'/> Every Single Day!"
        desc="Thriving online can be challenging, especially with most businesses using social media. At SEO Company, we get it. Our experts help your brand stand out. Here’s why you should choose us as  your local SEO agency:"
        data={chooseData}   
        />
      </div>
      <div className="xs:py-[30px] md:py-[50px]">
        <div className="my-[40px]">
          <Content
            title="Why Does Your Business Need Local SEO?"
            desc='Ever noticed how certain local businesses pop up first when you search online for something close by? That’s because of a local SEO agency. Let’s break this down with a simple example.
            <br/><br/>
            Say it’s Sunday morning, and you want a coffee. You search "coffee near me" on your phone. The places that show up are using local SEO to ensure they appear right when you’re looking for them.  
            <br/><br/>
            Our SEO services for local businesses can enhance their visibility in local searches, making it the first choice for local customers. Effective local SEO services, be it for a cafe or bookstore, help businesses catch the eye of potential customers in their area.'
            img1={seoImg}
            ctaText="Get Started!"
          />
        </div>
        <div className="my-[40px]">
          <Content
            title="Need Help Getting Found? Hire Our Local SEO Company."
            desc="88%  of the customers conduct their searches on mobile devices. Even more notably, 72% of these potential customers visit a store or make a phone call within just 24 hours of their initial search. This underscores the vital role that local SEO optimization plays in making your business visible to potential customers.
            <br/><br/>
            Securing the services of a skilled local SEO firm is essential in a virtual market where a customer's visit could result from a single click. Employing practical local SEO for businesses puts your brand in the best position to draw in and interact with local searchers who are actively looking for what you have to offer."
            img1={BusinessSeoImg}
            direction="flex-row-reverse"
            ctaText="Contact Us Now!"
          />
        </div>
        <div className="my-[40px]">
          <Content
            title="How Local SEO Services for Small Business Propel Your Lead Generation"
            desc="Getting into the core of an influential local SEO agency can significantly boost your brand's visibility. It all begins with establishing a strong marketing plan, where lead generation and local SEO services play a prominent role. Recognizing the importance of lead generation is essential for any business. Without a steady flow of quality leads, businesses, regardless of size, find it hard to secure sales and expand. Incorporating specialized SEO services for local businesses ensures your brand survives and excels in a competitive environment."
            img1={qualityLeadsImg}
            ctaText="Call Us Now!"
          />
        </div>
      </div>

      <div className="xs:py-[50px] py-[60px]">
        <CallAway
          title="We Can’t Wait To Assist <br class='hidden lg:block'> Your Business!"
          desc="Facing challenges? SEO Company is here to pull you into the spotlight."
          btnText="Boost Your ROI!"
          btnClass="xs:w-full"
        />
      </div>
      <div className="xs:py-[50px] py-[60px]">
        <SeoServiceSteps
          title={`What to Expect with Our <br class='hidden md:block' /> <span class="text-[#E1183A]">Local SEO Services</span>`}
          description="If you choose SEO Company, you can expect a better online presence. Our local SEO services can help your business succeed online."

          items={[
            {
              no: "01",
              title: "Customized Local SEO Solutions:",
              content:
                "Every business is different, and so are the strategies needed to succeed. Our customized local SEO solutions are designed to meet your business's needs, ensuring you rise above local competition and increase visibility.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "02",
              title: "Guidance from Experienced Local SEO Specialists:",
              content:
                "Our dedicated local SEO specialists are central to our promise of effectual service. They bring extensive expertise and a tailored process to your SEO efforts, ensuring your business competes and excels.",
              borderColor: "border-[#EF4252]",
            },
            {
              no: "03",
              title: "Detailed Local SEO Plan:",
              content:
                "Begin a strategic growth adventure with our in-depth local SEO plan. We assess your market, rivals, and opportunities to create a plan that aims for top-notch results.",
              borderColor: "border-[#34A854]",
            },
            {
              no: "04",
              title: "Advice from Local SEO Consultants:",
              content:
                "See your business in a new light with guidance from our local SEO consultants. They provide deep insights and help you ask the right questions about your strategy, going beyond conventional methods.",
              borderColor: "border-[#000000]",
            },
            {
              no: "05",
              title: "Targeted Local SEO Marketing Services:",
              content:
                "Our targeted local SEO marketing services are crafted to position your business as the top choice for local consumers. We focus on improving your listings and optimizing your website content, ensuring precision in every action.",
              borderColor: "border-[#F8BA05]",
            },
            {
              no: "06",
              title: "All-Encompassing Local Search Engine Optimization Services:",
              content:
                "Our all-encompassing local search engine optimization services cover every element needed for effective local optimization, from enhancing your Google My Business profile to managing reviews and boosting local citations.",
              borderColor: "border-[#0085F8]",
            },
            {
              no: "07",
              title: "Choosing a Top Local SEO Company:",
              content:
                "Opting for SEO Company means you’re selecting a leader among local SEO companies. We stay on the leading edge, using the latest technologies and methods to maintain and enhance your local search standings.",
              borderColor: "border-[#EF4252]",
            }
          ]}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Testimonial
          title="Still on the Fence?"
          desc="Here’s why our customers have chosen us times and again!"
          data={dataTest}
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <CallAway CallAwayImage={CallAwayImageWomen}
        title="Need Expert SEO Guidance? Get in Touch With Us Right Now!"
        desc="Fortune favors the bold — and SEO Company is ready to be your bold ally in the digital arena. As your ultimate one-stop SEO solution, we tackle every challenge your business encounters online with precision and expertise."
         bg="bg-[#E1183A] rounded-[40px]" 
         btnClass="!bg-[#202124] !text-white" 
         btnClass2="!bg-white !text-black" 
         btnText="Unlock Your Potential!" 
         btnText2="Contact Us" 
         titleClass="!text-[24px] sm:!text-[32px]  lg:!text-[30px] xl:!text-[45px] 2xl:!text-[50px]"
         />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <FAQs
          items={[
            {
              title: "What does a local SEO agency do?",
              content:
                "A local SEO agency enhances your business's visibility in local search results, making it easier for customers to find and engage with your services.",
            },
            {
              title: "How can local SEO marketing services benefit my small business?",
              content:
                "Local SEO marketing services help increase your visibility in geographic-specific searches, attract more local customers, and improve your overall online presence.",
            },
            {
              title: "Why should I choose local SEO experts for my business?",
              content:
                "Local SEO experts specialize in optimizing your online presence to target an audience in your specific geographic area, which can increase foot traffic and sales.",
            },
            {
              title: "What are the key components of local SEO services?",
              content:
                "Key components include optimizing your Google My Business profile, local keywords optimization, building local backlinks, and managing online reviews.",
            },
            {
              title: "How do local search engine optimization services differ from general SEO?",
              content:
                "Local SEO focuses on boosting your business's visibility in localized searches, while general SEO targets broader, non-location-specific search visibility.",
            },
            {
              title: "What results can I expect from hiring the best local business SEO company?",
              content:
              "Expect improved local search rankings, an increase in local traffic to your website, and a higher conversion rate from nearby customers.",
            },
            {
              title: "How long does it take to see results from local SEO services?",
              content:
                "Results can vary, but typically, noticeable improvements can be seen within 3-6 months after implementing local SEO strategies.",
            },
          ]}
        />
      </div>
    </main>
  );
}
