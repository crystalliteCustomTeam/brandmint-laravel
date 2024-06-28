"use client";
// Components
import {Awards, CallAway, FAQs, Hero, Process, Package, Portfolio, Testimonial, WhyChoose} from "@/components";
// Media
import heroImg from "media/webDevelopmentImg.png";
import CallAwayImageMen from "media/callaway/menLaptop.png";
import {useEffect, useState} from "react";

// Why Choose Section Data
const chooseData = [
  ["/social-media-marketing/speech-bubble.png", "Clear <br/> Communication", "We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication."],
  [
    "/social-media-marketing/customer-centric-approch.png",
    "Customer-Centric <br/> Approch",
    "We prioritize our client's success, understand your unique needs, and deliver tailored solutions that drive your",
  ],
  ["/social-media-marketing/great-idea.png", "Innovation and <br/> Excellence", "We consistently deliver innovative, highquality solutions as a team on the cutting edge of technology trends."],
];

export default function Page() {
  const [marqueeTheme, setMarqueeTheme] = useState("dark");
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 992) {
        setMarqueeTheme("light");
      } else {
        setMarqueeTheme("dark");
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  return (
    <main>
      <Hero
        subTitle="# 1 Website Design Agency"
        title="We Don't Just Build Websites, We Design Websites That Sell!"
        desc="As the top-rated and internationally identified marketing agency, Jumpto1 serves as an intelligent approach to enjoying explosive REVENUE and scalable GROWTH. We pave the path for your business excellence with custom-fit websites featuring user-friendliness, fluid navigation, and laser-target speed."
        img={heroImg}
        spaceBottom="pb-[50px] lg:pb-[100px]"
        imgCss="absolute bottom-0 lg:bottom-[-80px] right-0 -z-10 max-w-[57%] xl:max-w-[55%] 2xl:max-w-full opacity-15 lg:opacity-100"
        titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[40px] xl:text-[55px] 2xl:text-[65px]"
        marqueeTheme={marqueeTheme}
      />
      <div className="py-[80px]">
        <Awards />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Digital Marketing Expert <br /> Is Just A Call Away!"
          desc="If yes, you are in luck with having Brand Mint on your side. We are the ultimate one-stop <br class='xl:block hidden'/> digital marketing solution for all the problems your business faces online."
          CallAwayImage={CallAwayImageMen}
          // Banner={BannerBlue}
          bg="bg-gradient-to-t from-[#202124] to-[#000E2A] rounded-[40px]"
          btnClass="!bg-[#EC4139] !text-white"
          btnClass2="!bg-white !text-black"
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Portfolio />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Package id={1} />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChoose
          subTitle="Why Choose Us"
          title="Because We HelpYour Business Get <br class='lg:block hidden'/> Bigger Every Passing Day!"
          desc="We know, and you know too, that business survival is so challenging in the internet-focused world. And when 90% of U.S. firms use social media, it becomes even more challenging to survive and keep moving. However, with a sound digital marketing agency that doesn't use cookie-cutter marketing, brands can enjoy impressive growth and sales. But the question arises, where to find such an authentic marketing agency?"
          data={chooseData}
        />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Testimonial
          title="Still Not Convinced?"
          desc="Discover What Customers Have To Say About Us"
          gridsClasses="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
          bgClass="bg-transparent border-[1px] shadow-lg rounded-[15px]"
        />
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
            <div className="xs:py-[50px] py-[90px] bg-[url('/bg-gradient.png')] bg-cover bg-center bg-no-repeat">
                <Process />
            </div>
    </main>
  );
}
