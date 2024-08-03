// Components
import { Awards, CallAway, FAQs, Hero, Package, Testimonial, WhyChooseUs, Platforms, Advertising, Contact } from "@/components"
// Media
import heroImg from "media/socialMediaHero1.png";
import CallAwayImageWomen from "media/callaway/women.png";

import icon1 from "media/social-media-marketing/speech-bubble.png";
import icon2 from "media/social-media-marketing/customer-centric-approch.png";
import icon3 from "media/social-media-marketing/great-idea.png";

// Why Choose Section Data
const chooseData = [
    [icon1, "Proven Track Record", "SEO Company, a top social media marketing agency, consistently delivers measurable results, driving high ROI and increased engagement, sales, and revenue for clients."],
    [icon2, "Customized Strategies", "Our top social media marketing company customizes services to meet unique business needs, generating high-quality leads and optimizing campaigns for maximum impact, resulting in increased revenue and growth."],
    [icon3, "Dedicated Expertise", "Our team of top social media marketers utilizes cutting-edge tools and platforms to enhance brand visibility, engagement, conversions, and revenue, ensuring long-term business success."],
  ];

export default function Page() {
  return (
    <main>
      <div className="bg-black">
        <Hero
          subTitle="America's Leading Social Media Marketing Company"
          title="Get More Traffic & Sales with Professional Social Media Marketing Services"
          desc="SEO Company provides tailored social media marketing services to boost engagement, customer retention, and sales. Our social media marketing company offers management and full-funnel ROI tracking. Our campaigns use the latest trends to attract visitors and convert them into loyal customers. Our social media marketing agency offers a surge in traffic and sales, and partners can request a proposal for a strategy and pricing."
          img={heroImg}
          theme="dark"
          imgCss="absolute bottom-0  right-0 max-w-[60%] xl:max-w-full opacity-20 lg:opacity-100"
          spaceBottom="pb-[150px] sm:pb-[200px] xl:pb-[250px]"
          marqueeCss="relative top-[-70px] z-10"
          titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]"
        />
      </div>
      <div className="py-[80px]">
        <Awards />
      </div>
      <div>
        <Platforms/>
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <CallAway
        title="Reach a Wider Audience with SEO Company's Social Media Experts Now"
        desc="Hire our #1 social media marketing agency and unlock top-tier SMM services customized to your business needs. Transform your online presence and drive exceptional results today!"
        />
      </div>
     
      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs
        title="Our expert social media marketing services <br class='lg:block hidden'/> offer the best growth opportunities!"
        desc="The SEO Company offers the best social media marketing services, ensuring increased engagement, conversions, and brand growth."
        data={chooseData}   
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Package 
        id={1}
        title={`Outsmart Competitors Without  <br class='hidden md:block' />
          Breaking the Bank with Our<br class='hidden md:block' />
          <span class="text-[#E1183A]"> Social Media Marketing Company!</span>`}
        desc="SEO Company provides outcome-focused SEO services at competitive rates, offering various pricing packages to suit various budgets and business goals, ensuring the best value for investment. "
        />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Testimonial/>
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Advertising/>
      </div>
      
      <div className="xs:py-[50px] py-[90px]">
        <Contact/>
      </div>
      

      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          CallAwayImage={CallAwayImageWomen}
          bg="bg-[#E1183A] rounded-[40px]"
          btnClass="!bg-[#202124] !text-white"
          btnClass2="!bg-white !text-black"
          title="How We Drive Your Business Success With Our Social Media Marketing Company?"
          desc="Hire our social media marketing agency to access customized strategies that deliver outstanding results. Learn how our expert social media marketing services can elevate your business to new heights."
        />
      </div>
     
      <div className="xs:py-[50px] py-[90px]">
        <FAQs
          items={[
            {
              title: "How can social media marketing services increase my traffic and sales?",
              content:
                "Our social media marketing services utilize targeted advertising, engaging content, and strategic campaign management to attract more visitors to your website and convert them into paying customers.",
            },
            {
              title: "What platforms do you specialize in for social media marketing",
              content:
                "We specialize in various platforms, including Facebook, Instagram, YouTube, Twitter, and LinkedIn, and many more to ensure comprehensive coverage and effective audience engagement.",
            },
            {
              title: "How do you measure the success of social media marketing campaigns?",
              content:
                "We use a range of metrics such as engagement rates, conversion rates, click-through rates, and ROI to evaluate the effectiveness of our campaigns and make data-driven adjustments.",
            },
            {
              title: "What makes your social media marketing services different from others?",
              content:
                "Our services stand out due to our customized strategies, expert team, and focus on delivering tangible business outcomes. It includes increased traffic, higher engagement, and boosted sales.",
            },
            {
              title: "How long does it take to see results from social media marketing?",
              content:
                "While some results can be seen within a few weeks, significant and sustained improvements typically become evident within three to six months. It also depends on the campaign and business goals.",
            },
            {
              title: "Do you offer social media marketing packages tailored to different business needs?",
              content:
                "Yes, we offer various packages tailored to different budgets and business goals. We also ensure that our social media marketing services can effectively support businesses of all sizes.",
            },
          ]}
        />
      </div>
    </main>
  );
}
