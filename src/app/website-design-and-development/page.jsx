"use client";
// Components
import {Awards, CallAway, FAQs, Hero, Process, Package, Portfolio, Testimonial, WhyChooseUs, Contact} from "@/components";
// Media
import heroImg from "media/webDevelopmentImg.png";
import {useEffect, useState} from "react";

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
      <div>
        <Process />
      </div>
      

      <div className="xs:py-[50px] py-[90px]">
        <CallAway />
      </div>
      <div className="xs:py-[50px] py-[50px]">
        <Portfolio />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <Package id={1} />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Testimonial />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Contact/>
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
