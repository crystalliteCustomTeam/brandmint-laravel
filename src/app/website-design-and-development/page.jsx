"use client";
// Components
import { Awards, CallAway, FAQs, Hero, Process, Package, Portfolio, Testimonial, WhyChooseUs, Contact } from "@/components";
// Media
import heroImg from "media/webDevelopmentImg.png";
import { useEffect, useState } from "react";

// Media
import philip from "media/testimonial/philip.png";
import chris from "media/testimonial/chris.png";
import bilal from "media/testimonial/bilal.png";
import elissa from "media/testimonial/elissa.png";
import joe from "media/testimonial/joe.png";
import moses from "media/testimonial/moses.png";

import icon1 from "media/social-media-marketing/speech-bubble.png";
import icon2 from "media/social-media-marketing/customer-centric-approch.png";
import icon3 from "media/social-media-marketing/great-idea.png";
import PackageWeb from "@/components/Packages-web/PackageWeb";

export default function Page() {
  // const [marqueeTheme, setMarqueeTheme] = useState("dark");
  // useEffect(() => {
  //   const checkMobile = () => {
  //     if (window.innerWidth < 992) {
  //       setMarqueeTheme("light");
  //     } else {
  //       setMarqueeTheme("dark");
  //     }
  //   };
  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => {
  //     window.removeEventListener("resize", checkMobile);
  //   };
  // }, []);
  const dataTest = [
    {
      shadowColor: "bg-[#4E81EC]",
      review: "SEO Company was professional, communicative, and creative from start to finish. They delivered a custom website that truly represents our brand. Our sales have seen a noticeable boost since the launch!",
      testimonialImage: philip,
      testimonialName: "Mark T.",
    },
    {
      shadowColor: "bg-[#E1183A]",
      review: "The team at SEO Company is fantastic. They created a custom website for us that is visually appealing and easy to use. Their dedication to our project was evident in every detail.",
      testimonialImage: chris,
      testimonialName: "Jacob S.",
    },
    {
      shadowColor: "bg-[#F5C228]",
      review: "The website SEO Company designed for us is incredible. It's responsive, fast, and user-friendly. Their team was easy to work with and delivered exactly what we wanted. We highly recommend their services!",
      testimonialImage: bilal,
      testimonialName: "Alex S",
    },
    {
      shadowColor: "bg-[#24BF5A]",
      review: "We couldn't be happier with our website from SEO Company. Their exceptional design and development skills result in a beautiful and effective site. Our business has seen great growth since the launch",
      testimonialImage: elissa,
      testimonialName: "Jessica R.",
    },
    {
      shadowColor: "bg-[#4E81EC]",
      review: "SEO Company was there every step of the way from initial consultation to launch. Their expertise in design, development, and customer service is unmatched.",
      testimonialImage: joe,
      testimonialName: "Rachel L.",
    },
    {
      shadowColor: "bg-[#F5C228]",
      review: "They Delivered on Their Promises! SEO Company was transparent and reliable throughout the entire project. Their website design, development, and customer service are top-notch.",
      testimonialImage: moses,
      testimonialName: "Stephen T.",
    },
  ];

  const choose = [
    [icon1, "Transparent <br/> Communication", "We prioritize clear, honest communication, building trust, and consistently delivering on our commitments."],
    [icon2, "Client-Centered <br/> Approch", "We focus on your unique needs, offering customized website development services that drive success."],
    [icon3, "Innovative <br/> Solutions", "Our skilled team provides top-tier web design services, leveraging the latest tech trends to keep your brand at the forefront."],
  ]
  return (
    <main>
      <Hero
        subTitle="# 1 Website Design Agency"
        title="Web Design and Development Services for Remarkable Results"
        desc="Our company specializes in creating visually appealing, functional websites that cater to your business needs, ensuring exceptional user experiences, smooth navigation, and rapid load times."
        bg={heroImg}
        marqueeCss="absolute bottom-[100px] left-0 right-0"
        spaceBottom="pb-[300px]"
        ctaText="Contact us today for a free consultation!"
        titleCss="xs:text-[30px] text-[45px] md:text-[35px] lg:text-[35px] xl:text-[45px] 2xl:text-[55px]"
      />
      <div>
        <Process />
      </div>


      <div className="xs:py-[50px] py-[90px]">
        <CallAway
          title="Our Website Design Specialists Are Just A Call Away!"
          desc="Is your website underperforming? We offer top-notch web design and development to tackle <br class='xl:block hidden'/> all your online challenges with appealing and  functional solutions."
          titleClass="xs:text-[22px] text-[24px] sm:text-[32px]  lg:text-[35px] xl:text-[45px] 2xl:text-[50px] "
        />
      </div>
      <div className="xs:py-[50px] py-[50px]">
        <Portfolio />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <PackageWeb id={1} desc="Get exceptional web design and development at budget-friendly prices. Our flexible pricing options align with your goals, delivering impressive results without overspending."
          btnText="Contact Us"
        />
      </div>
      <div className="xs:py-[50px] py-[90px]">
        <WhyChooseUs
          title="Accelerate Your Business Growth with Website <br class='hidden lg:block' /> Design &  Development Company"
          desc="Competing online can be challenging with many companies out there. Our professional web design and development services give <br class='hidden lg:block' /> you the edge you need for growth."
          data={choose}
        />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <Testimonial title="Curious How We Helped Others?" desc="Our Reviews Speak for Themselves!
" data={dataTest} />
      </div>

      <div className="xs:py-[50px] py-[90px]">

        <Contact title={`Get your <strong>Exclusive 30 minutes </strong><br class="hidden sm:block"/>
            Website Design Consultation <br class="hidden sm:block"/>
            at No Cost—A<strong>  $300 Value!</strong>`}
          btnText="Schedule Your Conference Now!"
        />
      </div>

      <div className="xs:py-[50px] py-[90px]">
        <FAQs
          items={[
            {
              title: " What are web design & development services?",
              content:
                "Web design & development services include creating and maintaining websites, focusing on both the visual design and the functionality.",
            },
            {
              title: "Can you redesign my existing website?",
              content:
                "Yes, we offer redesign services to update and improve your current website's look, feel, and performance.",
            },
            {
              title: "Why should I choose SEO Company for web design services?",
              content:
                "SEO Company offers professional web design services, focusing on user experience, aesthetics, and functionality. We ensure your website stands out.",
            },
            {
              title: "What makes your website design & development company different?",
              content:
                "Our company combines creativity, technical expertise, and a client-focused approach to deliver custom solutions that meet your specific business needs.",
            },
            {
              title: "How long does it take to complete a website design project?",
              content:
                "The timeline varies depending on the project scope, but a standard website can typically be completed in 4 to 8 weeks.",
            },
            {
              title: "Do you offer maintenance and support after the website is launched?",
              content:
                "We provide ongoing maintenance and support to ensure your website remains up-to-date and functions smoothly.",
            },
            {
              title: "What is included in your professional web design services?",
              content:
                "Our services include custom design, responsive layouts, user interface design, and integration of necessary functionalities like e-commerce and content management systems.",
            },
          ]}
        />
      </div>
    </main>
  );
}
